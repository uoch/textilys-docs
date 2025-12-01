document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const decrypted = document.querySelector(".decrypt-success");
        if (decrypted) {
            const sidebar = document.querySelector(".md-sidebar");
            if (sidebar) {
                sidebar.style.display = "block";
            }
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true
    });
});
