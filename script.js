// --- FUNCIÓN PRINCIPAL AL HACER CLIC ---
function mostrarDetalle() {
    const mensajeDiv = document.getElementById("mensaje");
    const musica = document.getElementById("musica-fondo");
    const boton = document.getElementById("btn-sorpresa");

    // 1. Escribir el mensaje dinámicamente (puedes editarlo aquí)
    mensajeDiv.innerHTML = 
        "Mi amor eterno ❤️,<br><br>" +
        "Hoy quiero sorprenderte con este detalle simbólico. Como dice la canción, aquí tienes <span class='resaltado'>20 rosas</span> diseñadas especialmente para ti.<br><br>" +
        "Cada una representa un deseo de felicidad, un momento hermoso compartidos y la promesa de un futuro juntos cumpliendo nuestros sueños. Gracias por ser la <span class='resaltado'>mujer increíble</span> que me enamora cada día.<br><br>" +
        "Eres el regalo más grande de mi vida.<br><br>" +
        "<span class='resaltado'>Te amo muchísimo. 🌹</span>";

    // 2. Mostrar el contenedor del mensaje con la animación CSS
    mensajeDiv.style.display = "block";

    // 3. Ocultar o cambiar el botón
    boton.style.display = "none"; 

    // 4. Intentar reproducir música (los navegadores modernos requieren un clic del usuario)
    musica.play().catch(error => {
        console.log("La reproducción automática de música fue bloqueada por el navegador. Se necesita interacción.");
    });

    // 5. Empezar la lluvia de corazones y rosas de forma más intensa al principio
    for(let i = 0; i < 15; i++) {
        setTimeout(crearElementosFlotantes, i * 150);
    }
}


// --- CREAR ELEMENTOS FLOTANTES (CORAZONES Y ROSAS) ---
function crearElementosFlotantes() {
    const elementos = ["❤️", "🌹", "💖", "🌸"]; // Variedad
    const elemento = document.createElement("div");
    
    elemento.classList.add("elemento-flotante");
    
    // Elegir icono aleatorio
    elemento.innerHTML = elementos[Math.floor(Math.random() * elementos.length)];
    
    // Posición horizontal aleatoria (0 a 100vw)
    elemento.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio (15px a 35px)
    elemento.style.fontSize = Math.random() * 20 + 15 + "px";
    
    // Duración de caída aleatoria (más dinámico: 5s a 10s)
    const duracion = Math.random() * 5 + 5;
    elemento.style.animationDuration = duracion + "s";
    
    // Opacidad inicial aleatoria
    elemento.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(elemento);

    // Eliminar el elemento después de que termine la animación
    setTimeout(() => {
        elemento.remove();
    }, duracion * 1000);
}

// Generar elementos flotantes continuamente cada 500ms
setInterval(crearElementosFlotantes, 500);