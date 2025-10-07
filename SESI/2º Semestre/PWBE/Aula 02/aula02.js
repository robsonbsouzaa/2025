var numeros = [10, 20, 30, 40, 50];

numeros.forEach( (numero, indice) => {
    if(numero === 30) {
        console.log(indice);
        numeros[indice] = 80;
    }
} );

console.log(numeros);

// function imprime(numero, indice) {
//     console.log(indice + " - " + numero);
// }

var partidas = [
    {
        "id":1,
        "data":"15/08/2025 18:00",
        "duracao":2,
        "pontos":0,
        "times":["Time A", "Time B"]
    },
    {
        "id":2,
        "data":"16/08/2025 09:00",
        "duracao":3,
        "pontos":0,
        "times":["Time C", "Time D"]
    }
];

partidas.forEach( (partida, i) => {
    if(partida.id === 2) {
        partida.data = "17/08/2025 10:00";
        console.log(partida);
    }
} );