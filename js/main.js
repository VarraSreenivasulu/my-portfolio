document.addEventListener('DOMContentLoaded', () => {

    // === INTRO SPLASH OVERLAY ===
    // Shows a full-screen intro. When user clicks "Enter Portfolio",
    // the overlay fades out and the hero video starts playing WITH audio.
    // This one click satisfies the browser's autoplay policy permanently.
    const introOverlay = document.getElementById('intro-overlay');
    const introBtn = document.getElementById('intro-enter');
    const heroVideo = document.getElementById('hero-video');

    if (introBtn && introOverlay) {
        introBtn.addEventListener('click', () => {
            // Fade out overlay
            introOverlay.classList.add('hidden');

            // Start video with sound immediately
            if (heroVideo) {
                heroVideo.muted = false;
                heroVideo.volume = 1.0;
                heroVideo.play().catch(() => {
                    // Fallback: if unmuted fails, play muted
                    heroVideo.muted = true;
                    heroVideo.play();
                });
            }

            // Remove overlay from DOM after transition
            setTimeout(() => introOverlay.remove(), 900);
        });
    }

    // === THEME TOGGLE ===
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });

    // === NAVBAR SCROLL EFFECT & MOBILE MENU ===
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // === ACTIVE NAV LINK ON SCROLL ===
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // === SCROLL REVEAL ANIMATIONS ===
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // === HERO VIDEO SCROLL HANDLING ===
    // Pause when user scrolls away, resume with sound when they return
    if (heroVideo) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        // Scrolled away — pause and mute
                        heroVideo.pause();
                        heroVideo.muted = true;
                    } else {
                        // Back on hero — resume and unmute
                        heroVideo.play().then(() => {
                            heroVideo.muted = false;
                            heroVideo.volume = 1.0;
                        }).catch(e => console.log("Resume prevented:", e));
                    }
                });
            }, { threshold: 0.2 });

            heroObserver.observe(heroSection);
        }
    }
});
