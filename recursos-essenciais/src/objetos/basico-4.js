const contador = {
    memoria: 0,
    somar(a) {
        this.memoria += a
    },
    zerar() {
        this.memoria = 0
    }
}

contador.somar(10)
contador.somar(20)
console.log(contador.memoria)

contador.zerar()
console.log(contador.memoria)

contador.somar(100)
contador.somar(200)
console.log(contador.memoria)