import { novoID } from "./id-produto";
import { Produto } from "./produto";

export const listaDeProdutos: Produto[] = []

let macbook: Produto = {
    nome: 'MacBook White 2010',
    preco: 499.00,
    marca: 'Apple' 
}

let mouse: Produto = {
    nome: 'Magic Mouse',
    preco: 99.00,
    marca: 'Apple'
}

let teclado: Produto = {
    nome: 'Teclado',
    preco: 199.00,
    marca: 'Apple'
}

listaDeProdutos.push({id:novoID(), ...macbook})
listaDeProdutos.push({id:novoID(), ...mouse})
listaDeProdutos.push({id: novoID(), ...teclado})
