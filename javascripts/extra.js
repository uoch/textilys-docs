document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded — starting sidebar controller");

    const checkAndToggleSidebars = () => {
        // More comprehensive checks for encrypted content
        const passwordForm = document.querySelector("form.decryptcontent");
        const passwordInput = document.querySelector("input[type='password']");
        const encryptButton = document.querySelector("button.decryptcontent");
        const encryptedDiv = document.querySelector("div.decryptcontent");
        const encryptedContent = document.querySelector(".encrypted-content");
        
        // Check if main article content is visible (means decrypted)
        const articleContent = document.querySelector("article.md-content__inner");
        const hasVisibleContent = articleContent && articleContent.textContent.trim().length > 100;
        
        const isEncrypted = passwordForm !== null || 
                           passwordInput !== null || 
                           encryptButton !== null ||
                           encryptedDiv !== null ||
                           encryptedContent !== null;
        
        console.log("=== Sidebar Check ===");
        console.log("Password form:", passwordForm !== null);
        console.log("Password input:", passwordInput !== null);
        console.log("Encrypt button:", encryptButton !== null);
        console.log("Encrypted div:", encryptedDiv !== null);
        console.log("Has visible content:", hasVisibleContent);
        console.log("Is Encrypted:", isEncrypted);
        
        const sidebars = document.querySelectorAll(
            ".md-sidebar.md-sidebar--primary, .md-sidebar--primary, [data-md-component='sidebar'][data-md-type='navigation'], .md-sidebar.md-sidebar--secondary, .md-sidebar--secondary, [data-md-component='sidebar'][data-md-type='toc']"
        );

        if (isEncrypted) {
            console.log("→ HIDING sidebars (content encrypted)");
            sidebars.forEach(sb => sb.classList.remove("show-sidebars"));
        } else if (hasVisibleContent) {
            console.log("→ SHOWING sidebars (content decrypted)");
            sidebars.forEach(sb => sb.classList.add("show-sidebars"));
        } else {
            console.log("→ WAITING (content not ready)");
            // Don't show sidebars if content isn't ready yet
            sidebars.forEach(sb => sb.classList.remove("show-sidebars"));
        }
    };

    // Observe the main content area for changes
    const contentContainer = document.querySelector(".md-content") || document.body;
    
    const observer = new MutationObserver(() => {
        checkAndToggleSidebars();
    });

    observer.observe(contentContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
    });

    // Initial check with longer delay to let encryptcontent plugin render
    setTimeout(checkAndToggleSidebars, 500);

    // Handle MkDocs Material page navigation
    if (typeof document$ !== "undefined") {
        document$.subscribe(() => {
            console.log("MkDocs navigation event");
            setTimeout(checkAndToggleSidebars, 300);
        });
    }

    // Also listen for the standard event
    document.addEventListener("DOMContentSwitch", () => {
        console.log("DOMContentSwitch event");
        setTimeout(checkAndToggleSidebars, 300);
    });

    // Listen for form submissions (password entry)
    document.addEventListener("submit", (e) => {
        if (e.target.classList.contains("decryptcontent")) {
            console.log("Password form submitted");
            setTimeout(checkAndToggleSidebars, 500);
        }
    });

    // Watch for clicks on decrypt button
    document.addEventListener("click", (e) => {
        if (e.target.matches("button.decryptcontent") || 
            e.target.closest("button.decryptcontent")) {
            console.log("Decrypt button clicked");
            setTimeout(checkAndToggleSidebars, 500);
        }
    });
});
