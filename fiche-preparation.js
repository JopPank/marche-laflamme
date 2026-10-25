const form = document.querySelector("#slip-form");
const details = document.querySelector("#slip-details");
const items = document.querySelector("#slip-items");
const notes = document.querySelector("#slip-notes");
const isEnglish = () => document.documentElement.lang.startsWith("en");
const detailLabels = {
  reference: ["Référence", "Reference"],
  customer: ["Nom fictif", "Fictional name"],
  phone: ["Téléphone fictif", "Fictional phone number"],
  address: ["Adresse fictive", "Fictional address"],
  day: ["Jour souhaité", "Preferred day"],
  replacement: ["Remplacements", "Substitutions"],
};

function renderSlip() {
  const data = new FormData(form);
  details.replaceChildren();
  for (const [name, labels] of Object.entries(detailLabels)) {
    const term = document.createElement("dt");
    const value = document.createElement("dd");
    term.textContent = labels[Number(isEnglish())];
    value.textContent = data.get(name).trim() || (isEnglish() ? "Not specified" : "Non précisé");
    details.append(term, value);
  }

  const lines = data.get("items").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  items.replaceChildren();
  for (const line of lines) {
    const row = document.createElement("tr");
    for (const text of ["□", line, ""]) {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.append(cell);
    }
    items.append(row);
  }
  if (!lines.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.textContent = isEnglish()
      ? "No items entered — complete the sheet before picking."
      : "Aucun article saisi — fiche à compléter avant la préparation.";
    row.append(cell);
    items.append(row);
  }
  notes.textContent = data.get("notes").trim() || "________________________________________________________";
}

form.addEventListener("input", renderSlip);
form.addEventListener("change", renderSlip);
form.addEventListener("reset", () => {
  form.elements.namedItem("items").setCustomValidity("");
  queueMicrotask(renderSlip);
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const list = form.elements.namedItem("items");
  if (!list.value.trim()) {
    list.setCustomValidity(isEnglish()
      ? "Add at least one item before printing."
      : "Ajoutez au moins un article avant d'imprimer.");
    list.reportValidity();
    return;
  }
  renderSlip();
  window.print();
});
form.elements.namedItem("items").addEventListener("input", (event) => {
  event.target.setCustomValidity("");
});
renderSlip();
