const numeros = [3, 7, 12]
const dobro = []

for (let i = 0; i < numeros.length; i++) {
    dobro[i] = numeros[i] * 2
}

console.log(numeros)
console.log(dobro)

for (let numero of numeros) {
    dobro.shift()
    dobro.push(numero * 2)
}

console.log(numeros)
console.log(dobro)