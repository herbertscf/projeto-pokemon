
const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagenBotaoTrocaDeTema = document.querySelector(".imagen-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagenBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {  
        imagenBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }


})