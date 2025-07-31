function Contador(valorInicial = 0) {
    this.numero = valorInicial

    this.incrementar = function () {
        this.numero++
    }

    this.decrementar = function () {
        this.numero--
    }
}

const contador = new Contador(10)
console.log(contador.numero)

contador.incrementar()
console.log(contador.numero)

const outroContador = new Contador(1000)

console.log(outroContador.numero)
console.log(contador.numero)