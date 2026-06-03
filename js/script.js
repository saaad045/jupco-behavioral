// =========================
// FORM SUBMISSIONS
// =========================

const form = document.getElementById('premiumForm');

if (form) {

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        const btn =
            form.querySelector('.form-btn-premium');

        if (!btn) return;

        const original =
            btn.innerHTML;

        btn.innerHTML =
            '<i class="fas fa-check-circle"></i> Request Sent!';

        btn.style.background =
            'linear-gradient(135deg,#4ab3a5,#2f9e8f)';

        setTimeout(() => {

            btn.innerHTML = original;

            btn.style.background =
                'linear-gradient(135deg,#111827,#2f9e8f)';

            form.reset();

        }, 2600);

    });

}

// =========================
// HERO FORM
// =========================

const heroForm =
    document.getElementById('heroForm');

if (heroForm) {

    heroForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const btn =
            heroForm.querySelector('button');

        if (!btn) return;

        const original =
            btn.innerHTML;

        btn.innerHTML =
            '✓ Request Sent!';

        btn.style.opacity = '0.9';

        setTimeout(() => {

            btn.innerHTML = original;

            btn.style.opacity = '1';

            heroForm.reset();

        }, 2200);

    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const hash =
            this.getAttribute('href');

        if (hash && hash !== '#') {

            const target =
                document.querySelector(hash);

            if (target) {

                e.preventDefault();

                const headerOffset = 100;

                const elementPosition =
                    target.getBoundingClientRect().top;

                const offsetPosition =
                    elementPosition +
                    window.pageYOffset -
                    headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

            }

        }

    });

});

// =========================
// CTA BUTTONS
// =========================

const ctaButton =
    document.getElementById('mainCtaBtn');

const mobileCtaBtn =
    document.getElementById('mobileCtaBtn');

const bottomBtn =
    document.getElementById('bottomCTA');

function scrollToForm() {

    const formSection =
        document.getElementById('contact');

    if (formSection) {

        formSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

}

if (ctaButton) {
    ctaButton.addEventListener(
        'click',
        scrollToForm
    );
}

if (mobileCtaBtn) {
    mobileCtaBtn.addEventListener(
        'click',
        scrollToForm
    );
}

if (bottomBtn) {
    bottomBtn.addEventListener(
        'click',
        scrollToForm
    );
}


// =========================
// SOCIAL BUTTONS
// =========================

document.querySelectorAll('.icon-btn')
.forEach(btn => {

    btn.addEventListener('click', function (e) {

        e.preventDefault();

        alert(
            '📱 Connect with Jupco Behavioral Healthcare anytime.'
        );

    });

});

// =========================
// MOBILE NAVBAR
// =========================

(function () {

    const menuToggle =
        document.getElementById('menuToggle');

    const navMenu =
        document.getElementById('navMenu');

    const body =
        document.body;

    if (!menuToggle || !navMenu) return;

    // TOGGLE MENU

    menuToggle.addEventListener(
        'click',
        function (e) {

            e.stopPropagation();

            navMenu.classList.toggle('active');

            const isActive =
                navMenu.classList.contains('active');

            menuToggle.innerHTML = isActive
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';

            body.style.overflow =
                isActive ? 'hidden' : '';

        }
    );

    // CLOSE MENU WHEN CLICKING LINKS

    document.querySelectorAll('.nav a')
    .forEach(link => {

        link.addEventListener(
            'click',
            function () {

                navMenu.classList.remove('active');

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

                body.style.overflow = '';

            }
        );

    });

    // CLOSE ON OUTSIDE CLICK

    document.addEventListener(
        'click',
        function (e) {

            const isClickInside =
                navMenu.contains(e.target) ||
                menuToggle.contains(e.target);

            if (
                !isClickInside &&
                navMenu.classList.contains('active')
            ) {

                navMenu.classList.remove('active');

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

                body.style.overflow = '';

            }

        }
    );

    // CLOSE ON ESC KEY

    document.addEventListener(
        'keydown',
        function (e) {

            if (
                e.key === 'Escape' &&
                navMenu.classList.contains('active')
            ) {

                navMenu.classList.remove('active');

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

                body.style.overflow = '';

            }

        }
    );

    // RESET ON DESKTOP

    window.addEventListener(
        'resize',
        function () {

            if (window.innerWidth > 992) {

                navMenu.classList.remove('active');

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

                body.style.overflow = '';

            }

        }
    );

})();

// =========================
// HEADER SCROLL EFFECT
// =========================

const header =
    document.getElementById('header');

function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 20) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

}

handleHeaderScroll();

window.addEventListener(
    'scroll',
    handleHeaderScroll
);

// =========================
// NEWSLETTER FORM
// =========================

const newsletterForm =
    document.querySelector('.newsletter-form');

if (newsletterForm) {

    newsletterForm.addEventListener(
        'submit',
        function (e) {

            e.preventDefault();

            const button =
                newsletterForm.querySelector('button');

            if (!button) return;

            const original =
                button.innerHTML;

            button.innerHTML =
                'Subscribed ✓';

            button.style.opacity = '0.9';

            setTimeout(() => {

                button.innerHTML = original;

                button.style.opacity = '1';

                newsletterForm.reset();

            }, 2200);

        }
    );

}

    //services cards functionality (touch expand + button click message)
    (function() {
      
      const cards = document.querySelectorAll('.service-card');
      
      // Helper for smooth temporary message pop (lightweight non-blocking)
      function showFloatingMessage(msg) {
        // Create ephemeral toast
        let toast = document.createElement('div');
        toast.innerText = msg;
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        toast.style.backgroundColor = '#1a2e3b';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '60px';
        toast.style.fontWeight = '500';
        toast.style.fontSize = '0.9rem';
        toast.style.zIndex = '9999';
        toast.style.backdropFilter = 'blur(8px)';
        toast.style.background = 'rgba(26, 46, 59, 0.92)';
        toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
        toast.style.fontFamily = "'Inter', sans-serif";
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.2s ease, transform 0.25s ease';
        document.body.appendChild(toast);
        // animate in
        setTimeout(() => {
          toast.style.opacity = '1';
          toast.style.transform = 'translateX(-50%) translateY(0px)';
        }, 10);
        // remove after 2.8s
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(-50%) translateY(20px)';
          setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
          }, 250);
        }, 2600);
      }
   
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      
      if (isTouchDevice && window.innerWidth > 768) {
    
        cards.forEach(card => {
          card.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('service-btn')) {
              return;
            }
            // Toggle expand class
            const isExpanded = card.classList.contains('touch-expand');
            if (isExpanded) {
              card.classList.remove('touch-expand');
            } else {
              cards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('touch-expand')) {
                  otherCard.classList.remove('touch-expand');
                }
              });
              card.classList.add('touch-expand');
            }
          });
        });
        
        document.addEventListener('click', function(e) {
          let isInsideCard = false;
          cards.forEach(card => {
            if (card.contains(e.target)) isInsideCard = true;
          });
          if (!isInsideCard) {
            cards.forEach(card => {
              if (card.classList.contains('touch-expand')) {
                card.classList.remove('touch-expand');
              }
            });
          }
        });
      } else {
      }
      
      cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('focus', () => {
          if (window.innerWidth > 768 && !isTouchDevice) {
            card.classList.add('keyboard-focus');
          }
        });
        card.addEventListener('blur', () => {
          if (card.classList.contains('keyboard-focus')) card.classList.remove('keyboard-focus');
        });
      });
      
    
      window.addEventListener('resize', () => {
        if (isTouchDevice && window.innerWidth > 768) {
        } else if (window.innerWidth <= 768) {
          cards.forEach(c => c.classList.remove('touch-expand'));
        }
      });
      
      if (window.innerWidth <= 768) {
        cards.forEach(c => c.classList.remove('touch-expand'));
      }
    })();