
        // Page Navigation
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.style.color = 'var(--text-color)';
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Project Filtering
        function filterProjects(category) {
            const projects = document.querySelectorAll('.project-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                if (category === 'all' || project.dataset.category === category) {
                    project.style.display = 'block';
                    project.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    project.style.display = 'none';
                }
            });
        }

        // Scroll Animations
        function observeElements() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Form Handling with WhatsApp Integration
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Format message for WhatsApp
            let message = `🏛️ *NOUVELLE DEMANDE DE DEVIS - ATELIER DESIGN*\n\n`;
            message += `👤 *Client:* ${data.name}\n`;
            message += `📧 *Email:* ${data.email}\n`;
            if (data.phone) {
                message += `📞 *Téléphone:* ${data.phone}\n`;
            }
            message += `🏗️ *Type de projet:* ${data.service}\n`;
            if (data.budget) {
                message += `💰 *Budget estimé:* ${data.budget}\n`;
            }
            message += `\n📝 *Description du projet:*\n${data.message}\n\n`;
            message += `⏰ *Date de demande:* ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}\n`;
            message += `\n✅ Le client accepte d'être contacté pour ce projet.`;
            
            // WhatsApp phone number (replace with actual number)
            const whatsappNumber = "33478901234"; // Format: country code + number without +
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show confirmation message
            alert('Merci pour votre demande ! Vous allez être redirigé vers WhatsApp pour finaliser l\'envoi.');
            
            // Reset form
            this.reset();
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.gap = '20px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'white';
                navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navMenu.style.padding = '1rem';
            }
        });

        // Language Switch (placeholder)
        document.querySelector('.lang-switch').addEventListener('click', function() {
            const currentLang = this.textContent.includes('FR') ? 'FR' : 'EN';
            if (currentLang === 'FR') {
                // Switch to English (placeholder)
                alert('English version coming soon!');
            } else {
                // Switch to French
                this.textContent = 'FR | EN';
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            observeElements();
            
            // Add smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        // SEO and Performance optimizations
        // Lazy loading for images (if implemented)
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
        }
        document.addEventListener('DOMContentLoaded', function () {
            observeElements();
        
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        
            // Plein écran sur clic vidéo
            const video = document.getElementById('video-background');
            if (video) {
              video.addEventListener('click', () => {
                if (video.requestFullscreen) {
                  video.requestFullscreen().catch(err => {
                    console.error(`Erreur fullscreen: ${err.message}`);
                  });
                } else if (video.webkitRequestFullscreen) { // Safari
                  video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) { // IE11
                  video.msRequestFullscreen();
                } else {
                  console.log('Fullscreen non supporté');
                }
              });
            }
        });
            