// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
    } else {
        navbar.style.background = 'white';
    }
});


if (window.location.pathname.endsWith('index.html') || 
    window.location.pathname === '/'){
        // Multilingual greetings array
const greetings = ["Hello", "Hola", "Bonjour", "नमस्ते", "Ciao", "Olá", "Hallo","你好", "Hello"];
const greetingElement = document.querySelector('.greeting-text');
const preloader = document.querySelector('.preloader');
let currentIndex = 0;

// 1. Rapidly cycle through greetings
const greetingInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentIndex];
}, 200); // Change word every 400ms

// 2. After 2.5 seconds, animate out
setTimeout(() => {
    // Stop cycling greetings
    clearInterval(greetingInterval);
    
    // Animate greeting up and fade out
    greetingElement.style.opacity = '0';
    greetingElement.style.transform = 'translateY(-40px)';
    
    // Hide preloader and show main content
    setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.main-content').classList.add('show');
    }, 1000); // Matches CSS transition duration
    
}, 1600); // Total greeting display time (2.5 seconds)
    
}

else {
    // For all other pages - hide preloader immediately
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.main-content').classList.add('show');}



// footer

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: Animation for "Let's Chat"
const chatText = document.querySelector('.chat-text');
if (chatText) {
    chatText.addEventListener('mouseenter', () => {
        chatText.style.animation = 'none';
        setTimeout(() => {
            chatText.style.animation = 'pulse 0.5s';
        }, 10);
    });
}

// Add this to your CSS:
/*
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
*/


//about page
// Modify greeting animation to check current page
const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'about.html') {
    // Faster transition for about page
    setTimeout(() => {
        clearInterval(greetingInterval);
        greetingElement.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.querySelector('.main-content').classList.add('show');
        }, 500); // Shorter delay for secondary pages
    }, 1500);
}



//hamburger // Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}