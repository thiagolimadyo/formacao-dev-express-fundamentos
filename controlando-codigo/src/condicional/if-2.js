const ALTO_CUSTO = 930

const preco = 1289.90
const fragil = true

const produtoDeAltoCusto = preco >= ALTO_CUSTO

if (produtoDeAltoCusto && fragil)
    console.log('Seguro contratado com sucesso!')

console.log('Fim')