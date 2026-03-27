(function () {
  "use strict";

  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      var label = navToggle.querySelector(".visually-hidden");
      if (label) {
        label.textContent = open ? "Закрыть меню" : "Открыть меню";
      }
    });

    siteNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        var lh = navToggle.querySelector(".visually-hidden");
        if (lh) {
          lh.textContent = "Открыть меню";
        }
      });
    });
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.textContent =
        "Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее рабочее время.";
      contactForm.reset();
    });
  }
})();
