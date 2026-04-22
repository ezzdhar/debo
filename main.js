// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Text Animation
gsap.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    delay: 0.2
});

gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.4
});

// Removed global button animation to avoid conflicts
// gsap.from(".btn-work", { ... });

// Floating Images Animation
const floatImages = document.querySelectorAll('.hero-img');

floatImages.forEach((img, index) => {
    // Initial entrance
    gsap.from(img, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2 * index
    });

    // Continuous floating effect
    gsap.to(img, {
        y: "+=20",
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

// Services Section Animation
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 90%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "expo.out",
    clearProps: "all" // Ensures GSAP doesn't leave inline styles after animation
});

// About Section Animation
gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".about-card", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
});

// CTA Banner Animation
gsap.from(".cta-content", {
    scrollTrigger: {
        trigger: ".cta-banner",
        start: "top 80%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Projects Showcase Animation
gsap.from(".section-header-left h2, .section-header-left p", {
    scrollTrigger: {
        trigger: ".projects-showcase",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".project-item", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out"
});

// Innovation Section Animation
const innovationTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".innovation-section",
        start: "top 70%",
    }
});

innovationTL.from(".img-left-panel", { x: -50, opacity: 0, duration: 1, ease: "power3.out" })
            .from(".img-right-panel", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
            .from(".innovation-content", { x: 100, opacity: 0, duration: 1.2, ease: "expo.out" }, "-=0.8")
            .from(".innovation-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(".innovation-desc", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(".design-process-box", { scale: 0.9, opacity: 0, duration: 0.6 }, "-=0.4")
            .from(".process-list li", { x: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

// Why DEBO Animation
const whyTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-debo",
        start: "top 70%",
    }
});

whyTimeline.from(".deco-curve", { x: -30, opacity: 0, duration: 0.8, ease: "expo.out" })
           .from(".why-title", { x: -50, opacity: 0, duration: 0.6 }, "-=0.4")
           .from(".why-list li", { x: -30, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.2")
           .from(".why-footer-action", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
           .from(".why-image", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.3");
// Testimonials Slider Logic
const testimonials = [
    {
        text: '"The team transformed our space into something truly exceptional. Professional, creative, and detail-oriented. From concept to execution, everything was handled perfectly. Highly recommended. The design exceeded our expectations and perfectly matched our vision."',
        author: "Shahd Mohamed",
        image: "imges/Frame 2147224957.png"
    },
    {
        text: '"Working with DEBO was a game-changer for our office project. Their ability to blend aesthetics with extreme functionality was impressive. The project was completed on time and exceeded all our branding goals."',
        author: "Ahmed Hassan",
        image: "imges/Frame 2147224957.png" // Reusing same profile or can be changed
    },
    {
        text: '"Exceptional attention to detail. They didn\'t just design a house; they designed a home that perfectly fits our lifestyle. The process was transparent and the execution was flawless."',
        author: "Mariam Ali",
        image: "imges/Frame 2147224957.png"
    }
];

let currentTestimonial = 0;
const testimonialCard = document.getElementById('testimonial-card');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');

if (testimonialCard && nextBtn && prevBtn) {
    function updateTestimonial(index) {
        const data = testimonials[index];
        
        gsap.to(testimonialCard, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            onComplete: () => {
                testimonialCard.querySelector('.testimonial-text').innerText = data.text;
                testimonialCard.querySelector('.testimonial-author span').innerText = data.author;
                testimonialCard.querySelector('.testimonial-author img').src = data.image;
                
                gsap.to(testimonialCard, {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });

        // Update button states
        [prevBtn, nextBtn].forEach(btn => btn.classList.remove('active'));
        if(index === 0) prevBtn.classList.add('active');
        else nextBtn.classList.add('active');
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }

    // Autoplay Logic
    let autoplay = setInterval(nextTestimonial, 5000);

    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(nextTestimonial, 5000);
    }

    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoplay();
    });

    // Pause autoplay on hover
    const testimonialContainer = document.querySelector('.testimonial-container');
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
        testimonialContainer.addEventListener('mouseleave', () => {
            clearInterval(autoplay);
            autoplay = setInterval(nextTestimonial, 5000);
        });
    }
}

// Initial animation for testimonials section
gsap.from(".testimonials", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 5%';
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.padding = '20px 5%';
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Custom cursor effect (Optional but premium)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Add basic CSS for cursor in JS for simplicity or move to CSS
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
        display: none;
    }
    @media (min-width: 1025px) {
        .custom-cursor { display: block; }
    }
`;
document.head.appendChild(cursorStyle);

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// =========================================
// Our Service Page Specific Animations
// =========================================
if (document.querySelector(".services-hero")) {
    const serviceHeroTL = gsap.timeline();

    serviceHeroTL.to(".services-hero h1", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
        startAt: { x: -60, opacity: 0 }
    })
    .to(".services-hero p", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        startAt: { x: -30, opacity: 0 }
    }, "-=0.8")
    .to(".sketch-img", {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power4.out",
        startAt: { opacity: 0, scale: 1.05 }
    }, "-=0.5");}

// =========================================
// Mobile Navigation Menu Logic
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        // Create hamburger icon
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Create close icon inside nav
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-menu';
        closeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
        
        // Insert elements
        nav.prepend(closeBtn);
        header.appendChild(hamburger);
        
        // Toggle side menu logic
        hamburger.addEventListener('click', () => {
            nav.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
        
        // Close menu when clicking any link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Ensure elements visibility toggles correctly based on screen size
        const handleResize = () => {
            if (window.innerWidth > 768) {
                hamburger.style.display = 'none';
                closeBtn.style.display = 'none';
                nav.classList.remove('active');
            } else {
                hamburger.style.display = 'flex';
                closeBtn.style.display = 'block';
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // trigger on load
    }
});
