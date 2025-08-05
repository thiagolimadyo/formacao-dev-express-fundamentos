function saudarDepoisDe(tempoEmSegundos = 2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Bom dia')
        }, tempoEmSegundos * 1000)
    })
}
saudarDepoisDe(1)
    .then(response => console.log(response + '!!!'))

console.log('Fim')