/* J H Gutter LLC — site script */

/* ==== SETTINGS ==========================================================
   FORM_ENDPOINT: paste your free Formspree form URL here, for example
   "https://formspree.io/f/abcdwxyz". Quote requests are then emailed to you.
   Leave it empty and the form will ask visitors to call instead.
   ======================================================================= */
const FORM_ENDPOINT = "";
const PHONE_DISPLAY = "404-804-6559";

(function () {
  /* Mobile menu */
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("site-nav");
  if (btn && nav) {
    const setOpen = (open) => {
      nav.dataset.open = String(open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    setOpen(false);
    btn.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* Quote form */
  document.querySelectorAll("form.quote").forEach((form) => {
    const status = form.querySelector(".form-status");
    const submit = form.querySelector('button[type="submit"]');

    const showStatus = (kind, msg) => {
      status.dataset.kind = kind;
      status.textContent = msg;
      status.hidden = false;
    };

    const setError = (input, msg) => {
      const err = document.getElementById(input.id + "-error");
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) { err.textContent = msg || ""; err.hidden = !msg; }
    };

    const validate = () => {
      let firstBad = null;
      const name = form.elements.name;
      const phone = form.elements.phone;
      const nameMsg = name.value.trim().length < 2 ? "Please enter your name." : "";
      const digits = phone.value.replace(/\D/g, "");
      const phoneMsg = digits.length < 10 ? "Please enter a 10-digit phone number." : "";
      setError(name, nameMsg); if (nameMsg && !firstBad) firstBad = name;
      setError(phone, phoneMsg); if (phoneMsg && !firstBad) firstBad = phone;
      if (firstBad) firstBad.focus();
      return !firstBad;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.hidden = true;
      if (form.elements._gotcha && form.elements._gotcha.value) return; // spam bot
      if (!validate()) return;

      if (!FORM_ENDPOINT) {
        showStatus("warn", "Online requests aren't switched on yet. Please call or text us at " + PHONE_DISPLAY + " and we'll set up your free quote.");
        return;
      }

      submit.disabled = true;
      const label = submit.textContent;
      submit.textContent = "Sending…";
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Bad response");
        form.reset();
        showStatus("ok", "Thanks! Your request was sent. We'll call you back soon.");
      } catch (err) {
        showStatus("warn", "Your request didn't go through. Please call or text us at " + PHONE_DISPLAY + ".");
      } finally {
        submit.disabled = false;
        submit.textContent = label;
      }
    });

    form.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true") setError(input, ""); });
    });
  });
})();
