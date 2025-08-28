import { listaDeProdutos } from "./lista-produtos";

let precoTotal = 0

for(let produto of listaDeProdutos){
    precoTotal += produto.preco
}

listaDeProdutos.forEach(produto=>{
    console.log(`Produto: ${produto.nome} - Preço: R$${produto.preco}`)
})

console.log(`O valor total dos produtos é R$${precoTotal}`)