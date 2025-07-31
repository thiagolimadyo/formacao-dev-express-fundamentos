const gritar = (texto) => texto.toUpperCase()

const exagerar = (texto) => {
    return `${texto}!!!`
}

console.log(gritar('Olá'))
console.log(exagerar(gritar('Olá')))