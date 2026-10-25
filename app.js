const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

const pageLinks = [
  ["index.html", "Accueil"],
  ["service-boucherie.html", "Boucherie"],
  ["charcuterie-fromage.html", "Charcuterie & fromages"],
  ["fruits-legumes.html", "Fruits & légumes"],
  ["boulangerie.html", "Boulangerie"],
  ["service-gateaux.html", "Gâteaux personnalisés"],
  ["service-traiteur.html", "Traiteur"],
  ["pret-a-manger.html", "Prêt à manger"],
  ["speciaux-hebdomadaires.html", "Spéciaux hebdomadaires"],
  ["livraison.html", "Livraison"],
  ["a-propos.html", "Notre marché"],
  ["contact.html", "Nous joindre"],
];
const currentPage = decodeURIComponent(location.pathname).split("/").pop() || "index.html";
const pageLink = ([file, label]) =>
  `<a href="./${file}"${file === currentPage ? ' aria-current="page"' : ""}>${label}</a>`;

navigation.innerHTML = `
  ${pageLink(pageLinks[8])}
  <details class="department-menu">
    <summary>Nos rayons</summary>
    <div class="department-menu__links">${pageLinks.slice(1, 8).map(pageLink).join("")}</div>
  </details>
  ${pageLink(pageLinks[10])}
  ${pageLink(pageLinks[9])}
  ${pageLink(pageLinks[11])}
  <a class="button button--small button--red navigation__cta" href="./demande-services.html">Laflamme Express</a>
`;

const footer = document.querySelector(".site-footer");
const directory = document.createElement("nav");
directory.className = "container footer-directory";
directory.setAttribute("aria-label", "Toutes nos pages");
directory.innerHTML = pageLinks.map(pageLink).join("");
footer.prepend(directory);

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
