const MIN = -40
const MAX = 40

let qtdeParesPositivos = 0
let qtdeImparesNegativos = 0

for(let i = MIN; i <= MAX; i++){
    if(i < 0 && i % 2 === -1) {
        qtdeImparesNegativos++
    } else if (i > 0 && i % 2 === 0) {
        qtdeParesPositivos++
    }
}

console.log(`Nós temos ${qtdeImparesNegativos} números ímpares negativos e ${qtdeParesPositivos} números pares positivos`)