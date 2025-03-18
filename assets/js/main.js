/**
 * Lizron Real Estate - Main JavaScript
 * Author: Claude
 * Date: March 18, 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.height = '80px';
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const ctaButtons = document.querySelector('.cta-buttons');
    
    menuToggle.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            ctaButtons.style.display = 'none';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            nav.style.display = 'block';
            ctaButtons.style.display = 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '80px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            ctaButtons.style.position = 'absolute';
            ctaButtons.style.top = 'calc(80px + 200px)';
            ctaButtons.style.left = '0';
            ctaButtons.style.width = '100%';
            ctaButtons.style.justifyContent = 'center';
            ctaButtons.style.padding = '20px';
            ctaButtons.style.backgroundColor = 'white';
            ctaButtons.style.borderTop = '1px solid #eee';
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            
            document.querySelectorAll('.nav-list')[0].style.flexDirection = 'column';
            document.querySelectorAll('.nav-item').forEach(item => {
                item.style.margin = '10px 0';
                item.style.textAlign = 'center';
            });
        }
    });
    
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill all required fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
            }, 1500);
        });
    }
    
    // Property hover effect
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            this.querySelector('.property-img img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            this.querySelector('.property-img img').style.transform = 'scale(1)';
        });
    });
    
    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            this.querySelector('.service-icon').style.backgroundColor = '#2c3e50';
            this.querySelector('.service-icon').style.color = '#ffffff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            this.querySelector('.service-icon').style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
            this.querySelector('.service-icon').style.color = '#2c3e50';
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            // Simulate API call
            setTimeout(() => {
                // Reset form
                newsletterForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Subscribe';
                
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
            }, 1500);
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 992 && nav.style.display === 'block') {
                    menuToggle.click();
                }
            }
        });
    });
    
    // Initialize AOS animation library if present
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});