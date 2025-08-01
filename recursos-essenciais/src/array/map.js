const raios = [3, 2, 11]

const aoQuadrado = n => n ** 2
const multiplicarPorPI = n => +(n * Math.PI).toFixed(5)

const areas = raios.map(aoQuadrado).map(multiplicarPorPI)

console.log(raios, areas)
