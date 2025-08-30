import { Carro } from "./carro";

let civic = new Carro()
civic.marca = 'Honda'

console.log(civic)

civic.acelerar()

// civic.velocidadeAtual = 400

console.log(civic)

console.log(civic.getVelocidadeAtual())