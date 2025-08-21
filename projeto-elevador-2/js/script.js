(function(){
    // Rua

    function criarFaixas(){
        const rua = document.querySelector('.rua')
        const faixas = rua.getAttribute('faixas')
        
        for(let i=0; i<faixas; i++){
            const faixa = document.createElement('div')
            faixa.classList.add('faixa')
            rua.appendChild(faixa)
        }
    }

    // Predio

    function criarAndar(coluna, andares){
        for(let i=0; i<andares; i++){
            const andar = document.createElement('div')
            andar.classList.add('andar')

            const porta = document.createElement('div')
            porta.classList.add('porta')
            andar.appendChild(porta)
            
            coluna.appendChild(andar)
        }
    }

    function criarTerreo(coluna){
        const terreo = document.createElement('div')
        terreo.classList.add('andar')
        terreo.classList.add('terreo')
        
        const janela = document.createElement('div')
        janela.classList.add('janela')
        terreo.appendChild(janela)

        coluna.appendChild(terreo)
    }

    function criarPredio(){
        const predio = document.querySelector('.predio')
        const colunas = document.querySelectorAll('.predio>.coluna')
        
        colunas.forEach(coluna=>{
            const andares = coluna.getAttribute('andares')
            criarAndar(coluna, andares)
            criarTerreo(coluna)
        })
    }

    function tamanhoAndar(){
        const terreo = document.querySelector('.terreo')
        console.log(terreo.offsetHeight)
        return terreo.offsetHeight
    }

    // Elevador

    function criarElevador(){
        const poco = document.querySelector('.poco')
        const elevador = document.createElement('div')

        elevador.classList.add('elevador')
        elevador.style.height = tamanhoAndar()
        console.log('Tamanho do elevador: ',elevador.style.height)

        poco.appendChild(elevador)
        atualizarPainel('Térreo')
    }

    function posicaoAtual(){
        const elevador = document.querySelector('.elevador')
        return +elevador.style.bottom.replace(/\D/g,'')
    }

    function atualizarPainel(texto){
        const painel = document.querySelector('.painel')
        painel.innerHTML = texto
    }

    function iniciarMovimento(){
        const elevador = document.querySelector('.elevador')
        elevador.setAttribute('em-movimento', '')
    }

    function finalizarMovimento(){
        const elevador = document.querySelector('.elevador')
        elevador.removeAttribute('em-movimento')
    }

    function emMovimento(){
        const elevador = document.querySelector('.elevador')
        return elevador.hasAttribute('em-movimento')
    }

    function inserirDestaque(botao){
        botao.classList.add('destaque')
    }

    function retirarDestaque(botao){
        botao.classList.remove('destaque')
    }

    function moverElevador(destino, botao){
        if(emMovimento()) return

        iniciarMovimento()
        inserirDestaque(botao)

        const elevador = document.querySelector('.elevador')
        const posicaoInicial = posicaoAtual()
        const posicaoFinal = tamanhoAndar() * (destino? +destino : 0)
        const subindo = posicaoFinal > posicaoInicial

        atualizarPainel(subindo? 'Subindo': 'Descendo')

        let temporizador = setInterval(()=>{
            const novaPosicao = posicaoAtual() + (subindo? 10 : -10)
            const terminou = posicaoAtual() === posicaoFinal
            elevador.style.bottom = terminou? posicaoFinal : novaPosicao

            if(terminou){
                clearInterval(temporizador)
                atualizarPainel(`${+destino === 0? 'Térreo' : +destino + 'º Andar'}`)
                retirarDestaque(botao)
                finalizarMovimento()
            }
        },30)
    }

    // Controles

    function criarControles(){
        const botoes = document.querySelectorAll('.controles>button')

        botoes.forEach(botao => {
            const destino = botao.getAttribute('destino')

            botao.onclick = function(){
                moverElevador(destino, botao)
            }
        })
    }




    criarFaixas()
    criarPredio()
    criarElevador()
    criarControles()
})()

