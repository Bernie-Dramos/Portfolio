function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function (e) {
        if (e.target.matches('a[href^="#"]')) {
            const targetId = e.target.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
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

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}