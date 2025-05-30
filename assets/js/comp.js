document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/top.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("top").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


// nav section
document.addEventListener("DOMContentLoaded", function () {
    // Load navbar component dynamically
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
            inithammenu();
        });
});

function inithammenu(){
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-close-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenu = document.querySelector('.mobile-menu-container');
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    const header = document.querySelector('.header-nav');
    
    // Toggle mobile menu
    menuBtn.addEventListener('click', function() {
        overlay.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    function closeMobileMenu() {
        overlay.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Mobile dropdown functionality
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const dropdown = this.parentElement;
            const menu = dropdown.querySelector('.mobile-dropdown-menu');
            const icon = this.querySelector('i:last-child');
            
            this.classList.toggle('active');
            menu.classList.toggle('active');
            icon.classList.toggle('active');
        });
    });
    
    // Highlight current page in mobile menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
            
            // Open parent dropdown if this is a dropdown item
            const dropdownItem = link.closest('.mobile-dropdown-menu');
            if (dropdownItem) {
                dropdownItem.classList.add('active');
                const dropdownBtn = dropdownItem.previousElementSibling;
                dropdownBtn.classList.add('active');
            }
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Close dropdowns when clicking outside on desktop
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 768) {
            const isDropdown = e.target.closest('details');
            const allDetails = document.querySelectorAll('details');
            
            allDetails.forEach(detail => {
                if (detail !== isDropdown) {
                    detail.removeAttribute('open');
                }
            });
        }
    });

}

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/why.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("why").innerHTML = data;
            initwhy();
        })
        .catch(error => console.error("Error loading the header:", error));
});



function initwhy(){
    const reasonBoxes = document.querySelectorAll('.nkpc-reason-box');
            
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    reasonBoxes.forEach(box => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(box);
    });
}







// hero
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero").innerHTML = data;
            initheroc();  // Initialize carousel after loading hero section
        });
});

function initheroc() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
            const closeBtn = document.querySelector('.mobile-close-btn');
            const overlay = document.querySelector('.mobile-menu-overlay');
            const mobileMenu = document.querySelector('.mobile-menu-container');
            const header = document.querySelector('.header-nav');
            
            // Toggle mobile menu
            menuBtn.addEventListener('click', function() {
                overlay.classList.add('active');
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close mobile menu
            function closeMobileMenu() {
                overlay.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            closeBtn.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            
            // Highlight current page in mobile menu
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.mobile-nav-links a').forEach(link => {
                const linkPage = link.getAttribute('href');
                if (currentPage === linkPage) {
                    link.classList.add('active');
                }
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Carousel functionality
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.nav-dot');
            const arrows = document.querySelectorAll('.carousel-arrow');
            let currentSlide = 0;
            let slideInterval;
            
            // Initialize carousel
            function initCarousel() {
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
                startSlideShow();
            }
            
            // Start slideshow
            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            // Go to specific slide
            function goToSlide(n) {
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
            
            // Next slide
            function nextSlide() {
                goToSlide(currentSlide + 1);
            }
            
            // Previous slide
            function prevSlide() {
                goToSlide(currentSlide - 1);
            }
            
            // Dot click event
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    clearInterval(slideInterval);
                    goToSlide(parseInt(this.getAttribute('data-slide')));
                    startSlideShow();
                });
            });
            
            // Arrow click events
            arrows.forEach(arrow => {
                arrow.addEventListener('click', function() {
                    clearInterval(slideInterval);
                    if (this.classList.contains('arrow-left')) {
                        prevSlide();
                    } else {
                        nextSlide();
                    }
                    startSlideShow();
                });
            });
            
            // Pause on hover
            const carousel = document.querySelector('.hero-carousel');
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', startSlideShow);
            
            // Initialize
            initCarousel();
            
            // Set minimum date for appointment forms
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('appointment-date')?.setAttribute('min', today);
}




document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});



// infodr
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/calculator.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("calculator").innerHTML = data;
            document.getElementById('calculateBtn').addEventListener('click', function() {
                // Get input values
                const lastPeriodDate = new Date(document.getElementById('lastPeriod').value);
                const cycleLength = parseInt(document.getElementById('cycleLength').value);
                
                if (isNaN(lastPeriodDate.getTime()) || isNaN(cycleLength)) {
                    alert('Please enter valid values');
                    return;
                }
                
                // Calculate dates
                const nextPeriodDate = new Date(lastPeriodDate);
                nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);
                
                const ovulationDate = new Date(nextPeriodDate);
                ovulationDate.setDate(ovulationDate.getDate() - 14);
                
                const fertileStart = new Date(ovulationDate);
                fertileStart.setDate(fertileStart.getDate() - 3);
                
                const fertileEnd = new Date(ovulationDate);
                fertileEnd.setDate(fertileEnd.getDate() + 1);
                
                const bestDaysStart = new Date(ovulationDate);
                bestDaysStart.setDate(bestDaysStart.getDate() - 1);
                
                // Format dates for display
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                
                document.getElementById('nextPeriod').textContent = nextPeriodDate.toLocaleDateString('en-US', options);
                document.getElementById('ovulationDate').textContent = ovulationDate.toLocaleDateString('en-US', options);
                document.getElementById('fertileWindow').textContent = 
                    fertileStart.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) + " - " + 
                    fertileEnd.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                
                document.getElementById('bestDays').textContent = 
                    bestDaysStart.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) + " and " + 
                    ovulationDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                
                // Show results with animation
                const results = document.getElementById('resultsContainer');
                results.style.display = 'block';
                results.style.animation = 'none';
                void results.offsetWidth; // Trigger reflow
                results.style.animation = 'slideUp 0.5s ease-out';
            });
        });
});
















document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service").innerHTML = data;
            initservice();// Initialize carousel after loading hero section
        });
});



function initservice(){
    const serviceBoxes = document.querySelectorAll('.nkpc-service-box');
            
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    serviceBoxes.forEach(box => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(box);
    });
}



















document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/blog.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blog").innerHTML = data;
            initblog();// Initialize carousel after loading hero section
        });
});

function initblog() {
    const slider = document.querySelector('.hs-slider-container');
        const prevBtn = document.querySelector('.hs-prev-btn');
        const nextBtn = document.querySelector('.hs-next-btn');
        const blogCards = document.querySelectorAll('.hs-blog-card');

        let currentIndex = 0;
        let cardsToShow = 1;
        let interval;

        function updateCardsToShow() {
            if (window.innerWidth >= 992) {
                cardsToShow = 3;
            } else if (window.innerWidth >= 768) {
                cardsToShow = 2;
            } else {
                cardsToShow = 1;
            }

            currentIndex = 0;
            updateSlider();
        }

        function updateSlider() {
            const cardWidth = blogCards[0].offsetWidth + 20;
            const translateX = -currentIndex * cardWidth;
            slider.style.transform = `translateX(${translateX}px)`;

            // Optional: hide buttons instead of disabling
            prevBtn.disabled = blogCards.length <= cardsToShow;
            nextBtn.disabled = blogCards.length <= cardsToShow;
        }

        function goToNext() {
            currentIndex++;
            if (currentIndex > blogCards.length - cardsToShow) {
                currentIndex = 0; // Loop back to start
            }
            updateSlider();
        }

        function goToPrev() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = blogCards.length - cardsToShow; // Go to end
            }
            updateSlider();
        }

        nextBtn.addEventListener('click', function() {
            clearInterval(interval);
            goToNext();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', function() {
            clearInterval(interval);
            goToPrev();
            startAutoSlide();
        });

        function startAutoSlide() {
            interval = setInterval(goToNext, 4000); // Change every 4 seconds
        }

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        startAutoSlide(); // Begin auto sliding on load
}














document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/video.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("video").innerHTML = data;
            initvideo()// Initialize carousel after loading hero section
        });
});

// video Slider functionality
function initvideo(){

    const slider = document.querySelector('.vs-slider-track');
    const prevBtn = document.querySelector('.vs-prev-btn');
    const nextBtn = document.querySelector('.vs-next-btn');
    const videoCards = document.querySelectorAll('.vs-slide-card');
    const iframes = document.querySelectorAll('.vs-slide-card iframe');

    let currentIndex = 0;
    let cardsToShow = 1;
    let interval;

    // Setup YouTube IFrame Player API
    let players = [];

    function createYouTubePlayers() {
      iframes.forEach((iframe, index) => {
        const player = new YT.Player(iframe, {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        players[index] = player;
      });
    }

    function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        clearInterval(interval); // Stop auto-slide
        pauseOtherVideos(event.target); // Pause other videos
      } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        const anyPlaying = players.some(p => p.getPlayerState() === YT.PlayerState.PLAYING);
        if (!anyPlaying) startAutoSlide(); // Resume auto-slide if no video is playing
      }
    }

    function pauseOtherVideos(currentPlayer) {
      players.forEach(player => {
        if (player !== currentPlayer && player.getPlayerState() === YT.PlayerState.PLAYING) {
          player.pauseVideo();
        }
      });
    }

    function updateCardsToShow() {
      if (window.innerWidth >= 992) {
        cardsToShow = 3;
      } else if (window.innerWidth >= 768) {
        cardsToShow = 2;
      } else {
        cardsToShow = 1;
      }

      if (currentIndex > videoCards.length - cardsToShow) {
        currentIndex = 0;
      }
      updateSlider();
    }

    function updateSlider() {
      const cardWidth = videoCards[0].offsetWidth + 20;
      const translateX = -currentIndex * cardWidth;
      slider.style.transform = `translateX(${translateX}px)`;

      prevBtn.disabled = videoCards.length <= cardsToShow;
      nextBtn.disabled = videoCards.length <= cardsToShow;
    }

    function goToNext() {
      currentIndex++;
      if (currentIndex > videoCards.length - cardsToShow) {
        currentIndex = 0;
      }
      updateSlider();
    }

    function goToPrev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = videoCards.length - cardsToShow;
      }
      updateSlider();
    }

    nextBtn.addEventListener('click', function () {
      clearInterval(interval);
      goToNext();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', function () {
      clearInterval(interval);
      goToPrev();
      startAutoSlide();
    });

    // function startAutoSlide() {
    //   clearInterval(interval);
    //   interval = setInterval(goToNext, 4000);
    // }

    const sliderWrapper = document.querySelector('.vs-slider-shell');
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(interval));
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // When API is ready, init players
    window.onYouTubeIframeAPIReady = createYouTubePlayers;

    // startAutoSlide();
}







document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/testimonial.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("test").innerHTML = data;
              // Initialize carousel after loading hero section
        });
});


function inittest(){
const carousel = document.querySelector('.tm-carousel');
const slides = document.querySelectorAll('.tm-slide');
const prevBtn = document.getElementById('tm-prev-btn');
const nextBtn = document.getElementById('tm-next-btn');
const dotsContainer = document.getElementById('tm-dots-container');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('tm-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.tm-dot');

// Update carousel position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance (optional)
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide();
    }
}
}









document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/aboutdr.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("aboutdr").innerHTML = data;
            // Initialize carousel after loading hero section
        });
});




   













document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/whatsapp.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("whatsapp").innerHTML = data; 
            initwhatsapp(); // Initialize carousel after loading hero section
        });
});



function initwhatsapp(){
    const widget = document.getElementById('socialWidget');
    const toggle = document.getElementById('socialWidgetToggle');
    const icons = document.getElementById('socialWidgetIcons');
    
    // Toggle social icons on click
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        widget.classList.toggle('social-widget-active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function() {
        widget.classList.remove('social-widget-active');
    });
    
    // Prevent closing when clicking inside the widget
    icons.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Add slight delay to animation for each icon
    const socialButtons = document.querySelectorAll('.social-widget-btn');
    socialButtons.forEach((btn, index) => {
        btn.style.transitionDelay = `${index * 0.05}s`;
    });
}




















document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/contactbox.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contactbox").innerHTML = data;
            initcontactbox();  // Initialize carousel after loading hero section
        });
});


    // Enhanced animations with staggered delays
    function initcontactbox() {
        const cards = document.querySelectorAll('.info-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Add hover effect to highlight text
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            highlight.addEventListener('mouseenter', () => {
                highlight.style.background = 'linear-gradient(120deg, rgba(79, 70, 229, 0.2), rgba(245, 158, 11, 0.2))';
            });
            highlight.addEventListener('mouseleave', () => {
                highlight.style.background = 'linear-gradient(120deg, rgba(79, 70, 229, 0.1), rgba(245, 158, 11, 0.1))';
            });
        });
    }








document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service2").innerHTML = data;  // Initialize carousel after loading hero section
        });
});


document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/sutpanabout.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sutpan").innerHTML = data;  // Initialize carousel after loading hero section
        });
});




document.addEventListener("DOMContentLoaded", function () {
    fetch("components/stats.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("stats").innerHTML = data;
  
        // Counter logic after stats.html is loaded
        let hasAnimated = false;
  
        function animateCounters() {
          const counters = document.querySelectorAll(".counter");
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
              const increment = target / 200;
  
              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target.toLocaleString(); // Add comma formatting
              }
            };
            updateCount();
          });
        }
  
        function handleScroll() {
          const statsSection = document.getElementById("stats");
          const sectionTop = statsSection.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.8;
  
          if (!hasAnimated && sectionTop < triggerPoint) {
            animateCounters();
            hasAnimated = true;
          }
        }
  
        window.addEventListener("scroll", handleScroll);
      });
  });







  document.addEventListener("DOMContentLoaded", function () {
    fetch("components/app.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("app").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/gallery.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("gallery").innerHTML = data;
            initgallery();
        })
        .catch(error => console.error("Error loading the header:", error));
});








function initgallery() {
    const track = document.querySelector('.nkpc-slider-track');
    const slides = document.querySelectorAll('.nkpc-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('nkpc-dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.nkpc-dot');
    
    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.nkpc-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, {passive: true});
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        slideInterval = setInterval(nextSlide, 5000);
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) nextSlide(); // Swipe left
        if (difference < -50) prevSlide(); // Swipe right
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}











document.addEventListener("DOMContentLoaded", function () {
    fetch("components/doctors.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("doctors").innerHTML = data;
            const doctors = [
                {
                    name: "Dr. Emily Johnson",
                    specialty: "Cardiologist",
                    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Specializes in interventional cardiology with 15 years of experience in heart care."
                },
                {
                    name: "Dr. Michael Chen",
                    specialty: "Neurologist",
                    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Expert in treating complex neurological disorders and stroke management."
                },
                {
                    name: "Dr. Sarah Williams",
                    specialty: "Pediatrician",
                    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Passionate about children's health with special focus on preventive care."
                },
                {
                    name: "Dr. Robert Taylor",
                    specialty: "Orthopedic Surgeon",
                    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Specializes in joint replacements and sports medicine injuries."
                },
                {
                    name: "Dr. Olivia Martinez",
                    specialty: "Dermatologist",
                    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Expert in cosmetic and medical dermatology with holistic approach."
                },
                {
                    name: "Dr. James Wilson",
                    specialty: "Oncologist",
                    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Specializes in hematologic malignancies and targeted therapies."
                },
                {
                    name: "Dr. Sophia Lee",
                    specialty: "Endocrinologist",
                    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Focuses on diabetes management and metabolic disorders."
                },
                {
                    name: "Dr. David Kim",
                    specialty: "Gastroenterologist",
                    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bio: "Expert in advanced endoscopic procedures and digestive health."
                }
            ];
    
            // Generate doctor cards
            const slider = document.getElementById('slider');
            
            doctors.forEach(doctor => {
                const card = document.createElement('div');
                card.className = 'doctor-card';
                card.innerHTML = `
                    <div class="doctor-image">
                        <img src="${doctor.image}" alt="${doctor.name}">
                    </div>
                    <h2>${doctor.name}</h2>
                    <span class="specialty">${doctor.specialty}</span>
                    <p class="doctor-bio">${doctor.bio}</p>
                    <a href="#" class="view-profile">View Profile</a>
                `;
                slider.appendChild(card);
            });
    
            // Slider navigation
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
            
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
        })
        .catch(error => console.error("Error loading the header:", error));
});
