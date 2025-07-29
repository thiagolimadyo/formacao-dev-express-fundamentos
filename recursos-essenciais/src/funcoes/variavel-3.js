function somar(x, y, fn){
    let resultado = x + y

    if(fn !== null && typeof fn === 'function'){
        return fn(resultado)
    } else {
        return resultado
    }
}

let x = 10
let y = 40

const dobro = function (numero){
    return numero * 2
}

const triplo = function (numero){
    return numero * 3
}

const negativo = function (numero){
    return numero * -1
}

const modulo = function (numero){
    return numero % 2
}

console.log(somar(x, y, dobro))
console.log(somar(x, y, triplo))
console.log(somar(x, y, negativo))
console.log(somar(x, y, modulo))