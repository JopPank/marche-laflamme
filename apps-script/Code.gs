const HEADERS = [
  "Timestamp", "Client Name", "Phone", "Address", "Delivery Date",
  "Delivery Time", "Items / List", "Status", "Request ID"
];

function setup() {
  const properties = PropertiesService.getScriptProperties();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    let id = properties.getProperty("SPREADSHEET_ID");
    if (!id) {
      const spreadsheet = SpreadsheetApp.create("Marché Laflamme - Commandes");
      const sheet = spreadsheet.getSheets()[0];
      sheet.setName("Commandes");
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length)
        .setBackground("#B81D24").setFontColor("#FFFFFF").setFontWeight("bold");
      sheet.autoResizeColumns(1, HEADERS.length);
      id = spreadsheet.getId();
      properties.setProperty("SPREADSHEET_ID", id);
    }
    console.log("Order spreadsheet: https://docs.google.com/spreadsheets/d/" + id + "/edit");
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: "Laflamme Express" });
}

function doPost(event) {
  let lock;
  try {
    if (!event || !event.postData || event.postData.contents.length > 20000) {
      throw new Error("Invalid request body.");
    }
    const data = JSON.parse(event.postData.contents);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Invalid order.");
    }
    const order = {
      requestId: field_(data.requestId, "Request ID", 100),
      clientName: field_(data.clientName, "Name", 150),
      phone: field_(data.phone, "Phone", 50),
      address: field_(data.address, "Address", 400),
      deliveryDate: field_(data.deliveryDate, "Delivery date", 10),
      deliveryTime: field_(data.deliveryTime, "Delivery time", 30),
      items: field_(data.items, "Items", 10000)
    };
    if (!/^[a-zA-Z0-9-]{10,100}$/.test(order.requestId)) {
      throw new Error("Invalid request ID.");
    }
    if (!/^[+\d()\s.-]{7,50}$/.test(order.phone) || order.phone.replace(/\D/g, "").length < 10) {
      throw new Error("Invalid phone number.");
    }
    const parsedDate = new Date(order.deliveryDate + "T12:00:00Z");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(order.deliveryDate) ||
        isNaN(parsedDate.getTime()) ||
        parsedDate.toISOString().slice(0, 10) !== order.deliveryDate ||
        order.deliveryDate < Utilities.formatDate(new Date(), "America/Toronto", "yyyy-MM-dd")) {
      throw new Error("Invalid delivery date.");
    }
    if (!["Matin", "Après-midi", "Soir"].includes(order.deliveryTime)) {
      throw new Error("Invalid delivery time.");
    }
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
    if (!spreadsheetId) throw new Error("The order spreadsheet is not configured.");
    lock = LockService.getScriptLock();
    lock.waitLock(10000);
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName("Commandes");
    if (!sheet) throw new Error("The order worksheet is missing.");
    const lastRow = sheet.getLastRow();
    if (lastRow > 1 && sheet.getRange(2, 9, lastRow - 1, 1)
      .createTextFinder(order.requestId).matchEntireCell(true).useRegularExpression(false).findNext()) {
      return json_({ ok: true, requestId: order.requestId });
    }
    const values = [
      new Date(), order.clientName, order.phone, order.address,
      order.deliveryDate, order.deliveryTime, order.items, "Reçu", order.requestId
    ];
    sheet.appendRow(values.map(value => typeof value === "string" ? safeCell_(value) : value));
    SpreadsheetApp.flush();
    return json_({ ok: true, requestId: order.requestId });
  } catch (error) {
    console.error("Order request failed: " + error.message);
    return json_({ ok: false, error: "Commande non enregistrée. Réessayez ou appelez le (819) 684-4156." });
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function field_(value, name, maxLength) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > maxLength) {
    throw new Error("Invalid field: " + name);
  }
  return value.trim();
}

function safeCell_(value) {
  return /^[=+\-@\t\r\n]/.test(value) ? "'" + value : value;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
