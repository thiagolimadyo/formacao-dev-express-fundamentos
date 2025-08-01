const id = 102394
const nome = 'Xuxa da Silva'
const email = 'xuxa.silva@empresa.com'
const ativo = true

function alterarUsuario (){
    console.log('Usuário alterado...')
}

const usuario ={ id, nome, email, ativo, alterarUsuario }

usuario.alterarUsuario()

console.log(usuario)

export {id, nome, email, ativo, alterarUsuario}