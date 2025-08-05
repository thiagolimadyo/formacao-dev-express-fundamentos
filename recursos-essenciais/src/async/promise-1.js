function promessa() {
    return new Promise((resolve) => {
        resolve('Promessa Resolvida')
    })
}

promessa()
    .then(resp => console.log(resp))

console.log('Fim!')