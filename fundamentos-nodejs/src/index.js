import saudar from "./saudacao.js";
import Calculadora, {somar, subtrair, areaCircunferencia} from "./operacoes.js";
import Id from "./lib/id.js";

console.log(saudar())

console.log('### EXPORT DEFAULT')
console.log(Calculadora.somar(1,2))
console.log(Calculadora.subtrair(1,2))
console.log(Calculadora.areaCircunferencia(15))

console.log('### EXPORT')
console.log(somar(1,2))
console.log(subtrair(1,2))
console.log(areaCircunferencia(15))

console.log('### GERAR UUID')
console.log(Id.gerar())

