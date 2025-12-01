document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        // When content is decrypted
        if (document.querySelector(".decrypt-success")) {
            // Show all sidebars
            document.querySelectorAll(
                ".md-sidebar.md-sidebar--primary, .md-sidebar--primary, [data-md-component='sidebar'][data-md-type='navigation'], .md-sidebar.md-sidebar--secondary, .md-sidebar--secondary, [data-md-component='sidebar'][data-md-type='toc']"
            ).forEach(sb => sb.classList.add("show-sidebars"));
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
