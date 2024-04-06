// para borrar
function mezclarArray(array) {
    // Creamos una copia del array para no modificar el original
    const newArray = array.slice();
    
    // Función de comparación para sort(), devuelve un número aleatorio entre -0.5 y 0.5
    function compararAleatoriamente() {
        return Math.random() - 0.5;
    }
    
    // Utilizamos sort() con nuestra función de comparación personalizada
    newArray.sort(compararAleatoriamente);
    
    return newArray;
}

// Array de ciudades ordenadas alfabéticamente
const ciudades=[
    'Zaragoza', 'Barcelona',
    'Bilbao',   'Granada',
    'Madrid',   'Alicante',
    'Málaga',   'Valencia',
    'Sevilla',  'Murcia'
  ]
const ciudadesOrdenadas = ["Barcelona", "Bilbao", "Madrid", "Málaga", "Sevilla", "Valencia", "Zaragoza", "Alicante", "Granada", "Murcia"];

// Mostramos las ciudades ordenadas
console.log("Ciudades ordenadas:");
console.log(ciudadesOrdenadas);

// Mezclamos las ciudades
const ciudadesDesordenadas = mezclarArray(ciudadesOrdenadas);

// Mostramos las ciudades desordenadas
console.log("Ciudades desordenadas:");
console.log(ciudadesDesordenadas);
