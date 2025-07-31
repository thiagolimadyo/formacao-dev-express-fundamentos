const coisas = ['texto', 3.14, true, [1, 2, 3], { nome: 'Xuxa', sobrenome: 'da Silva' }]

// Adicionando elementos no Array
coisas.push('Última posição')
coisas.unshift('Primeira posição')

console.log(coisas)

// Removendo elementos do Array
console.log('REMOVENDO', coisas.pop()) // remove a última posição
console.log('REMOVENDO', coisas.shift()) // remove a primeira posição
console.log(coisas)