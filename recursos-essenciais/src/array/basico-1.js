// const numeros = Object.freeze([1, 2, 3])
const numeros = [10, 20, 30]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])

numeros[0] = 20

console.log(numeros)
console.log(numeros.length)

console.log(numeros[numeros.length - 1])