const PI = 3.1415

export function somar(a, b) {
        return a + b
}
    
export function subtrair(a, b) {
        return a - b
}
    
export function areaCircunferencia(raio) {
        return Math.pow(raio, 2) * PI
}

const Calculadora = {
    somar, subtrair, areaCircunferencia
}

export default Calculadora

