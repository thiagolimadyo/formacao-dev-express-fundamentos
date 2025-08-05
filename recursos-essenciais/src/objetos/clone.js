// Clone de Objetos com operador SPREAD

const usuario = Object.freeze({
    id: 123,
    nome: 'Xuxa da Silva',
    email: 'xuxa@email.com',
    admin: false
})
console.log(usuario)

const novoUsuario = { ...usuario, admin: true }
console.log(novoUsuario)

const novoUsuario2 = Object.freeze({ ...usuario, nome: 'Xuxa da Silva Jardim' })
console.log(novoUsuario2)

// Clone de Arrays com operador SPREAD

const numeros = [1, 2, 3]
console.log(numeros)

const novoNumeros = [...numeros, 4, 5, 6]
console.log(novoNumeros)

numeros[1] = 1.1
novoNumeros[1] = 1.2
console.log(numeros, novoNumeros)