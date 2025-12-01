/* =====================================================
   PASSWORD PROTECTION SIDE-BAR RESTORATION (JS)
   ===================================================== */

(function () {
    // Apply immediate hiding (but WITHOUT display:none)
    const style = document.createElement("style");
    style.textContent = `
        .md-sidebar,
        .md-sidebar--primary,
        .md-sidebar--secondary,
        [data-md-component="sidebar"] {
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);

    console.log("Initial sidebar hide applied (JS preload)");
})();

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded — waiting for decryption…");

    function showSidebars() {
        console.log("✅ Password accepted — content & sidebars unlocked");
        document.body.classList.add("password-accepted");
    }

    // If decrypted from cache → show immediately
    if (document.querySelector(".decrypt-success")) {
        showSidebars();
        return;
    }

    // MutationObserver: detects password success
    const observer = new MutationObserver(() => {
        const decrypted = document.querySelector(".decrypt-success");
        const passwordInput = document.querySelector("input[type='password']");

        // When password disappears or decrypt-success appears → unlock
        if (decrypted || (!passwordInput && document.querySelector(".md-content"))) {
            showSidebars();
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true,
        childList: true
    });

    // Backup poll method (in case observer misses)
    let attempts = 0;
    const interval = setInterval(() => {
        attempts++;

        const passwordFormGone = !document.querySelector("input[type='password']");
        const contentExists = document.querySelector(".md-content");

        if (passwordFormGone && contentExists) {
            console.log("Backup check: Password accepted.");
            showSidebars();
            clearInterval(interval);
        }

        if (attempts > 50) {
            clearInterval(interval);
        }
    }, 100);
});
