function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleChatbot() {
    const chatbotBody = document.querySelector(".chatbot-body");
    const toggleBtn = document.querySelector(".chatbot-toggle");
    chatbotBody.classList.toggle("open");
    toggleBtn.textContent = chatbotBody.classList.contains("open") ? "−" : "+";
}

function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const messages = document.querySelector(".chatbot-messages");
    const userMessage = input.value.trim();

    if (userMessage === "") {
        alert("Please enter a message!");
        return;
    }

    // Add user message
    const userMsgElement = document.createElement("div");
    userMsgElement.classList.add("chatbot-message", "user");
    userMsgElement.textContent = userMessage;
    messages.appendChild(userMsgElement);

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("chatbot-message", "bot");
        botMessage.textContent = getBotResponse(userMessage.toLowerCase());
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotResponse(message) {
    if (message.includes("skills")) {
        return "Bernardo is a Full-Stack Developer with expertise in Python and AI. He’s skilled in building scalable web applications, developing AI models, and creating seamless user experiences.";
    } else if (message.includes("projects")) {
        return "Check out Bernardo’s projects section to see his work! He’s built applications showcasing his full-stack, Python, and AI skills.";
    } else if (message.includes("contact")) {
        return "You can reach Bernardo via the Contact Me section. Fill out the form, and he’ll get back to you!";
    } else if (message.includes("python")) {
        return "Bernardo has extensive experience in Python, using it for web development, AI, and automation projects.";
    } else if (message.includes("ai")) {
        return "Bernardo specializes in AI, building intelligent models for applications like chatbots and data analysis.";
    } else if (message.includes("full-stack")) {
        return "As a Full-Stack Developer, Bernardo works with both frontend (HTML, CSS, JavaScript) and backend (Python, Node.js) technologies to create complete web solutions.";
    } else {
        return "I’m not sure about that. Try asking about Bernardo’s skills, projects, Python, AI, full-stack development, or how to contact him!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize particles.js for each section
    // Home Section
    particlesJS("particles-home", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00d4ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00d4ff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // About Section
    particlesJS("particles-about", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } }, // Fewer particles for subtlety
            color: { value: "#00d4ff" },
            shape: { type: "triangle" }, // Different shape for variety
            opacity: { value: 0.4, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: false }, // No lines for a cleaner look
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 150, line_linked: { opacity: 0.5 } }, push: { particles_nb: 3 } }
        },
        retina_detect: true
    });

    // Projects Section
    particlesJS("particles-projects", {
        particles: {
            number: { value: 70, density: { enable: true, value_area: 800 } },
            color: { value: "#00d4ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 120, color: "#00d4ff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { bubble: { distance: 200, size: 5, duration: 2, opacity: 0.8 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Contact Section
    particlesJS("particles-contact", {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } }, // Fewer particles for performance
            color: { value: "#00d4ff" },
            shape: { type: "star" }, // Unique shape for visual interest
            opacity: { value: 0.4, random: false },
            size: { value: 2, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 3 } }
        },
        retina_detect: true
    });

    // Smooth scrolling
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

    // Contact form submission with backend endpoint
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            const result = await response.json();
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert(result.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Network error. Please check your connection and try again.");
        }
    });

    // Projects Carousel Logic
    const carousel = document.querySelector('.projects-carousel');
    const cards = carousel ? Array.from(carousel.querySelectorAll('.project-card')) : [];
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, idx) => {
            card.classList.remove('side', 'hidden');
            if (idx === currentIndex) {
                card.classList.remove('side', 'hidden');
            } else if (idx === currentIndex - 1 || idx === currentIndex + 1) {
                card.classList.add('side');
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    function showPrevProject() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function showNextProject() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    // Attach event listeners if carousel exists
    if (carousel) {
        document.querySelector('.projects-carousel-btn.left').addEventListener('click', showPrevProject);
        document.querySelector('.projects-carousel-btn.right').addEventListener('click', showNextProject);
        updateCarousel();
    }
});