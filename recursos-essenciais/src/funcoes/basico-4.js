// Exemplo de pilha de funções - STACK

function ultima() {
    console.log('Última')
}

function terciaria() {
    console.log('[INICIO] - Função Terciária')
    ultima()
    console.log('[FIM] - Função Terciária')
}

function secundaria() {
    console.log('[INICIO] - Função Secundária')
    terciaria()
    console.log('[FIM] - Função Secundária')
}

function principal() {
    console.log('[INICIO] - Função Principal')
    secundaria()
    console.log('[FIM] - Função Principal')
}

principal()