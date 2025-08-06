(function(){
    const tagH1 = document.querySelector('h1')
    console.log(tagH1.textContent)

    const conteudo = document.querySelector('.conteudo')
    console.log(conteudo)

    const itensLista = document.querySelectorAll('li')
    console.log(itensLista)

    const primeiroLugar = document.querySelector('[primeiro]')
    console.log(primeiroLugar.textContent)

    const tituloConteudo = document.querySelector('#titulo-conteudo')
    console.log(tituloConteudo.textContent)

    const tituloConteudo2 = document.querySelector('div > span')
    console.log(tituloConteudo2.textContent)
})()

function adicionarItem(){
    const novoElemento = document.createElement('li')
    novoElemento.setAttribute('novo', 'true')
    novoElemento.classList.add('vermelho')
    novoElemento.textContent = 'John Lenon'

    const lista = document.querySelector('ul[aprovados]')
    lista.appendChild(novoElemento)
}

function removerItensNovos(){
    const lista = document.querySelector('ul[aprovados]')

    const novosItens = document.querySelectorAll('li[novo]')
    novosItens.forEach(item => {
        lista.removeChild(item)
    })
}