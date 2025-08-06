function promessa() {
    return new Promise((atender, rejeitar) => {
        if (Math.random() < 0.5) {
            atender('Bom dia')
        } else {
            rejeitar('Sai fora!!!')
        }
    })
}

promessa()
    .then(console.log)
    .catch(e => console.error(`Erro: ${e}`))