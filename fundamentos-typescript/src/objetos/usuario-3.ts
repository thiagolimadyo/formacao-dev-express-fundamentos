import { statusUsuario } from "./status-usuario";
import { Usuario } from "./usuario";

let novoUsuario: Partial<Usuario> = {
    nome: 'Joana Dark',
    ativo: statusUsuario.ATIVO
}

console.log(novoUsuario)