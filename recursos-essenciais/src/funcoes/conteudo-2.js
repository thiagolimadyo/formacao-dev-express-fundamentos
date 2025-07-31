function somar(a){
    return function(b){
        return a + b
    }
}

const somarComDez = somar(10)
const somarComCem = somar(100)

console.log(somarComDez(2))
console.log(somarComCem(200))

console.log(somar(2)(4))