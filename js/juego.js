// Ejemplo de uso del juego
// import { Carta } from "./clase7ymedia.js";
// import { Baraja } from "./clase7ymedia.js";
// import { Jugador } from "./clase7ymedia.js";
// import { Banca } from "./clase7ymedia.js";
import { Juego } from "./clase7ymedia.js";
import { funcionesLibreria } from "./funcionesLibreria.js";
export const CANTIDAD_ADICIONAL=10;
export const nBanca=document.getElementById('naipesBanca');
export const nJ1= document.getElementById('naipesJ1');
export const panel=document.getElementById('panel');
// Obtener los botones por su ID
export const botonPedirCarta = document.getElementById("pedir-carta");
export const botonPlantarse = document.getElementById("plantarse");




//borramos DOM
nBanca.innerHTML='Cartas en la mano';
nJ1.innerHTML='Cartas en la mano';

funcionesLibreria.escribirDOM(panel, `Cantidad Adicional: ${CANTIDAD_ADICIONAL}`)


funcionesLibreria.pedirNombreJugador(nJ1, function(nombre) {
    //console.log('El nombre introducido es:', nombre);
    // Aquí puedes hacer lo que quieras con el nombre, como iniciar el juego
    document.getElementById('nombreJ1').innerText=nombre;
    const juego = new Juego(nombre);
    console.log(juego);
    console.log(juego.banca.mano);
    // asigno los eventosd a los botones ocultos
    // hayque desolutar los botones para que funcionen los eventos clic
    funcionesLibreria.eventosBotones(juego);

    juego.iniciarJuego();
    //console.log(juego.jugador1.nombre);
});
/*
funcionesLibreria.realizarApuesta(nJ1, function(apuesta){
    console.log("apuesta: ", apuesta); 
    const texto=`Cantidad apostada: ${apuesta}`;
    funcionesLibreria.escribirDOM(panel, texto )
 
 });
*/
funcionesLibreria.eventosBotones();
 window.onload=()=>{
    console.log('ya');
}