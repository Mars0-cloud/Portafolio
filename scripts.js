AOS.init();

const form = document.getElementById('formulario');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value
    };

    try {
      const res = await fetch('http://localhost:3000/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Mensaje enviado con éxito!');
        form.reset();
      } else {
        alert('Error al enviar mensaje. Intenta más tarde.');
      }
    } catch (err) {
      alert('Error de conexión con el servidor.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navbar-toggle');
  const links = document.getElementById('navbar-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('show');
  });

  // Cierra el menú al hacer clic en un enlace (opcional)
  document.querySelectorAll('.navbar_links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('show');
    });
  });
});


