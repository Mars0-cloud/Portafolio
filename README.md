# 🚀 Portafolio Personal - Matías Riquelme

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📝 Descripción

Mi portafolio personal como desarrollador full stack, donde muestro mis proyectos, habilidades y experiencia. Diseñado con un enfoque moderno, responsivo y con atención al detalle.

**🌐 [Ver en vivo](https://mars0-cloud.github.io/Portafolio/)**

## ✨ Características

### 🎨 Diseño y UX
- **Diseño responsive** que se adapta a todos los dispositivos
- **Modo oscuro/claro** con detección automática del sistema
- **Navegación suave** entre secciones
- **Animaciones elegantes** con AOS (Animate On Scroll)
- **Interfaz moderna** con efectos hover y transiciones

### 🛠️ Funcionalidades
- **Cambio de tema dinámico** con persistencia en localStorage
- **Logos adaptativos** según el tema seleccionado
- **Formulario de contacto** con validación
- **Notificaciones personalizadas** para feedback del usuario
- **Menú móvil responsive** con animaciones
- **Highlight de sección activa** en la navegación

## 🏗️ Estructura del Proyecto

```
Portafolio/
├── index.html              # Estructura principal
├── styles.css              # Estilos y tema
├── scripts.js              # Funcionalidad JavaScript
├── assets/
│   ├── img/
│   │   ├── logo-white.png   # Logo para tema claro
│   │   ├── logo-black.png   # Logo para tema oscuro
│   │   ├── perfil.png       # Foto de perfil
│   │   ├── foto-piscina.jpg # Foto casual
│   │   ├── proyecto-1.png   # Imagen del proyecto
│   │   └── default.webp     # Imagen placeholder
│   ├── videos/
│   │   └── Video-Proyecto-1.mp4  # Demo del proyecto
│   └── cv - Matías Riquelme.pdf   # Curriculum vitae
└── README.md               # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con variables CSS y Grid/Flexbox
- **JavaScript ES6+** - Interactividad y funcionalidades dinámicas

### Librerías y APIs
- **[AOS](https://github.com/michalsnik/aos)** - Animaciones al hacer scroll
- **[Font Awesome](https://fontawesome.com/)** - Iconografía
- **[Bootstrap 5.3.8](https://getbootstrap.com/)** - Componentes CSS

### Herramientas de Desarrollo
- **Git & GitHub** - Control de versiones
- **GitHub Pages** - Hosting y despliegue automático

## 📱 Secciones

### 🏠 Inicio
- Presentación personal
- Enlaces a redes sociales y CV
- Foto de perfil con efectos hover

### 💼 Proyectos
- **Planeta Marsiano**: Biblioteca de películas con Django y API de TMDb
- Proyectos futuros en desarrollo
- Enlaces a demos y código fuente

### 🛠️ Habilidades
Organizadas en categorías:

**Lenguajes de Programación:**
- HTML5, CSS3, JavaScript
- Python, SQL

**Librerías y Frameworks:**
- React, Django, Bootstrap
- Node.js, Git, MySQL

### 👨‍💻 Sobre Mí
- Historia personal como desarrollador
- Pasiones e intereses
- Motivaciones y objetivos

### 📧 Contacto
- Formulario funcional con validación
- Enlaces directos a redes sociales
- Información de contacto

## 🌙 Modo Oscuro

El portafolio incluye un sistema inteligente de temas:

- **Detección automática** de la preferencia del sistema operativo
- **Persistencia** de la elección del usuario
- **Logos adaptativos** que cambian según el tema
- **Transiciones suaves** entre modos
- **Botón flotante** fácilmente accesible

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1000px
- **Tablet**: 768px - 1000px  
- **Mobile**: < 768px
- **Mobile pequeño**: < 480px

### Características Responsive
- Grid adaptativo para habilidades
- Menú hamburguesa en móvil
- Imágenes y tipografía escalables
- Layout flexible con CSS Grid/Flexbox

## 🚀 Instalación y Uso

### Clonar el Repositorio
```bash
git clone https://github.com/Mars0-cloud/Portafolio.git
cd Portafolio
```

### Ejecutar Localmente
1. Abre `index.html` en tu navegador, o
2. Usa un servidor local como Live Server en VSCode

### Personalización
1. **Contenido**: Modifica el texto en `index.html`
2. **Estilos**: Ajusta colores en `:root` dentro de `styles.css`
3. **Imágenes**: Reemplaza las imágenes en `assets/img/`
4. **Proyectos**: Actualiza la sección de proyectos con tus trabajos

## 🔧 Configuración

### Variables CSS Principales
```css
:root {
    --primary-color: #fbfaf8;    /* Fondo principal */
    --secondary-color: #000;     /* Texto principal */
    --third-color: #609d51;      /* Color de acento */
    --fourth-color: #f0f0f0;     /* Fondo secundario */
}
```

### Modo Oscuro
```css
[data-theme="dark"] {
    --primary-color: #1a1a1a;
    --secondary-color: #ffffff;
    --third-color: #7bb96b;
    --fourth-color: #2d2d2d;
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork del proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

### Performance
- Imágenes optimizadas para web
- CSS minificado para producción
- JavaScript con throttling para eventos scroll
- Lazy loading implementado donde es necesario

### SEO y Accesibilidad
- HTML semántico
- Meta tags apropiados
- Alt text en todas las imágenes
- Contraste adecuado en ambos temas
- Navegación por teclado funcional

## 🐛 Problemas Conocidos

- [ ] El formulario de contacto es simulado (no envía emails realmente)
- [ ] Algunas animaciones pueden ser intensas en dispositivos de gama baja

## 📈 Roadmap

### Próximas Mejoras
- [ ] Integración con servicio de email real
- [ ] Blog personal con CMS
- [ ] Sección de testimonios
- [ ] Más proyectos y casos de estudio
- [ ] Implementación de tests
- [ ] PWA (Progressive Web App)

## 📞 Contacto

**Matías Riquelme** - Desarrollador Full Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matías20-rs/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mars0-cloud)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:matias20.rs@gmail.com)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐

*Hecho con ❤️ por [Matías Riquelme](https://github.com/Mars0-cloud)*
