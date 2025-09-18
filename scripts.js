// Inicializar AOS cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Cargar tema guardado
    loadTheme();
});

// Toggle del menú móvil
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('show');
        navbarToggle.classList.toggle('active');
    });
}

// Cerrar menú al hacer click en un enlace
const menuLinks = document.querySelectorAll('.navbar_links a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.classList.remove('show');
        navbarToggle.classList.remove('active');
    });
});

// Smooth scroll mejorado para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80; // Altura del navbar fijo
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Manejo del formulario de contacto
const formulario = document.getElementById('formulario');

if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validación simple
        if (nombre === '' || email === '' || mensaje === '') {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Mensaje de éxito
        showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
        
        // Limpiar formulario
        formulario.reset();
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación anterior si existe
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: 'bold',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        maxWidth: '300px'
    });
    
    // Colores según tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    } else {
        notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// CAMBIO DE TEMA (MODO OSCURO/CLARO)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setTheme(newTheme);
        saveTheme(newTheme);
    });
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeToggle.title = 'Cambiar a modo claro';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        themeToggle.title = 'Cambiar a modo oscuro';
    }
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Si hay tema guardado, usarlo
        setTheme(savedTheme);
    } else {
        // Si no hay tema guardado, detectar preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

// Escuchar cambios en la preferencia del sistema
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', function(e) {
        // Solo cambiar automáticamente si no hay tema guardado manualmente
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            if (e.matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    });
}

// Efecto de navbar al hacer scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    // Cambiar opacidad del navbar
    if (currentScrollY > 50) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(251, 250, 248, 0.98)';
        }
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(251, 250, 248, 0.95)';
        }
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollY = currentScrollY;
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', function(event) {
    const isClickInsideNav = navbarLinks.contains(event.target) || navbarToggle.contains(event.target);
    
    if (!isClickInsideNav && navbarLinks.classList.contains('show')) {
        navbarLinks.classList.remove('show');
        navbarToggle.classList.remove('active');
    }
});

// Destacar enlace activo en navegación
function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar_links a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--secondary-color)';
        link.style.backgroundColor = 'transparent';
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--third-color)';
            link.style.backgroundColor = 'rgba(96, 157, 81, 0.1)';
        }
    });
}

// Ejecutar highlight al hacer scroll
window.addEventListener('scroll', highlightActiveLink);

// Ejecutar highlight al cargar la página
document.addEventListener('DOMContentLoaded', highlightActiveLink);