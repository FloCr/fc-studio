(() => {
  const root = document.documentElement;
  root.classList.add("js-ready");

  // En-tête : bordure au défilement
  const header = document.querySelector("[data-header]");
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const setNav = (open) => {
    root.classList.toggle("nav-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.querySelector(".visually-hidden")?.replaceChildren(open ? "Fermer le menu" : "Ouvrir le menu");
  };
  toggle?.addEventListener("click", () => setNav(!root.classList.contains("nav-open")));
  nav?.addEventListener("click", (e) => e.target.closest("a") && setNav(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setNav(false));
  matchMedia("(min-width: 900px)").addEventListener("change", () => setNav(false));

  // Apparition au scroll
  const revealed = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    revealed.forEach((el) => io.observe(el));
  } else {
    revealed.forEach((el) => el.classList.add("is-visible"));
  }

  // Formulaire de devis
  const form = document.querySelector("[data-lead-form]");
  if (!form) return;

  const need = form.querySelector("[data-need]");
  const status = form.querySelector("[data-form-status]");

  // Présélection de l'offre (boutons « Choisir cette offre » ou ?offre=pro)
  const selectNeed = (id) => {
    const option = need?.querySelector(`option[data-id="${CSS.escape(id)}"]`);
    if (option) need.value = option.value;
  };
  const fromUrl = new URLSearchParams(location.search).get("offre");
  if (fromUrl) selectNeed(fromUrl);
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-offer]");
    if (link) selectNeed(link.dataset.offer);
  });

  const showError = (message) => {
    status.textContent = message;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";

    let firstInvalid = null;
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (field.type === "hidden" || field.name === "botcheck") return;
      const valid = field.checkValidity();
      if (valid) field.removeAttribute("aria-invalid");
      else field.setAttribute("aria-invalid", "true");
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      showError("Merci d'indiquer au moins votre nom et une adresse email valide.");
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    if (!data.get("access_key")) {
      showError("Le formulaire n'est pas encore configuré. Merci de me contacter directement par email ou par téléphone.");
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const label = button.innerHTML;
    button.disabled = true;
    button.textContent = "Envoi en cours…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      window.plausible?.("Devis");
      window.gtag?.("event", "generate_lead");
      location.href = form.dataset.thanks;
    } catch {
      showError("L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez dans un instant.");
      button.disabled = false;
      button.innerHTML = label;
    }
  });

  form.addEventListener("input", (e) => {
    if (e.target.getAttribute("aria-invalid") && e.target.checkValidity()) e.target.removeAttribute("aria-invalid");
  });
})();
