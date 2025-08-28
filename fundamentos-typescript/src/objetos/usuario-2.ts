import {Usuario} from './usuario'
import { statusUsuario } from './status-usuario'

let usuario1: Usuario = {
    id: '123',
    nome: 'Xuxa da Silva',
    email: 'xuxadasilva@gmail.com',
    ativo: statusUsuario.ATIVO
}

console.log(usuario1.nome)
console.log(usuario1.email)
console.log(usuario1.ativo)
