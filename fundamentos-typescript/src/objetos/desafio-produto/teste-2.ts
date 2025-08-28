import { Carrinho } from "./carrinho";
import { listaDeProdutos } from "./lista-produtos";

let carrinho: Carrinho = {
    items: [
        {
            produto: listaDeProdutos[0],
            quantidade: 10
        },
        {
            produto: listaDeProdutos[1],
            quantidade: 10
        },
        {
            produto: listaDeProdutos[2],
            quantidade: 10
        }
    ] 
}

let valorTotal = 0

for(let item of carrinho.items){
    valorTotal += (item.produto.preco * item.quantidade)
}

carrinho.items.forEach(item=> {
    console.log(item)
})

console.log(`O valor total da compra é R$${valorTotal}`)

