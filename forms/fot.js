// Inicializar EmailJS
(function() {
    emailjs.init("08Ig30lJCUl6jbsOi"); // ← Pega aquí tu Public Key
})();

// Seleccionamos el formulario
const formulario = document.getElementById("registroForm");

// Escuchamos cuando se envía
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    emailjs.sendForm(
        "service_53el98i",     // Tu Service ID
        "template_t14awds",    // Tu Template ID
        this
    )
    .then(function() {
        alert("Confirmación enviada 🎉");
        formulario.reset();
    })
    .catch(function(error) {
        alert("Error al enviar ❌");
        console.log("ERROR:", error);
    });
});