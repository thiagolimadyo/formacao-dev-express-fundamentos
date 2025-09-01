import { Carro } from "./carro";

let civic = new Carro()
civic.marca = 'Honda'

console.log(civic)

civic.acelerar()

console.log(civic)

console.log(civic.velocidadeAtual)

civic.velocidadeAtual = 210

console.log(civic.velocidadeAtual)

// console.log(civic.getVelocidadeAtual())

// civic.setVelocidadeAtual(120)

// console.log(civic.getVelocidadeAtual())