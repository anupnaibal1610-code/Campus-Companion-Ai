/* =========================================================================
   Campus Companion AI — script.js
   Handles: dark mode toggle, navbar scroll effect, scroll progress bar,
   scroll-reveal animations, back-to-top button, smooth scrolling,
   contact form validation, and chat suggestion chips.
   ========================================================================= */

(function () {
    "use strict";

    /* ---------------------------------------------------------------
       1. DARK MODE TOGGLE
    ------------------------------------------------------------------ */
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const htmlEl = document.documentElement;
    const STORAGE_KEY = "campus-companion-theme";

    function applyTheme(theme) {
        htmlEl.setAttribute("data-theme", theme);
        if (themeIcon) {
            themeIcon.className = theme === "dark"
                ? "bi bi-sun-fill"
                : "bi bi-moon-stars-fill";
        }
    }

    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    // Initialize theme on load
    applyTheme(getPreferredTheme());

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const current = htmlEl.getAttribute("data-theme") || "light";
            const next = current === "dark" ? "light" : "dark";
            applyTheme(next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }

    /* ---------------------------------------------------------------
       2. NAVBAR SCROLL EFFECT
    ------------------------------------------------------------------ */
    const navbar = document.getElementById("mainNavbar");

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    /* ---------------------------------------------------------------
       3. SCROLL PROGRESS BAR
    ------------------------------------------------------------------ */
    const scrollProgress = document.getElementById("scrollProgress");

    function updateScrollProgress() {
        if (!scrollProgress) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + "%";
    }
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    /* ---------------------------------------------------------------
       4. BACK TO TOP BUTTON
    ------------------------------------------------------------------ */
    const backToTop = document.getElementById("backToTop");

    function toggleBackToTop() {
        if (!backToTop) return;
        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ---------------------------------------------------------------
       5. SCROLL REVEAL ANIMATIONS (data-aos attribute)
    ------------------------------------------------------------------ */
    const revealElements = document.querySelectorAll("[data-aos]");

    if ("IntersectionObserver" in window && revealElements.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("aos-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        revealElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback: reveal everything immediately
        revealElements.forEach((el) => el.classList.add("aos-visible"));
    }

    // Also apply a lightweight reveal to cards/sections without data-aos
    const autoRevealSelectors = [
        ".feature-card-mini",
        ".feature-card-full",
        ".step-card",
        ".value-card",
        ".benefit-item"
    ];
    const autoRevealEls = document.querySelectorAll(autoRevealSelectors.join(","));
    autoRevealEls.forEach((el) => el.setAttribute("data-aos", ""));

    if ("IntersectionObserver" in window && autoRevealEls.length) {
        const observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("aos-visible");
                        observer2.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        autoRevealEls.forEach((el) => observer2.observe(el));
    }

    /* ---------------------------------------------------------------
       6. SMOOTH SCROLL FOR ANCHOR LINKS
    ------------------------------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.length > 1) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const offset = 90;
                    const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }
        });
    });

    /* ---------------------------------------------------------------
       7. CONTACT FORM VALIDATION (client-side demo only)
    ------------------------------------------------------------------ */
    const contactForm = document.getElementById("contactForm");
    const formSuccessMsg = document.getElementById("formSuccessMsg");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (!contactForm.checkValidity()) {
                contactForm.classList.add("was-validated");
                return;
            }

            // Demo behaviour: show success message and reset form.
            // No backend endpoint is implemented for sending emails.
            if (formSuccessMsg) {
                formSuccessMsg.classList.remove("d-none");
            }
            contactForm.reset();
            contactForm.classList.remove("was-validated");

            setTimeout(() => {
                if (formSuccessMsg) {
                    formSuccessMsg.classList.add("d-none");
                }
            }, 6000);
        });
    }

    /* ---------------------------------------------------------------
       8. CHAT SUGGESTION CHIPS (visual interaction on chat page)
    ------------------------------------------------------------------ */
    const suggestionChips = document.querySelectorAll(".suggestion-chip");
    suggestionChips.forEach((chip) => {
        chip.addEventListener("click", function () {
            chip.style.transform = "scale(0.96)";
            setTimeout(() => {
                chip.style.transform = "";
            }, 150);
            // In production, this could pre-fill or trigger the
            // watsonx Orchestrate widget with a starter question.
        });
    });

    /* ---------------------------------------------------------------
       9. AUTO-CLOSE MOBILE NAV ON LINK CLICK
    ------------------------------------------------------------------ */
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll("#navMenu .nav-link, #navMenu .btn-nav-cta");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu && navMenu.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
                bsCollapse.hide();
            }
        });
    });

})();
