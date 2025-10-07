var livros = [
    {
        "titulo": "Livro A",
        "autor": "Autor A",
        "n_paginas": 100
    },
    {
        "titulo": "Livro B",
        "autor": "Autor B",
        "n_paginas": 200
    }
];

livros.forEach( (livro, i) => {
    if(livro.titulo === "Livro B") {
        console.log(livro);
    }
} );

livros.forEach( (livro, i) => {
    if(livro.titulo === "Livro B") {
        livros.splice(i, 1);
    }
} );

console.log(livros);

var novo = {
    "titulo":"Livro C",
    "autor":"Autor C",
    "n_paginas":300
};

livros.push(novo);

livros.forEach( (livro, indice) => {
    if(livro.titulo === "Livro A") {
        livro.autor = "Bacchin, Robson";
    }
} );

console.log(livros);