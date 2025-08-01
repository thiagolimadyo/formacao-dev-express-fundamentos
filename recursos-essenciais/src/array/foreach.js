const aprovados = [
    'Xuxa da Silva',
    'Joana Dark',
    'Pedro Álvares Cabral',
    'Theodoro da Fonseca',
    'John Snow',
    'Princesa Izabel'
]

// for (let index = 0; index < aprovados.length; index++) {
//     console.log(aprovados[index])
// }


console.log('CANDIDATOS APROVADOS\n')

const exibirNome = nome => console.log(`NOME: ${nome}`)
aprovados.forEach(exibirNome)

const exibirElemento = (nome, index, aprovados) => console.log(`ÍNDICE: ${index}, NOME: ${nome}`)
aprovados.forEach(exibirElemento)

aprovados.forEach(nome => console.log(`Nome: ${nome}`))