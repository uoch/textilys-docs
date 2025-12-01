document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const decrypted = document.querySelector(".decrypt-success");
        if (decrypted) {
            // Show primary sidebar (navigation menu)
            const primarySidebar = document.querySelector(".md-sidebar--primary");
            if (primarySidebar) {
                primarySidebar.style.display = "block";
            }
            
            // Show secondary sidebar (table of contents)
            const secondarySidebar = document.querySelector(".md-sidebar--secondary");
            if (secondarySidebar) {
                secondarySidebar.style.display = "block";
            }
            
            // Show generic sidebar (fallback)
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