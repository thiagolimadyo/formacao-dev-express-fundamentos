const calculadora = {
    saudacao,
    PI: Math.PI,
    somar (a, b) {
        return a + b
    },
    subtrair: function (a, b) {
        return a - b
    },
    multiplicar: (a, b) => a * b
}

function saudacao (){
    console.log('Bom dia!')
}

calculadora.saudacao()

console.log(calculadora)
console.log(calculadora.somar(10,5))
console.log(calculadora.subtrair(10,5))
console.log(calculadora.multiplicar(10,5))
console.log(calculadora.multiplicar(10, calculadora.PI))


