var altura = 0
var largura = 0

// Recuperando o tamanho da pagina para definir a dimensão do jogo
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    // Gerar posições aleatórias para o mosquito com base no taanho disponível da tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criando o elemento (mosquito) em HTML
    var mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

posicaoRandomica()