function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function (e) {
        if (e.target.matches('a[href^="#"]')) {
            const targetId = e.target.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                // Close menu if open (for mobile)
                const menu = document.querySelector(".menu-links");
                const icon = document.querySelector(".hamburger-icon");
                if (menu && icon && menu.classList.contains("open")) {
                    menu.classList.remove("open");
                    icon.classList.remove("open");
                }
            }
        }
    });
});

// Debounce utility (for future interactive features)
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}
