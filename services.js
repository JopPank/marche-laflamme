const request = document.querySelector("[data-service-request]");

if (request) {
  const choices = request.querySelectorAll('input[name="service-type"]');
  const panels = request.querySelectorAll("[data-request-panel]");
  const status = request.querySelector("[data-request-status]");
  const params = new URLSearchParams(window.location.search);
  const initialService = params.get("service");

  if (["traiteur", "gateau", "both", "epicerie"].includes(initialService)) {
    request.querySelector(`input[name="service-type"][value="${initialService}"]`).checked = true;
  }

  const updatePanels = () => {
    const selected = request.querySelector('input[name="service-type"]:checked').value;
    panels.forEach((panel) => {
      const isActive = selected === "both" || panel.dataset.requestPanel === selected;
      panel.hidden = !isActive;
      panel.querySelectorAll("input, select, textarea").forEach((field) => {
        field.disabled = !isActive;
      });
      status.textContent = "";
    });
  };

  choices.forEach((choice) => choice.addEventListener("change", updatePanels));
  updatePanels();

  request.querySelector("[data-demo-request]").addEventListener("click", () => {
    status.textContent = document.documentElement.lang.startsWith("en")
      ? "Prototype only: no information was sent, saved, or uploaded."
      : "Maquette seulement : aucune information n’a été envoyée, enregistrée ou téléversée.";
  });
}
