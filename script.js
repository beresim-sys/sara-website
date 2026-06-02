/**
 * Chayei Sarah Landing Page Interaction Logic
 * Features: 3D Tilt Effect, Persistent Countdown, Responsive Navigation, Scroll Reveal, Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Mobile Navigation & Header Scroll State
       ========================================================================== */
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const header = document.querySelector('.main-header');
    const floatingBar = document.getElementById('floatingBar');
    const heroSection = document.getElementById('hero');

    // Toggle Mobile Navigation
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close navigation when link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // Scroll Effects: Header Shrink & Floating CTA Visibility
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Header Shrink
        if (scrollPos > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Floating conversion bar visibility (Show after scrolling past Hero)
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            if (scrollPos > heroHeight - 100) {
                floatingBar.classList.add('visible');
            } else {
                floatingBar.classList.remove('visible');
            }
        }
    });


    /* ==========================================================================
       2. Interactive 3D Book Tilt Effect
       ========================================================================== */
    const bookContainer = document.getElementById('bookContainer');
    const book = bookContainer ? bookContainer.querySelector('.book-3d') : null;
    const shadow = bookContainer ? bookContainer.querySelector('.book-shadow') : null;

    if (bookContainer && book) {
        bookContainer.addEventListener('mousemove', (e) => {
            const rect = bookContainer.getBoundingClientRect();
            
            // Cursor position relative to container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Normalize cursor position from -0.5 to 0.5
            const xNormal = (x / rect.width) - 0.5;
            const yNormal = (y / rect.height) - 0.5;
            
            // Calculate rotations (limit max tilt to 25 degrees)
            const rotX = -yNormal * 30; // Tilt forward/backward
            const rotY = (xNormal * 35) - 20; // Combine normal tilt with original perspective angle (-20deg)
            
            // Apply transform style
            book.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.04)`;
            
            // Move shadow opposite to tilt for realism
            if (shadow) {
                const shadowX = -xNormal * 15;
                const shadowY = 3 + (-yNormal * 10);
                shadow.style.left = `${shadowX - 4}%`;
                shadow.style.top = `${shadowY}%`;
                shadow.style.filter = 'blur(15px)';
            }
        });

        // Reset rotation on mouse leave
        bookContainer.addEventListener('mouseleave', () => {
            book.style.transform = 'rotateY(-20deg) rotateX(10deg)';
            if (shadow) {
                shadow.style.left = '-4%';
                shadow.style.top = '3%';
                shadow.style.filter = 'blur(20px)';
            }
        });
    }


    /* ==========================================================================
       3. Sales-Optimized Persistent Countdown Timer
       ========================================================================== */
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    if (hoursSpan && minutesSpan && secondsSpan) {
        // Set countdown target duration (e.g. 2 hours 45 minutes 12 seconds)
        const COUNTDOWN_KEY = 'chayei_sarah_timer';
        const TARGET_DURATION = (2 * 60 * 60 + 45 * 60 + 12) * 1000; // in milliseconds
        
        let endTime = localStorage.getItem(COUNTDOWN_KEY);

        if (!endTime) {
            endTime = Date.now() + TARGET_DURATION;
            localStorage.setItem(COUNTDOWN_KEY, endTime);
        } else {
            endTime = parseInt(endTime, 10);
            
            // If timer expired in the past, reset it to create recurring urgency
            if (Date.now() > endTime) {
                endTime = Date.now() + TARGET_DURATION;
                localStorage.setItem(COUNTDOWN_KEY, endTime);
            }
        }

        const updateTimer = () => {
            const timeRemaining = endTime - Date.now();

            if (timeRemaining <= 0) {
                // Reset timer when it expires
                endTime = Date.now() + TARGET_DURATION;
                localStorage.setItem(COUNTDOWN_KEY, endTime);
                return;
            }

            const hrs = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((timeRemaining / (1000 * 60)) % 60);
            const secs = Math.floor((timeRemaining / 1000) % 60);

            // Format numbers to 2 digits
            hoursSpan.textContent = String(hrs).padStart(2, '0');
            minutesSpan.textContent = String(mins).padStart(2, '0');
            secondsSpan.textContent = String(secs).padStart(2, '0');
        };

        // Run timer immediately and then every second
        updateTimer();
        setInterval(updateTimer, 1000);
    }


    /* ==========================================================================
       4. Format Selector Radio Style Synchronization
       ========================================================================== */
    const formatOptions = document.querySelectorAll('.format-option');
    const addressInput = document.getElementById('address');
    
    formatOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        
        option.addEventListener('click', () => {
            // Remove active classes
            formatOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked format card
            option.classList.add('active');
            radio.checked = true;
            
            // Manage shipping address field requirements
            if (addressInput) {
                if (radio.value === 'digital') {
                    addressInput.placeholder = 'אין צורך בכתובת לעותק דיגיטלי (יישלח ישירות לאימייל)';
                    addressInput.required = false;
                } else {
                    addressInput.placeholder = 'רחוב, מספר בית, עיר';
                    addressInput.required = true;
                }
            }
        });
    });


    /* ==========================================================================
       5. Secure Checkout Form Submission & Success Modal
       ========================================================================== */
    const orderForm = document.getElementById('orderForm');
    const successModal = document.getElementById('successModal');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (orderForm && successModal) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = orderForm.querySelector('.btn-submit');
            const submitText = submitBtn.querySelector('span');
            const submitIcon = submitBtn.querySelector('i');
            
            // Interactive Loading State
            submitBtn.disabled = true;
            submitText.textContent = 'מעבד נתונים ומאבטח...';
            submitIcon.className = 'fa-solid fa-spinner fa-spin';
            
            // Simulate payment processing / server API submission (1.5 seconds)
            setTimeout(() => {
                // Show Success Modal
                successModal.classList.add('active');
                
                // Reset submit button state
                submitBtn.disabled = false;
                submitText.textContent = 'מעבר לתשלום מאובטח';
                submitIcon.className = 'fa-solid fa-credit-card';
                
                // Reset form inputs
                orderForm.reset();
                
                // Reset format option highlight to printed
                formatOptions.forEach(opt => opt.classList.remove('active'));
                formatOptions[0].classList.add('active');
                formatOptions[0].querySelector('input[type="radio"]').checked = true;
                if (addressInput) {
                    addressInput.placeholder = 'רחוב, מספר בית, עיר';
                }
            }, 1500);
        });
    }

    // Modal Close Triggers
    const closeModal = () => {
        successModal.classList.remove('active');
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal clicking outside content
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeModal();
            }
        });
    }


    /* ==========================================================================
       6. Scroll Reveal Animations (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.hero-content, .hero-image-wrapper, .badge-item, .about-text, .themes-card, .author-image-wrapper, .author-content, .review-card, .purchase-info, .purchase-card');
    
    // Set class to reveal
    revealElements.forEach(el => el.classList.add('reveal'));
    
    // Optional delay distribution for grids
    const testimonialCards = document.querySelectorAll('.review-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add(`delay-${(index + 1) * 100}`);
    });

    const badgeItems = document.querySelectorAll('.badge-item');
    badgeItems.forEach((badge, index) => {
        badge.classList.add(`delay-${(index + 1) * 100}`);
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
