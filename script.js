const botao = document.getElementById("btn-pronta");
const carta = document.getElementById("primeira-carta");

botao.addEventListener("click", function() {
    carta.style.display = "block";
});

const texto = "bem-vinda, meu amor ❤️";
const titulo = document.getElementById("titulo");

let i = 0;

function escrever(){
    if(i < texto.length){
        titulo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
    }
}

titulo.innerHTML = "";
escrever();

setTimeout(() => {
    const botao = document.getElementById("btn-pronta");
    botao.classList.remove("esconder");
    botao.classList.add("mostrar");
}, 2500);

const entrar = document.getElementById("entrar");
const entrada = document.querySelector(".entrada");
const conteudo = document.querySelector(".container");

entrar.addEventListener("click", () => {
    entrada.classList.add("saindo");

setTimeout(() => {
    entrada.style.display = "none";
   conteudo.classList.remove("escondido");
conteudo.classList.add("revelar");
}, 1000);
});