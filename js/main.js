/**
 * Ekatva Samiti NGO Website - Interactions & Actions
 * Lucknow, India
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Loading Screen Hider
    // ==========================================
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500); // match transition time
            }, 300); // slight initial delay for smooth entry
        });
    }

    // ==========================================
    // 2. Header & Sticky Navigation
    // ==========================================
    const mainHeader = document.querySelector('.main-header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Sticky compact header
        if (scrollPos > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (scrollPos > 400) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to Top action
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140; // adjusting for header offset
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 3. Mobile Navigation Menu
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
        });
        
        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // ==========================================
    // 4. Hero Carousel Slider
    // ==========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 2000; // 2 seconds auto-change
    
    const showSlide = (n) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };
    
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };
    
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };
    
    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };
    
    const resetSlideShow = () => {
        clearInterval(slideInterval);
        startSlideShow();
    };
    
    if (slides.length > 0) {
        // Setup initial triggers
        showSlide(0);
        startSlideShow();
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetSlideShow();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetSlideShow();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetSlideShow();
            });
        });
        
        // Pause carousel on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carouselContainer.addEventListener('mouseleave', startSlideShow);
        }
    }

    // ==========================================
    // 5. Scroll Reveals / AOS Lightweight Mock
    // ==========================================
    const revealItems = document.querySelectorAll('.scroll-reveal, .scroll-reveal-item');
    
    if (revealItems.length > 0) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        };
        
        const revealObserver = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.15, // trigger when 15% visible
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealItems.forEach(item => {
            revealObserver.observe(item);
        });
    }

    // ==========================================
    // 6. Gallery Filters and Lightbox
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Lightbox Elements
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let activeGallerySet = [];
    let activeLightboxIndex = 0;

    // Filter Logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active button class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    // Trigger reflow for animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Populate gallery items currently active (filtered)
    const updateActiveGallerySet = () => {
        activeGallerySet = [];
        galleryItems.forEach(item => {
            if (item.style.display !== 'none') {
                const img = item.querySelector('img');
                const title = item.querySelector('.gallery-item-title').textContent;
                activeGallerySet.push({
                    src: img.src,
                    title: title
                });
            }
        });
    };

    // Open Lightbox
    galleryItems.forEach((item) => {
        const zoomBtn = item.querySelector('.gallery-zoom-btn');
        const openAction = () => {
            updateActiveGallerySet();
            const currentImg = item.querySelector('img').src;
            
            // Find index in filtered set
            activeLightboxIndex = activeGallerySet.findIndex(itm => itm.src === currentImg);
            
            if (activeLightboxIndex !== -1) {
                showLightboxImage();
                lightboxModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // prevent scroll behind
            }
        };
        
        if (zoomBtn) {
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openAction();
            });
        }
        item.addEventListener('click', openAction);
    });

    const showLightboxImage = () => {
        const currentData = activeGallerySet[activeLightboxIndex];
        if (currentData) {
            lightboxImg.src = currentData.src;
            lightboxCaption.textContent = currentData.title;
        }
    };

    const nextLightbox = () => {
        activeLightboxIndex = (activeLightboxIndex + 1) % activeGallerySet.length;
        showLightboxImage();
    };

    const prevLightbox = () => {
        activeLightboxIndex = (activeLightboxIndex - 1 + activeGallerySet.length) % activeGallerySet.length;
        showLightboxImage();
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = '';
        });
        
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        
        if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
        if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);
        
        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (lightboxModal.style.display === 'flex') {
                if (e.key === 'Escape') {
                    lightboxModal.style.display = 'none';
                    document.body.style.overflow = '';
                } else if (e.key === 'ArrowRight') {
                    nextLightbox();
                } else if (e.key === 'ArrowLeft') {
                    prevLightbox();
                }
            }
        });
    }

    // ==========================================
    // 7. Testimonials Carousel Slider
    // ==========================================
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .t-dot');
    let currentTIndex = 0;
    let tInterval;
    
    const showTestimonial = (n) => {
        if (testimonialDots.length === 0) return;
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        currentTIndex = (n + testimonialDots.length) % testimonialDots.length;
        
        testimonialTrack.style.transform = `translateX(-${currentTIndex * 100}%)`;
        testimonialDots[currentTIndex].classList.add('active');
    };
    
    const startTestimonials = () => {
        tInterval = setInterval(() => {
            showTestimonial(currentTIndex + 1);
        }, 5000); // slide every 5 seconds
    };
    
    if (testimonialDots.length > 0) {
        startTestimonials();
        
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                clearInterval(tInterval);
                startTestimonials();
            });
        });
        
        const sliderContainer = document.querySelector('.testimonial-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => clearInterval(tInterval));
            sliderContainer.addEventListener('mouseleave', startTestimonials);
        }
    }

    // ==========================================
    // 8. Contact Form Client-Side Validation
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get Fields
            const nameField = document.getElementById('name');
            const phoneField = document.getElementById('phone');
            const emailField = document.getElementById('email');
            const msgField = document.getElementById('message');
            
            // Errors
            const nameError = document.getElementById('nameError');
            const phoneError = document.getElementById('phoneError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            
            let isValid = true;
            
            // Validate Name
            if (nameField.value.trim() === '') {
                nameError.style.display = 'block';
                nameField.style.borderColor = 'red';
                isValid = false;
            } else {
                nameError.style.display = 'none';
                nameField.style.borderColor = '';
            }
            
            // Validate Phone (10 digits Indian mobile)
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(phoneField.value.trim())) {
                phoneError.style.display = 'block';
                phoneField.style.borderColor = 'red';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
                phoneField.style.borderColor = '';
            }
            
            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                emailError.style.display = 'block';
                emailField.style.borderColor = 'red';
                isValid = false;
            } else {
                emailError.style.display = 'none';
                emailField.style.borderColor = '';
            }
            
            // Validate Message
            if (msgField.value.trim() === '') {
                messageError.style.display = 'block';
                msgField.style.borderColor = 'red';
                isValid = false;
            } else {
                messageError.style.display = 'none';
                msgField.style.borderColor = '';
            }
            
            // Submit form via Web3Forms AJAX
            if (isValid) {
                // Get elements
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                const formErrorMessage = document.getElementById('formErrorMessage');
                const closeErrorBtn = document.getElementById('closeErrorBtn');
                
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
                
                // Create Form Data
                const formData = new FormData(contactForm);
                // Append access key dynamically
                formData.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // Replace this with your Web3Forms Access Key
                
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(async (response) => {
                    const res = await response.json();
                    if (response.status === 200 && res.success) {
                        // Show success container
                        formSuccessMessage.style.display = 'flex';
                        contactForm.reset();
                        
                        // Automatically hide success notification after 5 seconds
                        setTimeout(() => {
                            formSuccessMessage.style.opacity = '0';
                            setTimeout(() => {
                                formSuccessMessage.style.display = 'none';
                                formSuccessMessage.style.opacity = '1';
                            }, 500);
                        }, 5000);
                    } else {
                        // Show error container
                        formErrorMessage.style.display = 'flex';
                    }
                })
                .catch((error) => {
                    console.error('Submission error:', error);
                    // Show error container
                    formErrorMessage.style.display = 'flex';
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
                
                // Handle closing the error alert
                if (closeErrorBtn) {
                    closeErrorBtn.addEventListener('click', () => {
                        formErrorMessage.style.display = 'none';
                    });
                }
            }
        });
    }
});
