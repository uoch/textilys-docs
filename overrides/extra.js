document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const decrypted = document.querySelector(".decrypt-success");
        if (decrypted) {
            // Add class to body to trigger CSS showing sidebars
            document.body.classList.add("password-accepted");
            
            // Stop observing once password is accepted
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        subtree: true,
        attributes: true,
        childList: true
    });
});