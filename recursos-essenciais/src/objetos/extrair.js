const carrinho = {
    qtdeItens: 3,
    total: 13234.90,
    itens: [{}, {}, {}]
}

const { qtdeItens, total } = carrinho

console.log(`Quantidade de Itens: ${qtdeItens}, Valor Total ${total}`)

const nomeCompleto = ['Xuxa', 'da', 'Silva']

const [primeiroNome, , ultimoNome] = [...nomeCompleto]
console.log(primeiroNome, ultimoNome)