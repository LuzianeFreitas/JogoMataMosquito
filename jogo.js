var altura = 0
var largura = 0

// Recuperando o tamanho da pagina para definir a dimensão do jogo
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo()