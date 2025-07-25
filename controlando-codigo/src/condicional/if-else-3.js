const nota = (Math.random() * 10).toFixed(2)

if (nota >= 9) {
    console.log('Quadro de honra!')
    console.log('Ganhou 35% de desconto!')
} else if (nota >= 7) {
    console.log('Aprovado!')
    console.log('Parabéns!')
} else if (nota >= 3) {
    console.log('Recuperação!')
    console.log('Você vai fazer algumas provas!')
} else {
    console.log('Reprovado!')
}

console.log(`\nA nota do aluno foi ${nota}!`)