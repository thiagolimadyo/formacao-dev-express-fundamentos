let trabalhoTerca = true
let trabalhoQuarta = true

// Operação Lógica E (AND) -> &&
let comprarTV55 = trabalhoTerca && trabalhoQuarta
console.log(`Comprar TV55: ${comprarTV55}`)

// Operação Lógica OU (OR) -> ||
let tomarSorvete = trabalhoTerca || trabalhoQuarta
console.log(`Tomar sorvete no sábado: ${tomarSorvete}`)

// Operação Lógica OU Exclusivo (XOR) -> !=
let comprarTV42 = trabalhoTerca != trabalhoQuarta
console.log(`Comprar TV42: ${comprarTV42}`)

// Operação Lógica de NEGAÇÃO (NOT) => !
let ficarSaudavel = !tomarSorvete
console.log(`Ficar saudável: ${ficarSaudavel}`)