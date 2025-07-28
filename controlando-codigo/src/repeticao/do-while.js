// O WHILE é indicado para uma quantidade INDETERMINADA de iterações

let nota = 0

do {
    console.log(`Nota ${nota}. Você precisa ser aprovado com louvor!`)
    nota = +(Math.random() * 10).toFixed(2)
} while (nota < 9)

console.log(`Nota ${nota}. Você foi aprovado com Louvor!!!!`)