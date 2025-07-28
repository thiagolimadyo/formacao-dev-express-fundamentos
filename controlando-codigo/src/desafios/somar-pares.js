const MIN = 1
const MAX = 10
let soma = 0;
let numerosSomados = ''

for(let i = MIN; i <= MAX; i++){
    if(i % 2 === 0){
        numerosSomados += ` #${i} `
        soma += i
    }
}

console.log(`Os números pares [${numerosSomados}] somados resultaram em ${soma}`)