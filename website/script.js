/**
 * ALPHNOLOGY - Micro-interactions
 * Vanilla JS ES6+ for maximum performance
 */

document.addEventListener('DOMContentLoaded', () => {
    initCurrentYear();
    initScrollReveal();
    initTrustedCarousel();
    initHeroCtaSelection();
    initNavigation();
    initSmoothScroll();
    initContactForm();
    initModals();
});

/**
 * Set Current Year in Footer
 */
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Scroll Reveal Animation
 * Uses Intersection Observer for performance
 */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

/**
 * Trusted Clients Carousel
 * Shows 3 at a time and rotates through the list
 */
function initTrustedCarousel() {
    const carousel = document.getElementById('trustedCarousel');

    if (!carousel) return;

    const list = carousel.querySelector('.trusted__list');
    const slots = Array.from(carousel.querySelectorAll('.trusted__client'));

    if (!list || slots.length < 3) return;

    const clients = [
        { name: 'Punto Intimo', logo: 'img/clients/punto_intimo.jpg' },
        { name: 'Benestare', logo: 'img/clients/benestare.jpg' },
        { name: 'AgriFEL', logo: 'img/clients/agrifel.jpg' },
        { name: 'Lab. Arvelo', logo: 'img/clients/lab_arvelo.jpg' },
        { name: 'Grupo Nobe', logo: 'img/clients/grupo_nobe.jpg' },
        { name: 'Uteco', logo: 'img/clients/uteco.jpg' },
        { name: 'Trace', logo: 'img/clients/trace.png' },
        { name: 'Grupo Sanel', logo: 'img/clients/grupo_sanel.png' },
        { name: 'Bravo', logo: 'img/clients/bravo.png' },
        { name: 'Coral Hospitality Corp', logo: 'img/clients/chc.svg' }
    ];

    let startIndex = 0;
    let timerId = null;

    const render = () => {
        slots.forEach((slot, index) => {
            const client = clients[(startIndex + index) % clients.length];
            const img = slot.querySelector('img');
            const name = slot.querySelector('.trusted__name');

            if (img) {
                img.src = client.logo;
                img.alt = client.name;
            }

            if (name) {
                name.textContent = client.name;
            }
        });
    };

    const rotate = () => {
        list.classList.add('is-switching');
        window.setTimeout(() => {
            startIndex = (startIndex + 3) % clients.length;
            render();
            list.classList.remove('is-switching');
        }, 250);
    };

    const start = () => {
        if (timerId) return;
        timerId = window.setInterval(rotate, 3500);
    };

    const stop = () => {
        if (timerId) {
            window.clearInterval(timerId);
            timerId = null;
        }
    };

    render();
    start();

    list.addEventListener('mouseenter', stop);
    list.addEventListener('mouseleave', start);
    window.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    });
}

/**
 * Hero CTA Selected State
 * Keeps the last selected option highlighted
 */
function initHeroCtaSelection() {
    const heroCta = document.querySelector('.hero__cta');

    if (!heroCta) return;

    const buttons = Array.from(heroCta.querySelectorAll('.btn'));
    const targets = buttons
        .map(button => {
            const href = button.getAttribute('href');
            if (!href || !href.startsWith('#')) return null;
            const section = document.querySelector(href);
            if (!section) return null;
            return { button, section };
        })
        .filter(Boolean);

    if (!targets.length) return;

    const setSelected = (button) => {
        buttons.forEach(item => item.classList.remove('is-selected'));
        if (button) button.classList.add('is-selected');
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            setSelected(button);
        });
    });

    const updateFromScroll = () => {
        const scrollY = window.pageYOffset;
        const navHeight = document.getElementById('nav').offsetHeight;

        let current = null;

        targets.forEach(({ button, section }) => {
            const top = section.offsetTop - navHeight - 40;
            const bottom = top + section.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
                current = button;
            }
        });

        if (current) {
            setSelected(current);
        }
    };

    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
}

/**
 * Navigation Functionality
 * - Mobile menu toggle
 * - Scroll-based styling
 * - Active link highlighting
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Scroll-based navigation styling
    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > scrollThreshold) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');

    const highlightNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without triggering scroll
                history.pushState(null, null, href);
            }
        });
    });
}

/**
 * Contact Form Handling
 * Basic validation and submission feedback
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
            Enviando...
        `;

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Simulate API call (replace with actual endpoint)
            await simulateSubmit(data);

            // Success state
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                Enviado
            `;
            submitBtn.style.background = 'var(--color-secondary)';

            // Reset form
            form.reset();

            // Show success message
            showNotification('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');

            // Reset button after delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);

        } catch (error) {
            // Error state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            showNotification('Error al enviar el mensaje. Intenta nuevamente.', 'error');
        }
    });

    // Input focus animations
    const inputs = form.querySelectorAll('.form__input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

/**
 * Simulate form submission (replace with actual API call)
 */
function simulateSubmit(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Form data:', data);
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Simulated error'));
            }
        }, 1500);
    });
}

/**
 * Show Notification Toast
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification__close" aria-label="Cerrar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
    `;

    // Add styles dynamically if not present
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                bottom: 24px;
                right: 24px;
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px 20px;
                background: var(--bg-elevated);
                border: 1px solid var(--border-default);
                border-radius: var(--radius-lg);
                color: var(--text-primary);
                font-size: 14px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                z-index: 9999;
                animation: slideIn 0.3s ease;
            }

            .notification--success {
                border-color: var(--color-secondary);
            }

            .notification--error {
                border-color: #ef4444;
            }

            .notification__close {
                padding: 4px;
                color: var(--text-tertiary);
                cursor: pointer;
                transition: color 0.2s;
            }

            .notification__close:hover {
                color: var(--text-primary);
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(20px);
                }
            }
        `;
        document.head.appendChild(styles);
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Close button handler
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Parallax Effect for Hero (subtle)
 */
function initParallax() {
    const hero = document.querySelector('.hero__gradient');

    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        hero.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
}

// Initialize parallax on load
window.addEventListener('load', initParallax);

/**
 * Typing Effect for Hero (optional enhancement)
 * Uncomment to enable
 */
/*
function initTypingEffect() {
    const element = document.querySelector('.hero__title-gradient');
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--color-primary)';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            element.style.borderRight = 'none';
        }
    };

    // Start after a delay
    setTimeout(typeWriter, 1000);
}
*/

/**
 * Cursor Glow Effect (for desktop)
 * Creates a subtle glow that follows the cursor
 */
function initCursorGlow() {
    // Skip on touch devices
    if ('ontouchstart' in window) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';

    const glowStyles = document.createElement('style');
    glowStyles.textContent = `
        .cursor-glow {
            position: fixed;
            width: 400px;
            height: 400px;
            pointer-events: none;
            background: radial-gradient(circle, rgba(248, 141, 42, 0.06), transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            transition: opacity 0.3s;
            opacity: 0;
        }

        .cursor-glow.active {
            opacity: 1;
        }
    `;

    document.head.appendChild(glowStyles);
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });

    // Smooth animation
    function animate() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;

        requestAnimationFrame(animate);
    }

    animate();
}

// Initialize cursor glow on load
window.addEventListener('load', initCursorGlow);

/**
 * Modal Functionality
 * Open/close product modals
 */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                openModal(modal);
            }
        });
    });

    // Close modal with close button or overlay
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
