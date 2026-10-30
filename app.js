const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

const demoFormLoader = document.querySelector(".demo-form-loader");
if (demoFormLoader) {
  demoFormLoader.addEventListener("toggle", () => {
    const frame = demoFormLoader.querySelector("iframe[data-src]");
    if (demoFormLoader.open && frame) {
      frame.src = frame.dataset.src;
      frame.removeAttribute("data-src");
    }
  });
}

const pageLinks = [
  ["index.html", "Accueil"],
  ["service-boucherie.html", "Boucherie"],
  ["charcuterie-fromage.html", "Charcuterie & fromages"],
  ["fruits-legumes.html", "Fruits & légumes"],
  ["boulangerie.html", "Boulangerie"],
  ["service-traiteur.html", "Traiteur"],
  ["pret-a-manger.html", "Prêt à manger"],
  ["speciaux-hebdomadaires.html", "Spéciaux hebdomadaires"],
  ["livraison.html", "Livraison"],
  ["a-propos.html", "À propos"],
  ["contact.html", "Nous joindre"],
];
const currentPage = decodeURIComponent(location.pathname).split("/").pop() || "index.html";
const pageLink = ([file, label]) =>
  `<a href="./${file}"${file === currentPage ? ' aria-current="page"' : ""}>${label}</a>`;

const headerActions = document.createElement("div");
headerActions.className = "header-actions";
headerActions.innerHTML = `
  <a class="header-action header-action--specials" href="./${pageLinks[7][0]}"${currentPage === pageLinks[7][0] ? ' aria-current="page"' : ""}>
    <span class="header-action__icon" aria-hidden="true">✦</span>
    <span class="header-action__copy">
      <span class="header-action__title">Circulaire de la semaine</span>
      <span class="header-action__subtitle">Voir les spéciaux <span aria-hidden="true">↗</span></span>
    </span>
  </a>
  <a class="header-action header-action--delivery" href="./${pageLinks[8][0]}"${currentPage === pageLinks[8][0] ? ' aria-current="page"' : ""}>
    <span class="header-action__icon" aria-hidden="true">↗</span>
    <span class="header-action__copy">
      <span class="header-action__title">Livraison et cueillette</span>
      <span class="header-action__subtitle">Voir les options</span>
    </span>
  </a>
  <a class="header-action header-action--express" href="./livraison.html#commande">
    <span class="header-action__icon" aria-hidden="true">▣</span>
    <span class="header-action__copy">
      <span class="header-action__title">Laflamme Express</span>
      <span class="header-action__subtitle">Commander en ligne</span>
    </span>
  </a>
`;
document.querySelector(".header__inner .brand").after(headerActions);

const headerUtilities = document.createElement("div");
headerUtilities.className = "header-utilities";
const languageSwitch = document.querySelector(".header__inner .language-switch");
languageSwitch.before(headerUtilities);
headerUtilities.append(languageSwitch);
headerUtilities.insertAdjacentHTML("beforeend", `
  <a class="header-social" href="https://www.facebook.com/MarcheLaflamme/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook" title="Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z"/></svg>
  </a>
  <a class="header-social" href="https://www.instagram.com/marchelaflamme/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram" title="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="header-social__dot" cx="17.5" cy="6.8" r="1"/></svg>
  </a>
`);

navigation.innerHTML = `
  <details class="department-menu">
    <summary>Produits frais</summary>
    <div class="department-menu__links">${[...pageLinks.slice(1, 5), pageLinks[6]].map(pageLink).join("")}</div>
  </details>
  <details class="department-menu">
    <summary>Nos services</summary>
    <div class="department-menu__links">
      ${pageLink(pageLinks[5])}
      ${pageLink(["boulangerie.html#gateaux", "Gâteaux personnalisés"])}
      ${pageLink(pageLinks[8])}
      ${pageLink(["livraison.html#commande", "Laflamme Express"])}
    </div>
  </details>
  ${pageLink(pageLinks[9])}
  ${pageLink(pageLinks[10])}
`;

const navigationBar = document.createElement("div");
navigationBar.className = "navigation-bar";
navigation.classList.add("container");
navigationBar.append(navigation);
document.querySelector(".site-header").append(navigationBar);

navigation.querySelectorAll("details").forEach((menu) => {
  menu.addEventListener("toggle", () => {
    if (menu.open) {
      navigation.querySelectorAll("details").forEach((other) => {
        if (other !== menu) other.open = false;
      });
    }
  });
});

const footer = document.querySelector(".site-footer");
const contactFooter = document.createElement("section");
contactFooter.className = "visit visit--footer";
contactFooter.id = "contact";
contactFooter.setAttribute("aria-labelledby", "visit-title");
contactFooter.innerHTML = `
  <div class="container visit__inner">
    <div class="visit__heading">
      <p class="eyebrow eyebrow--light"><span class="eyebrow__line"></span> On vous attend</p>
      <h2 id="visit-title">À bientôt<br><em>au marché.</em></h2>
    </div>
    <div class="visit__details">
      <div class="visit__detail">
        <span class="visit__label">Adresse</span>
        <a href="https://maps.google.com/?q=126+rue+Principale,+Aylmer,+QC" target="_blank" rel="noopener noreferrer">126, rue Principale<br>Aylmer (Québec)</a>
        <a href="https://maps.google.com/?q=March%C3%A9+Laflamme+126+rue+Principale+Gatineau" target="_blank" rel="noopener noreferrer">Itinéraire ↗</a>
      </div>
      <div class="visit__detail">
        <span class="visit__label">Téléphone</span>
        <a href="tel:+18196844156">(819) 684-4156</a>
      </div>
      <div class="visit__detail">
        <span class="visit__label">Courriel</span>
        <a href="mailto:info@marchelaflamme.com">info@marchelaflamme.com</a>
      </div>
      <div class="visit__detail">
        <span class="visit__label">Suivez-nous</span>
        <div class="visit__social-links">
          <a href="https://www.facebook.com/MarcheLaflamme/" target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a>
          <a href="https://www.instagram.com/marchelaflamme/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
    <span class="visit__decoration" aria-hidden="true">M</span>
  </div>
  <div class="container visit__more">
    <div class="visit__hours">
      <div>
        <h3>Heures d’ouverture</h3>
        <p class="visit__hours-daily">Ouvert tous les jours</p>
      </div>
      <p class="visit__hours-time">8 h à 22 h</p>
      <p class="visit__hours-note">Les heures des jours fériés peuvent varier; appelez pour confirmer.</p>
    </div>
    <a href="./contact.html">Coordonnées, carte et renseignements ↗</a>
    <p><a href="./a-propos.html">Découvrir notre histoire</a> · <a href="https://maps.google.com/?q=March%C3%A9+Laflamme+126+rue+Principale+Gatineau" target="_blank" rel="noopener noreferrer">Consulter les avis clients sur Google ↗</a></p>
  </div>
`;
footer.prepend(contactFooter);

const directory = document.createElement("nav");
directory.className = "container footer-directory";
directory.setAttribute("aria-label", "Toutes nos pages");
directory.innerHTML = pageLinks.map(pageLink).join("");
footer.insertBefore(directory, footer.querySelector(".site-footer__inner"));

document.querySelector("#current-year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const isEnglish = document.documentElement.lang.startsWith("en");
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isEnglish
    ? (isOpen ? "Open menu" : "Close menu")
    : (isOpen ? "Ouvrir le menu" : "Fermer le menu"));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    const isEnglish = document.documentElement.lang.startsWith("en");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", isEnglish ? "Open menu" : "Ouvrir le menu");
    navigation.classList.remove("is-open");
    navigation.querySelectorAll("details").forEach((details) => { details.open = false; });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const details = navigation.querySelector("details[open]");
    if (details) {
      details.open = false;
      details.querySelector("summary").focus();
    } else if (menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.click();
      menuToggle.focus();
    }
  }
});

document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target)) {
    navigation.querySelectorAll("details").forEach((details) => { details.open = false; });
  }
});
