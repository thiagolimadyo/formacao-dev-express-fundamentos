// Objeto Literal => chave : "valor"

const usuario = {
    id: 1009,
    nome: 'Joana Dark',
    email: 'joana.dark@gmail.com',
    senha: '#$!.qe3j.de983k04l',
    ativo: true
}

console.log(usuario["nome"])
console.log(usuario.nome)

usuario.ativo = false

console.log(usuario)

usuario.nacionalidade = 'Americano'
Object.freeze(usuario)

usuario.ativo = true


console.log(usuario)
