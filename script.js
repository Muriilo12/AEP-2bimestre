// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animated counter for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Initialize counters when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe hero section for counter animation
const heroSection = document.querySelector('.hero');
if (heroSection) {
    observer.observe(heroSection);
}

// Service information data
const serviceData = {
    schedule: {
        title: 'Horários de Coleta por Bairro',
        content: `
            <div class="schedule-grid">
                <div class="schedule-item">
                    <h4>Centro</h4>
                    <p><strong>Orgânicos:</strong> Segunda, Quarta e Sexta - 7h às 12h</p>
                    <p><strong>Recicláveis:</strong> Terça e Quinta - 8h às 14h</p>
                </div>
                <div class="schedule-item">
                    <h4>Jardins</h4>
                    <p><strong>Orgânicos:</strong> Terça, Quinta e Sábado - 6h às 11h</p>
                    <p><strong>Recicláveis:</strong> Segunda e Quarta - 7h às 13h</p>
                </div>
                <div class="schedule-item">
                    <h4>Vila Nova</h4>
                    <p><strong>Orgânicos:</strong> Segunda, Quarta e Sexta - 8h às 13h</p>
                    <p><strong>Recicláveis:</strong> Terça e Quinta - 9h às 15h</p>
                </div>
                <div class="schedule-item">
                    <h4>Distrito Industrial</h4>
                    <p><strong>Orgânicos:</strong> Diariamente - 6h às 10h</p>
                    <p><strong>Recicláveis:</strong> Diariamente - 14h às 18h</p>
                </div>
            </div>
        `
    },
    guide: {
        title: 'Guia Completo de Separação',
        content: `
            <div class="guide-grid">
                <div class="guide-item">
                    <div class="guide-icon organic">
                        <i class="fas fa-apple-alt"></i>
                    </div>
                    <h4>Resíduos Orgânicos</h4>
                    <ul>
                        <li>Restos de comida</li>
                        <li>Cascas de frutas e verduras</li>
                        <li>Borra de café</li>
                        <li>Folhas secas</li>
                    </ul>
                </div>
                <div class="guide-item">
                    <div class="guide-icon recyclable">
                        <i class="fas fa-recycle"></i>
                    </div>
                    <h4>Materiais Recicláveis</h4>
                    <ul>
                        <li>Papel e papelão limpos</li>
                        <li>Plásticos (garrafas, embalagens)</li>
                        <li>Vidros</li>
                        <li>Metais (latas, alumínio)</li>
                    </ul>
                </div>
                <div class="guide-item">
                    <div class="guide-icon electronic">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h4>Eletrônicos</h4>
                    <ul>
                        <li>Celulares e tablets</li>
                        <li>Computadores</li>
                        <li>Pilhas e baterias</li>
                        <li>Eletrodomésticos pequenos</li>
                    </ul>
                </div>
                <div class="guide-item">
                    <div class="guide-icon hazardous">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h4>Resíduos Perigosos</h4>
                    <ul>
                        <li>Medicamentos vencidos</li>
                        <li>Produtos químicos</li>
                        <li>Tintas e solventes</li>
                        <li>Óleo de cozinha usado</li>
                    </ul>
                </div>
            </div>
        `
    },
    locations: {
        title: 'Pontos de Coleta Especiais',
        content: `
            <div class="locations-grid">
                <div class="location-item">
                    <h4><i class="fas fa-map-marker-alt"></i> Centro da Cidade</h4>
                    <p><strong>Endereço:</strong> Praça Central, 123</p>
                    <p><strong>Aceita:</strong> Eletrônicos, pilhas, baterias</p>
                    <p><strong>Horário:</strong> Segunda a Sexta, 8h às 17h</p>
                </div>
                <div class="location-item">
                    <h4><i class="fas fa-map-marker-alt"></i> Farmácia Municipal</h4>
                    <p><strong>Endereço:</strong> Rua da Saúde, 456</p>
                    <p><strong>Aceita:</strong> Medicamentos vencidos</p>
                    <p><strong>Horário:</strong> Segunda a Sexta, 7h às 19h</p>
                </div>
                <div class="location-item">
                    <h4><i class="fas fa-map-marker-alt"></i> Ecoponto Vila Verde</h4>
                    <p><strong>Endereço:</strong> Av. Sustentável, 789</p>
                    <p><strong>Aceita:</strong> Óleo de cozinha, produtos químicos</p>
                    <p><strong>Horário:</strong> Terça e Quinta, 8h às 16h</p>
                </div>
            </div>
        `
    },
    education: {
        title: 'Programas de Educação Ambiental',
        content: `
            <div class="education-grid">
                <div class="education-item">
                    <h4><i class="fas fa-school"></i> Escolas Sustentáveis</h4>
                    <p>Programa educativo para estudantes do ensino fundamental e médio, com workshops práticos sobre separação de resíduos e compostagem.</p>
                    <p><strong>Duração:</strong> 4 horas | <strong>Participantes:</strong> Até 30 alunos</p>
                </div>
                <div class="education-item">
                    <h4><i class="fas fa-users"></i> Comunidade Consciente</h4>
                    <p>Palestras e atividades para moradores, focando na importância do descarte correto e seus impactos ambientais.</p>
                    <p><strong>Duração:</strong> 2 horas | <strong>Participantes:</strong> Comunidade em geral</p>
                </div>
                <div class="education-item">
                    <h4><i class="fas fa-building"></i> Empresas Verdes</h4>
                    <p>Consultoria para empresas implementarem práticas sustentáveis de gestão de resíduos em seus estabelecimentos.</p>
                    <p><strong>Duração:</strong> Personalizada | <strong>Participantes:</strong> Funcionários e gestores</p>
                </div>
            </div>
        `
    }
};

// Show service information
function showServiceInfo(serviceType) {
    const serviceInfo = document.getElementById('serviceInfo');
    const data = serviceData[serviceType];
    
    if (data) {
        serviceInfo.innerHTML = `
            <div class="service-detail">
                <h3>${data.title}</h3>
                ${data.content}
            </div>
        `;
        
        // Add CSS for service details if not already added
        if (!document.querySelector('#service-detail-styles')) {
            const style = document.createElement('style');
            style.id = 'service-detail-styles';
            style.textContent = `
                .service-detail {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                }
                .service-detail h3 {
                    color: #1e293b;
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    text-align: center;
                }
                .schedule-grid, .guide-grid, .locations-grid, .education-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1rem;
                }
                .schedule-item, .guide-item, .location-item, .education-item {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 10px;
                    border-left: 4px solid #10b981;
                }
                .schedule-item h4, .location-item h4, .education-item h4 {
                    color: #1e293b;
                    margin-bottom: 1rem;
                }
                .schedule-item p, .location-item p, .education-item p {
                    color: #64748b;
                    margin-bottom: 0.5rem;
                }
                .guide-item {
                    text-align: center;
                    border-left: none;
                    border-top: 4px solid #10b981;
                }
                .guide-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    font-size: 1.5rem;
                    color: white;
                }
                .guide-icon.organic { background: #10b981; }
                .guide-icon.recyclable { background: #3b82f6; }
                .guide-icon.electronic { background: #f59e0b; }
                .guide-icon.hazardous { background: #ef4444; }
                .guide-item h4 {
                    color: #1e293b;
                    margin-bottom: 1rem;
                }
                .guide-item ul {
                    list-style: none;
                    padding: 0;
                    text-align: left;
                }
                .guide-item li {
                    color: #64748b;
                    padding: 0.25rem 0;
                    padding-left: 1rem;
                    position: relative;
                }
                .guide-item li:before {
                    content: "•";
                    color: #10b981;
                    position: absolute;
                    left: 0;
                }
            `;
            document.head.appendChild(style);
        }
    }
    // Rolar até o conteúdo do serviço
    document.getElementById('serviceInfo').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
});

}

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });
    
    if (!isValid) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Simulate form submission
    const button = this.querySelector('.submit-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
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

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('EcoColeta website loaded successfully!');
    
    // Add entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        animationObserver.observe(el);
    });
});