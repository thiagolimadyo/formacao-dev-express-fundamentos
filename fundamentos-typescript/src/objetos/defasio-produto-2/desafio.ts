import { ItemCarrinho } from "./item-carrinho";
import { Produto } from "./produto";

let catalogo: Produto[] = [
    {id: 1, nome: 'Notebook Gamer DELL G5', preco: 5000.0, marca: 'DELL'},
    {id: 2, nome: 'PlayStation 4 PRO', preco: 2000.0, marca: 'Sony' },
    {id: 3, nome: 'Surface Laptop', preco: 20000.0, marca: 'Microsoft'},
    {id: 4, nome: 'Iphone 14', preco: 4000.0, marca: 'Apple'},
    {id: 5, nome: 'Processador i9 - 10900K', preco: 3000.0, marca: 'Intel'}
]

// Defafio 1

let valorTotalDosProdutos = 0

for(let produto of catalogo){
    valorTotalDosProdutos += produto.preco
}

console.log(`O valor total dos produtos do catalogo é: R$ ${valorTotalDosProdutos}.`)

// Desafio 2

const carrinho: ItemCarrinho[] = [
    {produto: catalogo[2], quantidade: 2},
    {produto: catalogo[3], quantidade: 2}
]

let totaisPorItem = carrinho.map(item=> {
    return item.produto.preco * item.quantidade
})

let precoTotalDoCarrinho = 0

for(let totalIndividual of totaisPorItem){
    precoTotalDoCarrinho += totalIndividual
}
console.log(`O valor total do carrinho é R$ ${precoTotalDoCarrinho}.`)