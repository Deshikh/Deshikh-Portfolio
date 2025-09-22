// Function to handle smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to handle the sticky header on scroll
function setupStickyHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Function to handle the contact form submission using EmailJS
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    // Replace with your actual EmailJS public key and service/template IDs
    const EMAILJS_PUBLIC_KEY = "ahrOwL4cV-8LeW_za";
    const EMAILJS_SERVICE_ID = "service_2cq81gg";
    const EMAILJS_TEMPLATE_ID = "template_969n2zl";

    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        status.textContent = "Sending...";

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
            .then(() => {
                status.textContent = "Message sent successfully! 😊";
                form.reset();
            }, (err) => {
                console.error("EmailJS Error:", err);
                status.textContent = "Error: Could not send. Please try again. 😢";
            });
    });
}

// Function to handle copying email to clipboard
function setupCopyEmail() {
    const copyEmailBtn = document.getElementById("copyEmail");
    const status = document.getElementById("form-status");

    copyEmailBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const email = "deshikhraaj24@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                status.textContent = "Email copied! 🎉";
                setTimeout(() => {
                    status.textContent = "";
                }, 2000); // Clear the message after 2 seconds
            })
            .catch(err => {
                console.error("Copy failed:", err);
                status.textContent = "Copy failed. Please try again. 😔";
            });
    });
}

// Execute all functions when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScrolling();
    setupStickyHeader();
    setupContactForm();
    setupCopyEmail();
});