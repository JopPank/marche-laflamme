const form = document.querySelector("#slip-form");
const details = document.querySelector("#slip-details");
const items = document.querySelector("#slip-items");
const notes = document.querySelector("#slip-notes");
const detailLabels = {
  reference: "Référence",
  customer: "Nom fictif",
  phone: "Téléphone fictif",
  address: "Adresse fictive",
  day: "Jour souhaité",
  replacement: "Remplacements",
};

function renderSlip() {
  const data = new FormData(form);
  details.replaceChildren();
  for (const [name, label] of Object.entries(detailLabels)) {
    const term = document.createElement("dt");
    const value = document.createElement("dd");
    term.textContent = label;
    value.textContent = data.get(name).trim() || "Non précisé";
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
    cell.textContent = "Aucun article saisi — fiche à compléter avant la préparation.";
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
    list.setCustomValidity("Ajoutez au moins un article avant d'imprimer.");
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
