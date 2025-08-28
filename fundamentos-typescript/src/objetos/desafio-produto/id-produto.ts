import { listaDeProdutos } from "./lista-produtos";

export function novoID(){
    return listaDeProdutos.length + 1
}