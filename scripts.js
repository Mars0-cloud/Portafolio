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

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'TU_CORREO@gmail.com',
      pass: 'TU_APP_PASSWORD' // Contraseña de aplicación, no tu clave normal
    }
  });

  const mailOptions = {
    from: email,
    to: 'matias20.rs@gmail.com',
    subject: 'Mensaje desde tu formulario web',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje:\n${mensaje}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Mensaje enviado correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el mensaje.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
