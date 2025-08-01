const notas = [10, 7.4, 8, 9.5, 9, 5.9, 7, 7.7, 5, 6]

let total = 0

for (let nota of notas) {
    total += nota
}

const media = (total / notas.length).toFixed(2)

console.log(`A média é: ${media}\n`)

for (let index in notas) {
    console.log(`[Índice: ${index}] - [Nota: ${notas[index]}]`)
}