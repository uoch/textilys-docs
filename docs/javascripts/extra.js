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
    console.log("Sidebars hidden on initial load");
})();

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded - checking for encryption status");
    
    // Function to show sidebars
    function showSidebars() {
        console.log("✅ Password accepted - showing sidebars");
        document.body.classList.add("password-accepted");
    }
    
    // Check if already decrypted (from previous session)
    if (document.querySelector(".decrypt-success")) {
        console.log("Already decrypted");
        showSidebars();
        return;
    }

    // Monitor for password success - check multiple possible indicators
    const observer = new MutationObserver((mutations) => {
        // Method 1: Check for decrypt-success class
        const decrypted = document.querySelector(".decrypt-success");
        
        // Method 2: Check for encryptcontent-specific elements
        const encryptForm = document.querySelector("form[class*='decrypt']");
        const encryptWrapper = document.querySelector("#mkdocs-decrypted-content");
        
        // Method 3: Check if password form disappeared
        const passwordInput = document.querySelector("input[type='password']");
        
        console.log("Mutation detected:", {
            decrypted: !!decrypted,
            encryptForm: !!encryptForm,
            encryptWrapper: !!encryptWrapper,
            passwordInput: !!passwordInput
        });
        
        // If decrypt-success exists OR password form is gone, show sidebars
        if (decrypted || (!passwordInput && document.querySelector(".md-content"))) {
            showSidebars();
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ['class', 'style']
    });

    // Backup method: Check periodically
    let checkCount = 0;
    const interval = setInterval(() => {
        checkCount++;
        console.log(`Check ${checkCount}: Looking for password acceptance...`);
        
        if (!document.querySelector("input[type='password']") && 
            document.querySelector(".md-content")) {
            console.log("Password form gone - assuming success");
            showSidebars();
            clearInterval(interval);
        }
        
        if (checkCount > 50) { // Stop after 5 seconds
            console.log("Stopped checking");
            clearInterval(interval);
        }
    }, 100);
});
