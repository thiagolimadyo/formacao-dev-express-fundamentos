// Fluent API

const calculadora = {
    resultado: 0,
    somar(a){
        this.resultado += a
        return this
    },
    multiplicar(a){
        this.resultado *= a
        return this
    },
    elevarAoQuadrado(){
        this.resultado = this.resultado * this.resultado
        return this
    },
    zerar(){
        this.resultado = 0
        return this
    }
}

let r = calculadora.somar(2).multiplicar(3).somar(4).resultado
console.log(r)
console.log(calculadora.resultado)

const raio = 10
const area = calculadora.zerar().somar(raio).elevarAoQuadrado().multiplicar(3.1415).resultado

console.log(area)
