const nota = +(Math.random() * 10).toFixed(2)
let conceito = ''

switch (Math.ceil(nota)) {
    case 10:
    case 9:
        conceito = 'A'
        break
    case 8:
    case 7:
        conceito = 'B'
        break
    case 6:
    case 5:
        conceito = 'C'
        break
    case 4:
    case 3:
        conceito = 'D'
        break
    default:
        conceito = 'E'
}

console.log(`A nota ${Math.ceil(nota)} tem o conceito ${conceito}`)
console.log('Fim')

// console.log(Math.ceil(nota))
// console.log(Math.floor(nota))