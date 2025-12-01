document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const decrypted = document.querySelector(".decrypt-success");
        if (decrypted) {
            // Select all sidebars
            const sidebars = document.querySelectorAll(
                ".md-sidebar.md-sidebar--primary, .md-sidebar--primary, [data-md-component='sidebar'][data-md-type='navigation'], .md-sidebar.md-sidebar--secondary, .md-sidebar--secondary, [data-md-component='sidebar'][data-md-type='toc']"
            );
            sidebars.forEach(sb => {
                sb.classList.add("decrypt-success-visible");
            });
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"]
    });
});
