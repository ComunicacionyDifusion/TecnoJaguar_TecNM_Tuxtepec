//<!-- JavaScript -->
        // Redirigir a inicio 
document.getElementById('inicio').addEventListener('click', function () { 
    window.location.href = "index.html"; 
}); 

        // Mostrar/ocultar redes sociales al hacer clic en el botón "Contacto"
document.getElementById('contacto').addEventListener('click', function () {
    let socialBox = document.getElementById("socials");
    
    // Si está oculto, mostrarlo. Si está visible, ocultarlo
    if (socialBox.style.display === "none" || socialBox.style.display === "") {
        socialBox.style.display = "block";
    } else {
        socialBox.style.display = "none";
    }
});

// Agregar eventos a cada red social para abrir el enlace al hacer clic
document.getElementById('facebook').addEventListener('click', function () {
    window.open("http://www.facebook.com/tecnologicode.tuxtepec", "_blank");
});

document.getElementById('instagram').addEventListener('click', function () {
    window.open("https://www.instagram.com/tecnm_tuxtepec", "_blank");
});

document.getElementById('whatsapp').addEventListener('click', function () {
    window.open("https://wa.me/+522871104437", "_blank");
});

document.getElementById('youtube').addEventListener('click', function () {
    window.open("https://www.youtube.com/@tecnologiconacionaldemexic7515", "_blank");
});

document.getElementById('twitter').addEventListener('click', function () {
    window.open("https://x.com/ittuxtepec", "_blank");
});

document.getElementById('tiktok').addEventListener('click', function () {
    window.open("https://www.tiktok.com/@tecnmcampustuxtepec?lang=es", "_blank");
});

        // Mostrar chatbot
        document.getElementById('chatbot').addEventListener('click', function () {
            let chatBox = document.getElementById("chat-container");
            chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "block" : "none";
            document.getElementById('chat-input').focus();
        });

        function procesarMensaje() {
            let input = document.getElementById('chat-input');
            let mensaje = input.value.toLowerCase().trim();
            let chatBody = document.getElementById('chat-body');

            if (mensaje) {
                chatBody.innerHTML += `<div><b>Tú:</b> ${mensaje}</div>`;
                let respuestaEncontrada = "Lo siento, no entiendo la pregunta.";
        // Base de conocimiento con respuestas en botones desplegables
    const respuestas = [
    { keywords: ["hola", "buenas", "saludos"], respuesta: "¡Hola! Soy TecnoJaguar, ¿en qué puedo ayudarte? 😊" },
    { keywords: ["solicitud de fichas",], respuesta: `
    `},
    { keywords: ["nuevo ingreso", "proceso de nuevo ingreso","Ficha"], respuesta: `
        <div class="dropdown">
            <button class="btn btn-primary">Elige una opcion</button>
            <div class="dropdown-content">
                <a href="https://www.facebook.com/share/p/1HrDDd9Nnm/" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
                <a href="https://www.tuxtepec.tecnm.mx/procedimiento.html" target="_blank"><i class="fas fa-globe"></i> Aspirantes</a>
            </div>
        </div>` 
    },

    { keywords: ["contacto", "redes sociales"], respuesta: `
        <div class="dropdown">
            <button class="btn btn-primary">Siguenos en Nuestras Redes Sociales</button>
            <div class="dropdown-content">
                <a href="http://www.facebook.com/tecnologicode.tuxtepec" target="_blank"><i class="fab fa-facebook"></i>Facebook</a>
                <a href="https://wa.me/+522871104437" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="https://x.com/ittuxtepec" target="_blank"><i class="fab fa-twitter"></i> X (Twitter)</a>
                <a href="https://instagram.com/tecnm_tuxtepec" target="_blank"><i class="fab fa-instagram"></i>Instagram</a>
                <a href="https://tiktok.com/@tecnmcampustuxtepec" target="_blank"><i class="fab fa-tiktok"></i>TikTok</a>
                <a href="https://www.youtube.com/@tecnologiconacionaldemexic7515" target="_blank"><i class="fab fa-youtube"></i>YouTube</a>
            </div>
        </div>` },

    { keywords: ["transferencia", "deposito", "numero de cuenta"], respuesta: `
    Claro cualquier pago se puede hacer por medio de transferencia, deposito por medio de estas cuentas 
        <a href="metodo-de-pago.jpeg" download="Metodo-de-pago.jpeg">
            <img src="metodo-de-pago.jpeg" alt="Método de pago" width="200"></a>
        <br>Haz clic en la imagen para descargar.
        O puedes hacer el pago en la institucion.
        OJO: El pago es solo con tarjeta NO EFECTIVO, menos el ultimo dia del mes.
        ` },

    { keywords: ["carreras", "Gestion", "Civil", "bioquimica", "informatica", "electronica", "electromecanica","gestion empresarial","administracion", "desarrollo de aplicaciones", "contador", "sistemas computacionales"], respuesta: `
        <div class="dropdown">
            <button class="btn btn-primary"></button>
            <div class="dropdown-content">
                <a href="https://www.tuxtepec.tecnm.mx/civil.html" target="_blank"><i class="fas fa-hard-hat"></i> Ingeniería Civil</a>
                <a href="https://www.tuxtepec.tecnm.mx/sistemas.html" target="_blank"<i class="fas fa-laptop-code"></i>Ingenieria en Sistemas Computacionales</a>
                <a href="https://www.tuxtepec.tecnm.mx/electromecanica.html" target="_blank"><i class="fas fa-bolt"></i>Ingenieria en Electromecánica</a>
                <a href="https://www.tuxtepec.tecnm.mx/informatica.html" target="_blank"><i class="fas fa-laptop-code"></i>Ingenieria en Informática</a>
                <a href="https://www.tuxtepec.tecnm.mx/electronica.html" target="_blank"><i class="fas fa-microchip"></i> Electrónica</a>
                <a href="https://www.tuxtepec.tecnm.mx/gestion.html.html" target="_blank"><i class="fas fa-chart-line"></i> Gestión Empresarial</a>
                <a href="https://www.tuxtepec.tecnm.mx/bioquimica.html" target="_blank"><i class="fas fa-flask"></i> Ingeniería en Bioquímica</a>
                <a href="https://www.tuxtepec.tecnm.mx/desarrollo.html" target="_blank"><i class="fas fa-laptop-code"></i> Ingeniería en Desarrollo de Aplicaciones</a>
                <a href="https://www.tuxtepec.tecnm.mx/administracion.html" target="_blank"><i class="fas fa-user-tie"></i>Licenciatura en Administración</a>
                <a href="https://www.tuxtepec.tecnm.mx/contador.html" target="_blank"><i class="fas fa-calculator"></i>Licenciatura en Contador Público</a>
               
                Tambien contamos con 3 maestrias:
                    <a href="https://maestrias.tuxtepec.tecnm.mx/administracion" target="_blank"><i class="fas fa-"></i></a>
                    <a href="https://maestrias.tuxtepec.tecnm.mx/alimentos" target="_blank"><i class="fas fa-"></i>/a>
                    <a href="https://maestrias.tuxtepec.tecnm.mx/economia" target="_blank"><i class="fas fa-"></i>/a>
                
                    Y una especialidad:
                    <a href="https://www.tuxtepec.tecnm.mx/especialidades.html" target="_blank"><i class="fas fa-"></i>/a>
            </div>
        </div>` },
    { keywords: ["costos de nuevo ingreso", "cuotas de nuevo ingreso"], respuesta: `
    `},
    { keywords: ["pre-registro"], respuesta: ``},
    { keywords: ["adiós", "bye"], respuesta: "¡Hasta luego! 😊" },
    { keywords: ["gracias", "thanks"], respuesta: "¡De nada! 😊" }
];
                for (let item of respuestas) {
                    if (item.keywords.some(keyword => mensaje.includes(keyword))) {
                        respuestaEncontrada = item.respuesta;
                        break;
                    }
                }q
                setTimeout(() => {
                    chatBody.innerHTML += `<div><b>IA:</b> ${respuestaEncontrada}</div>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 500);
            }
            input.value = '';
            input.focus();
        }
// Evento para enviar mensaje con el botón
document.getElementById('send-btn').addEventListener('click', procesarMensaje);

// Evento para enviar mensaje al presionar Enter
document.getElementById('chat-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el salto de línea en input
        procesarMensaje();
    }
});
