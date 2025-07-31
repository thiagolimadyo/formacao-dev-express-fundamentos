const somar = a => b => a + b

let somarCom10 = somar(10)
console.log(somarCom10(100))

const somar2 = (a) => {
    return b = (b) => {
        return a + b
    }
}

let somarCom20 = somar2(20)
console.log(somarCom20(100))

console.log(somar2(10)(20))