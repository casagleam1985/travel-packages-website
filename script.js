// ===========================
// Mobile Menu Toggle
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// CTA Button - Start Your Journey
// ===========================

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Welcome to GlobalTravel! Browse our featured packages by selecting a continent from the menu.');
        // You can also redirect to a specific page:
        // window.location.href = 'continents/asia.html';
    });
}

// ===========================
// Newsletter Form Submission
// ===========================

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            alert(`Thank you for subscribing with ${email}! Check your inbox for exclusive deals.`);
            emailInput.value = ''; // Clear the input
        }
    });
}

// ===========================
// Contact Form Submission
// ===========================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const subject = contactForm.querySelector('input[name="subject"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
        if (name && email && subject && message) {
            alert(`Thank you, ${name}! We received your message and will get back to you shortly.`);
            contactForm.reset(); // Clear the form
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ===========================
// Learn More Button Functionality
// ===========================

const exploreButtons = document.querySelectorAll('.btn-explore');
exploreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const continents = ['africa', 'antarctica', 'asia', 'europe', 'north-america', 'oceania', 'south-america'];
        const continent = continents[index % continents.length];
        window.location.href = `continents/${continent}.html`;
    });
});

// ===========================
// Scroll Animation - Fade In Elements
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all package cards and feature boxes
document.querySelectorAll('.package-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ===========================
// Active Navigation Link
// ===========================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ===========================
// Form Validation
// ===========================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add real-time validation to email inputs
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ff6b6b';
            this.style.boxShadow = '0 0 5px rgba(255, 107, 107, 0.3)';
        } else {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        }
    });
});

// ===========================
// Console Welcome Message
// ===========================

console.log('%cWelcome to GlobalTravel!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cExplore amazing travel packages across the world!', 'font-size: 14px; color: #764ba2;');
