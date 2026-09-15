document.addEventListener('DOMContentLoaded', function() {
    // Like Button Toggle
    const likeButtons = document.querySelectorAll('.like-button');
    if (likeButtons.length > 0) {
        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const icon = button.querySelector('i');
                const isActive = button.classList.toggle('active');

                if (isActive) {
                    // Active state
                    icon.classList.remove('ri-heart-3-line', 'text-gray-500');
                    icon.classList.add('ri-heart-3-fill', 'text-red-500');
                    button.classList.remove('bg-white', 'border-gray-200');
                    button.classList.add('bg-red-100', 'border-red-200');
                } else {
                    // Inactive state
                    icon.classList.remove('ri-heart-3-fill', 'text-red-500');
                    icon.classList.add('ri-heart-3-line', 'text-gray-500');
                    button.classList.remove('bg-red-100', 'border-red-200');
                    button.classList.add('bg-white', 'border-gray-200');
                }
            });
        });
    }

    // More Filters Dropdown
    const moreButton = document.getElementById('more-filters-button');
    const moreDropdown = document.getElementById('more-filters-dropdown');

    if (moreButton && moreDropdown) {
        moreButton.addEventListener('click', function(event) {
            event.stopPropagation();
            moreDropdown.classList.toggle('hidden');
        });

        window.addEventListener('click', function(event) {
            if (!moreButton.contains(event.target) && !moreDropdown.contains(event.target)) {
                moreDropdown.classList.add('hidden');
            }
        });
    }

    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
        const numberOfStars = 50;
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const size = Math.random() * 2 + 1; // 1 to 3px
            const topPos = Math.random() * 100;
            const leftPos = Math.random() * 100;
            const durationTwinkle = Math.random() * 3 + 2; // 2s to 5s
            const durationMove = Math.random() * 10 + 10; // 10s to 20s

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${topPos}%`;
            star.style.left = `${leftPos}%`;
            star.style.animationDuration = `${durationTwinkle}s, ${durationMove}s`;
            
            starsContainer.appendChild(star);
        }
    }

    // Parallax scroll for feature card icons
    const featureCard = document.querySelector('.feature-card.text-center-card');
    if (featureCard) {
        const rowLtr = featureCard.querySelector('.card-icons-row.ltr');
        const rowRtl = featureCard.querySelector('.card-icons-row.rtl');

        if (rowLtr && rowRtl) {
            window.addEventListener('scroll', () => {
                const rect = featureCard.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Check if the card is in the viewport
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    // Calculate a ratio from -1 to 1 based on the element's center position in the viewport
                    // -1: element center is at the bottom of the viewport
                    //  0: element center is at the center of the viewport
                    // +1: element center is at the top of the viewport
                    const ratio = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
                    
                    const moveDistance = ratio * -80; // Max movement in pixels

                    rowLtr.style.transform = `translateX(${moveDistance}px)`;
                    rowRtl.style.transform = `translateX(${-moveDistance}px)`;
                }
            });
        }
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle the clicked item
                item.classList.toggle('active');
            });
        });
    }


    // Feather icons
    feather.replace();

    // Mobile 'Others' dropdown menu using jQuery
    $('#mobile-others-toggle').on('click', function() {
        $('#mobile-others-content').slideToggle(200);
        $(this).find('[data-feather="chevron-down"]').toggleClass('rotate-180');
    });

    // Star generation for payment box
    const paymentStarsContainer = document.querySelector('.payment-stars');
    if (paymentStarsContainer) {
        const numberOfStars = 30;
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const size = Math.random() * 2 + 1;
            const topPos = Math.random() * 100;
            const leftPos = Math.random() * 100;
            const durationTwinkle = Math.random() * 3 + 2;
            const durationMove = Math.random() * 10 + 10;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${topPos}%`;
            star.style.left = `${leftPos}%`;
            star.style.animationDuration = `${durationTwinkle}s, ${durationMove}s`;
            
            paymentStarsContainer.appendChild(star);
        }
    }

    // Floating animation for question cards
    const questionCards = document.querySelectorAll('.question-card');
    if (questionCards.length > 0) {
        questionCards.forEach(card => {
            const moveX = (Math.random() - 0.5) * 30; // -15px to 15px
            const moveY = (Math.random() - 0.5) * 30; // -15px to 15px
            const duration = Math.random() * 3 + 4; // 4s to 7s

            card.style.setProperty('--move-x', `${moveX}px`);
            card.style.setProperty('--move-y', `${moveY}px`);
            card.style.animation = `wobble ${duration}s ease-in-out infinite`;
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const togglePassword = document.querySelector('#toggle-password');
    const password = document.querySelector('#password');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            
            const icon = this.querySelector('i');
            if (type === 'password') {
                icon.classList.remove('ri-eye-off-line');
                icon.classList.add('ri-eye-line');
            } else {
                icon.classList.remove('ri-eye-line');
                icon.classList.add('ri-eye-off-line');
            }
        });
    }

    // Custom Count-up animation
    function animateCount(element) {
        const endValue = parseInt(element.innerText.replace(/,/g, ''), 10);
        const duration = 1500; // Animation duration in milliseconds
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Apply an easing function for a smoother effect
            const easedProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const currentValue = Math.floor(easedProgress * endValue);

            element.innerText = currentValue;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.innerText = endValue;
            }
        }
        requestAnimationFrame(step);
    }

    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countUpElements = entry.target.querySelectorAll('.count-up');
                countUpElements.forEach(el => {
                    animateCount(el);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        countUpObserver.observe(statsSection);
    }

    // Particles.js for background - star dots
    if (window.particlesJS) {
        particlesJS('particles-background', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: '#93c5fd'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.8,
                        opacity_min: 0.3,
                        sync: false
                    }
                },
                size: {
                    value: 1.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        size: 4,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    }
                }
            },
                retina_detect: true
        });

        // Particles.js for payment section
        particlesJS('particles-payment', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 600
                    }
                },
                color: {
                    value: ['#2563EB', '#3B82F6', '#1D4ED8', '#1E40AF']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3B82F6',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Services accordion
    const accordionItems = document.querySelectorAll('.services-accordion-container .accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all items
            accordionItems.forEach(i => i.classList.remove('open'));
            
            // Open the clicked item
            if (!isOpen) {
                item.classList.add('open');
            } else {
                item.classList.remove('open');
            }
        });
    });

    // FAQ Tabs
    const tabButtons = document.querySelectorAll('.faq-tab');
    const tabContents = document.querySelectorAll('.faq-tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        // Set the first tab and content as active by default
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;

                // Deactivate all buttons and hide all content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Activate clicked button and show corresponding content
                button.classList.add('active');
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});
