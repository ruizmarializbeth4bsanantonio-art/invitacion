const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
let estaAbierto = false;

document.addEventListener("click", (e) => {
    // Click en el sobre o corazón (pero no en la carta)
    if ((e.target.closest(".sobre") || e.target.closest(".corazon")) && !e.target.closest(".carta")) {
        
        if (!estaAbierto) {
            // ABRIR
            envoltura.classList.add("abierto");
            envoltura.classList.add("desactivar-sobre");
            
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                carta.classList.add("abierta");
                estaAbierto = true;
            }, 500);
        } else {
            // CERRAR
            carta.classList.remove("mostrar-carta");
            carta.classList.remove("abierta");
            
            setTimeout(() => {
                envoltura.classList.remove("abierto");
                envoltura.classList.remove("desactivar-sobre");
                estaAbierto = false;
            }, 300);
        }
    }
});