const produto = Object.freeze({
    id: 3,
    nome: 'Caneta BIC Azul',
    valor: 5.89,
    categoria: 'Escritório'
})

produto.id = 10
produto.ativo = true

console.log(produto)