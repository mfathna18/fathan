// script.js

// Smooth scrolling for anchor links
const scrollTo = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo(link.getAttribute('href'));
    });
});

// Photo gallery interactivity
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});

// Close modal on click
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigation
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};