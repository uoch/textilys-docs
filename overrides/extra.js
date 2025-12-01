// Immediately hide sidebars on load (before DOM is ready)
(function() {
    // Add style immediately
    const style = document.createElement('style');
    style.textContent = `
        .md-sidebar, 
        .md-sidebar--primary, 
        .md-sidebar--secondary,
        [data-md-component="sidebar"] {
            display: none !important;
            visibility: hidden !important;
        }
    `;
    document.head.appendChild(style);
})();

document.addEventListener("DOMContentLoaded", () => {
    // Check if already decrypted (from previous session)
    if (document.querySelector(".decrypt-success")) {
        document.body.classList.add("password-accepted");
        return;
    }

    // Monitor for password success
    const observer = new MutationObserver((mutations) => {
        // Check for decrypt-success class
        const decrypted = document.querySelector(".decrypt-success");
        
        // Also check for encryptcontent wrapper being removed
        const encryptWrapper = document.querySelector("#mkdocs-decrypted-content");
        
        if (decrypted || (encryptWrapper && encryptWrapper.children.length > 0)) {
            console.log("Password accepted - showing sidebars");
            document.body.classList.add("password-accepted");
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ['class']
    });

    // Also listen for custom events from encryptcontent plugin
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (document.querySelector(".decrypt-success")) {
                document.body.classList.add("password-accepted");
            }
        }, 100);
    });
});