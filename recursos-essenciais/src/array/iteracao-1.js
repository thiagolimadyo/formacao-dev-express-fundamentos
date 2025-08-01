const notas = [10, 7.4, 8, 9.5, 9, 5.9, 7, 7.7, 5, 6]

function media(notas) {

    let total = 0

    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i])
        total += notas[i]
    }

    const media = (total / notas.length).toFixed(2)

    return media
}
console.log(`\nMédia: ${media(notas)}`)