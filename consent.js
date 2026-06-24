/* AutoSceltaGiusta — GDPR cookie consent (self-contained, no external calls).
   Stores the choice in localStorage. No analytics/advertising cookies are loaded
   until the user clicks "Accetta". Future AdSense/Analytics code must check
   window.velvariConsentGranted() before initialising. */
(function () {
  "use strict";
  var KEY = "velvari_consent"; // values: "all" | "necessary"

  window.velvariConsentGranted = function () {
    try { return localStorage.getItem(KEY) === "all"; } catch (e) { return false; }
  };

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
  }

  function dispatch(value) {
    document.dispatchEvent(new CustomEvent("velvari:consent", { detail: value }));
  }

  function removeBar() {
    var bar = document.getElementById("cookiebar");
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
  }

  function build() {
    var bar = document.createElement("div");
    bar.className = "cookiebar";
    bar.id = "cookiebar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Avviso sui cookie");
    bar.setAttribute("aria-live", "polite");

    var p = document.createElement("p");
    p.innerHTML = 'Usiamo cookie tecnici necessari al funzionamento del sito e, solo con il tuo consenso, ' +
      'cookie di terze parti (es. pubblicità e affiliazione). Dettagli nella ' +
      '<a href="cookie-policy.html">Cookie Policy</a>.';

    var actions = document.createElement("div");
    actions.className = "actions";

    var reject = document.createElement("button");
    reject.type = "button";
    reject.className = "reject";
    reject.textContent = "Solo necessari";
    reject.addEventListener("click", function () { save("necessary"); dispatch("necessary"); removeBar(); });

    var accept = document.createElement("button");
    accept.type = "button";
    accept.className = "accept";
    accept.textContent = "Accetta tutti";
    accept.addEventListener("click", function () { save("all"); dispatch("all"); removeBar(); });

    actions.appendChild(reject);
    actions.appendChild(accept);
    bar.appendChild(p);
    bar.appendChild(actions);
    document.body.appendChild(bar);
  }

  function init() {
    var choice = null;
    try { choice = localStorage.getItem(KEY); } catch (e) {}
    if (!choice) build();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* AutoSceltaGiusta — credito sviluppo (Levarisup) + rimando Telegram, in fondo a ogni pagina */
(function () {
  function addCredit() {
    var fine = document.querySelector("footer.site .fine");
    if (fine && !fine.querySelector(".tg-cta")) {
      var t = document.createElement("p");
      t.className = "tg-cta";
      t.style.margin = "10px 0 4px";
      t.innerHTML = '<a href="https://t.me/autosceltagiusta" target="_blank" rel="noopener" ' +
        'style="display:inline-block;padding:8px 16px;border-radius:999px;background:#229ED9;' +
        'color:#fff;font-weight:600;text-decoration:none;">📢 Offerte del giorno su Telegram &rarr;</a>';
      fine.appendChild(t);
    }
    if (fine && !fine.querySelector(".credit")) {
      var p = document.createElement("p");
      p.className = "credit";
      p.style.marginTop = "6px";
      p.style.opacity = "0.9";
      p.innerHTML = 'Design by <a href="https://levarisup.com/" target="_blank" rel="noopener">Levarisup</a>';
      fine.appendChild(p);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addCredit);
  else addCredit();
})();
