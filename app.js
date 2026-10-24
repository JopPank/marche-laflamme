const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbztS_X2FazAyv4sjBflunIlxouCIMqwM6tFkSJKj_YdPGBz5AAsoLH14CBiuppx9CpV/exec";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const orderForm = document.querySelector("#order-form");
const statusMessage = document.querySelector("#form-status");
const deliveryDate = document.querySelector("#delivery-date");
const submitButton = orderForm.querySelector('button[type="submit"]');
let pendingRequest = null;

document.querySelector("#current-year").textContent = new Date().getFullYear();

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  .toISOString()
  .slice(0, 10);
deliveryDate.min = localToday;

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    navigation.classList.remove("is-open");
  }
});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusMessage.textContent = "";
  statusMessage.removeAttribute("data-state");

  if (WEBHOOK_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
    statusMessage.dataset.state = "error";
    statusMessage.textContent =
      "Le formulaire n’est pas encore connecté. Appelez le (819) 684-4156 pour transmettre votre commande.";
    return;
  }

  const formData = new FormData(orderForm);
  const order = {
    clientName: formData.get("clientName").trim(),
    phone: formData.get("phone").trim(),
    address: formData.get("address").trim(),
    deliveryDate: formData.get("deliveryDate"),
    deliveryTime: formData.get("deliveryTime"),
    items: formData.get("items").trim(),
  };
  if (!order.clientName || !order.phone || !order.address || !order.items) {
    statusMessage.dataset.state = "error";
    statusMessage.textContent = "Veuillez remplir tous les champs sans laisser uniquement des espaces.";
    return;
  }
  const fingerprint = JSON.stringify(order);
  if (!pendingRequest || pendingRequest.fingerprint !== fingerprint) {
    pendingRequest = { fingerprint, requestId: crypto.randomUUID() };
  }
  order.requestId = pendingRequest.requestId;

  submitButton.disabled = true;
  submitButton.textContent = "Envoi en cours…";

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`Le serveur a répondu avec le statut ${response.status}.`);
    }
    const result = await response.json();
    if (result.ok !== true || result.requestId !== order.requestId) {
      throw new Error("Le serveur n’a pas confirmé l’enregistrement de la commande.");
    }

    statusMessage.textContent =
      "Merci! Votre demande a bien été envoyée. Notre équipe vous contactera pour confirmer les détails.";
    orderForm.reset();
    pendingRequest = null;
    deliveryDate.min = localToday;
  } catch (error) {
    console.error("Échec de l’envoi de la demande Laflamme Express.", error);
    statusMessage.dataset.state = "error";
    statusMessage.textContent =
      "L’envoi a échoué. Votre liste est toujours dans le formulaire; réessayez ou appelez le (819) 684-4156.";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Envoyer ma demande <span aria-hidden="true">↗</span>';
  }
});
