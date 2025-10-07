function soma(a, b) {
    let res = a + b;
    //return res;
    console.log(res);
}
//console.log("Soma = " + soma(2, 10));
//soma(5, 5);

const subtrai = (a, b) => {
    console.log(a - b);
};

subtrai(5, 7);

var carros = ["Celta", "Gol", "Kzin", "Uno Escada", "147", "Fusca"];

const imprime = (valor) => {
    console.log("Modelo - " + valor);
}

carros.forEach( (carro) => {
    if(carro == "Uno Escada") {
        console.log("Encontrei");
    }
} );

// nascimento, sobrenome
var usuarios = [
    {
        "nome": "Fulano",
        "matricula": 1234,
        "telefone": "(11) 9 1848-3265",
        "nascimento": 1857,
        "sobrenome": " da Silva"
    }, 
    {
        "nome": "Ciclano",
        "matricula": 7894,
        "telefone": "(12) 9 7846-1345",
        "nascimento": 1929,
        "sobrenome": " da Silva"
    }, 
    {
        "nome": "Beltrano",
        "matricula": 4567,
        "telefone": "(13) 9 4567-7563",
        "nascimento": 1721,
        "sobrenome": " da Silva"
    }
];

usuarios.forEach( (usuario) => {
    //7894
    if(usuario.matricula === 7894) {
        let idade = 2025 - usuario.nascimento;
        console.log("Nome : " + usuario.nome + usuario.sobrenome);
        console.log("Idade : " + (2025 - usuario.nascimento));
    }
});