import { funcionesLibreria } from "./funcionesLibreria.js";
import { CANTIDAD_ADICIONAL, nJ1, nBanca, panel, botonPedirCarta, 
    botonPlantarse } from "./juego.js";
    
export class Carta {
    constructor(nombre, palo, valor) {
        this.nombre = nombre;
        this.palo = palo;
        this.valor = valor;
    }
}

export class Baraja {
    constructor() {
        this.cartas = [];
        const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
        for (let palo of palos) {
            for (let i = 1; i <= 10; i++) {
                let valor = (i > 7)? 0.5 : i;
                let nombre = (i === 1) ? `As` : (i === 8) ? `Sota` : (i === 9) ? 'Caballo' :
                 (i === 10) ? 'Rey' : i.toString();
                this.cartas.push(new Carta(`${nombre} de ${palo}`, palo, valor));
            }
        }
        this.barajar();
        //console.log(this.cartas);
    }

    barajar() {
        this.cartas.sort(() => Math.random() - 0.5);
    }

    sacarCarta() {
        return this.cartas.pop();
    }
}

export class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.mano = [];
    }

    recibirCarta(carta) {
        this.mano.push(carta);
    }
    
    mostrarCartas(){
        nJ1.innerHTML='';
        this.mano.forEach(carta =>{
            funcionesLibreria.escribirDOM(nJ1, carta.nombre);
        })
    }
/*
    realizarApuesta(apuesta) {
        if (apuesta > 0) {
            this.apuesta = apuesta;
            console.log(`${this.nombre} ha realizado una apuesta de ${apuesta}.`);
        } else {
            console.log("La apuesta debe ser mayor que 0.");
        }
    }
*/
    calcularPuntuacion() {
        let puntuacion = 0;
        for (let carta of this.mano) {
            puntuacion += carta.valor;
        }
        return puntuacion;
    }
}

export class Banca extends Jugador {
    constructor() {
        super("Banca");
    }
    mostrarCartas(){
        nBanca.innerHTML='';
        this.mano.forEach(carta =>{
            funcionesLibreria.escribirDOM(nBanca, carta.nombre);
        })
    }
    mostrarCartaTapada(){
        nBanca.innerHTML='';
        funcionesLibreria.escribirDOM(nBanca, "****CARTA TAPADA****")
    }
    decidirPedirCarta(puntuacionJugador) {
        // Lógica para decidir si la Banca pide una carta adicional
    }
}

export class Juego {
    constructor(nombreJugador) {
        this.baraja = new Baraja();
        //console.log(this.baraja.cartas);
        this.banca = new Banca();
        //this.jugador1 = new Jugador("Jugador1");
        this.jugador1 = new Jugador(nombreJugador);
        this.apuesta = 0;
    }

    repartirCartas() {
        this.jugador1.recibirCarta(this.baraja.sacarCarta());
        this.banca.recibirCarta(this.baraja.sacarCarta());
    }

    iniciarJuego() {
        this.repartirCartas();
        // logica para mostrar las cartas
        this.jugador1.mostrarCartas();
        this.banca.mostrarCartaTapada();
        this.jugador1
        // Lógica para que el jugador1 haga una apuesta
        funcionesLibreria.realizarApuesta(nJ1, function(apuesta){
            console.log("apuesta: ", apuesta); 
            const texto=`Cantidad apostada: ${apuesta}`;
            funcionesLibreria.escribirDOM(panel, texto )
            
            // logica para pedir carta o plantarse
            let continuar=true;
            // Desocultar los botones
            //while(continuar){
                botonPedirCarta.removeAttribute("hidden");
                botonPlantarse.removeAttribute("hidden");
            //}
         
            
         });
    }

    jugador1PedirCarta() {
        console.log("llega");
        const cartaNueva = this.baraja.sacarCarta();
        this.jugador1.recibirCarta(cartaNueva);
        // Lógica para actualizar la interfaz gráfica y mostrar la carta
    }

    jugador1Plantarse() {
        // Lógica para que la Banca juegue su turno y determinar ganador
    }
}


