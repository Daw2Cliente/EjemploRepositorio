function pedirNombreJugador(lugar, callback) {
    // Crear el formulario
    const form1 = document.createElement('form');
    
    // Crear el input
    const inputNombre = document.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('placeholder', 'Escribe tu nombre');

    // Crear el botón
    const boton = document.createElement('button');
    boton.innerText = 'Jugar';

    // Agregar el input y el botón al formulario
    form1.appendChild(inputNombre);
    form1.appendChild(boton);

    // Agregar el formulario al lugar especificado en el documento
    lugar.appendChild(form1);

    // Agregar un event listener al botón para manejar el clic
    boton.addEventListener('click', (evento) => {
        // Evitar que el formulario se envíe
        evento.preventDefault();
        // Obtener el valor del input
        let nombre = inputNombre.value;
        if (nombre==='') nombre='Jugador 1'
        // Ejecutar la función de callback pasando el nombre como argumento
        callback(nombre);
        form1.remove();
    });
}

function escribirDOM(lugar, contenido){
    const parrafo=document.createElement('p');
    parrafo.innerText=contenido;
    lugar.appendChild(parrafo);
}

function realizarApuesta(lugar,callback){
     // Crear el formulario
     const form1 = document.createElement('form');
    
     // Crear el input
     const inputApuesta = document.createElement('input');
     inputApuesta.setAttribute('type', 'number');
     //inputApuesta.setAttribute('min', '9');
     inputApuesta.setAttribute('placeholder', 'Cantidad a apostar');
    // Crear el botón
    const boton = document.createElement('button');
    boton.innerText = 'Apostar';

    // Agregar el input y el botón al formulario
    form1.appendChild(inputApuesta);
    form1.appendChild(boton);

    // Agregar el formulario al lugar especificado en el documento
    lugar.appendChild(form1);

    // Agregar un event listener al botón para manejar el clic
    boton.addEventListener('click', (evento) => {
        // Evitar que el formulario se envíe
        evento.preventDefault();
        // Obtener el valor del input
        let apuesta = inputApuesta.value;
        // Ejecutar la función de callback pasando el nombre como argumento
        callback(apuesta);
        form1.remove();
    });
}

function eventosBotones(juego){
    
    const botonPedirCarta = document.getElementById("pedir-carta");
    const botonPlantarse = document.getElementById("plantarse");

    // Manejar evento clic para pedir carta
    botonPedirCarta.addEventListener("click", function() {
        console.log(juego);
        juego.jugador1PedirCarta(); // Llama al método correspondiente en Juego
    });

    // Manejar evento clic para plantarse
    botonPlantarse.addEventListener("click", function() {
        juego.jugador1Plantarse(); // Llama al método correspondiente en Juego
    });
}

function mostrarBotones(){
    // Desocultar los botones
    botonPedirCarta.removeAttribute("hidden");
    botonPlantarse.removeAttribute("hidden");
}

export const funcionesLibreria={
    pedirNombreJugador,
    escribirDOM,
    realizarApuesta,
    eventosBotones,
    mostrarBotones,
};