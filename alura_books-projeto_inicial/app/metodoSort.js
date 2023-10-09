let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarPorPreco.addEventListener('click', ordenarLivrosPreço)

function ordenarLivrosPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) 
    exibirLivrosNaTela(livrosOrdenados)
}