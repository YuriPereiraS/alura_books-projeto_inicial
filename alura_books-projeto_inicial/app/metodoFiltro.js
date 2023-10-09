const botoes = document.querySelectorAll('.btn')
 botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const categoriaBtm = document.getElementById(this.id)
    const categoria = categoriaBtm.value 
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarDisponibilidade() : filtrarCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponiveis') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosNaTela(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoComValorTotalDeLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}