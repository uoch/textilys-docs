document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded — starting observer");

    // Observe the main content container
    const contentContainer = document.querySelector(".md-content");
    if (!contentContainer) {
        console.log("No .md-content found!");
        return;
    }

    const observer = new MutationObserver(() => {
        // Look for any element that has decrypted text
        if (document.querySelector(".decryptcontent input") === null) {
            console.log("Decryption complete — showing sidebars");

            document.querySelectorAll(
                ".md-sidebar.md-sidebar--primary, .md-sidebar--primary, [data-md-component='sidebar'][data-md-type='navigation'], .md-sidebar.md-sidebar--secondary, .md-sidebar--secondary, [data-md-component='sidebar'][data-md-type='toc']"
            ).forEach(sb => sb.classList.add("show-sidebars"));

            observer.disconnect();
        }
    });

    observer.observe(contentContainer, {
        childList: true,
        subtree: true
    });
});
