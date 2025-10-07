const imagens = [
    "url('imagens/imagem.gif')",
    "url('imagens/imagem2.gif')",
    "url('imagens/imagem3.gif')"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundImage = imagens[randomNumber];
    color.textContent = `Imagem ${randomNumber + 1}`;
});

function getRandomNumber(){
    return Math.floor(Math.random() * imagens.length);
}

