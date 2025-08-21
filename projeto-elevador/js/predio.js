(function(){

    // ----------------------------------------------- Pavimentos

    function criarTerreo(){
        const janela = document.createElement('div')
        janela.classList.add('janela')

        const terreo = document.createElement('div')
        terreo.classList.add('terreo')

        terreo.setAttribute('andar', 'T')

        terreo.appendChild(janela)

        return terreo
    }

    function criarAndar(numeroAndar){
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')

        andar.setAttribute('andar', numeroAndar)

        andar.appendChild(porta)

        return andar
    }

    function criarPavimentos(){
        const elementosComAndares = document.querySelectorAll('.predio > div.coluna[andares]')
        
        elementosComAndares.forEach(el => {
            const qtdeAndares = +el.getAttribute('andares')
            
            for(let i=qtdeAndares; i>0; i--){

            el.appendChild(criarAndar(i))

            }
            let terreo = criarTerreo()
            terreo.setAttribute('andar', 'T')

            el.appendChild(terreo)
        })
    }
    
    criarPavimentos()

    // ----------------------------------------------- Elevador

    function iniciarMovimentacao(){
        const elevador = document.querySelector('.elevador')
        elevador.setAttribute('em-movimentacao', '')
    }

    function finalizarMovimentacao(){
        const elevador = document.querySelector('.elevador')
        elevador.removeAttribute('em-movimentacao')
    }

    function emMovimentacao(){
        const elevador = document.querySelector('.elevador')
        return elevador.hasAttribute('em-movimentacao')
    }

    function iniciarOperacao(andar){
        const botao = document.querySelector(`[destino="${andar}"]`)
        botao.classList.add('destaque')
    }

    function finalizarOperacao(andar){
        const botao = document.querySelector(`[destino="${andar}"]`)
        botao.classList.remove('destaque')
    }

    function obterTamanhoElevador(){
        const terreo = document.querySelector('div[andar="T"]')
        // console.log(terreo.clientHeight, terreo.offsetHeight)

        return terreo.offsetHeight
    }

    function criarElevador(){
    const poco = document.querySelector('.poco')

    const elevador = document.createElement('div')
    elevador.classList.add('elevador')
    elevador.style.height = obterTamanhoElevador()

    poco.appendChild(elevador)
    }

    function obterPosicaoAtual(){
        const elevador = document.querySelector('.elevador')
        return +elevador.style.bottom.replace(/\D/g, '')
    }

    function atualizarMostrador(texto){
        const mostrador = document.querySelector('.mostrador')
        mostrador.textContent = texto
    }
    
    function moverElevador(andar){
        if(emMovimentacao()) return

        iniciarMovimentacao()
        iniciarOperacao(andar)

        const numero = andar === 'T' ? 0 : +andar;
        const elevador = document.querySelector('.elevador')
        
        const posicaoInicial = obterPosicaoAtual()
        const posicaoFinal = numero*obterTamanhoElevador()
        const subindo = posicaoInicial < posicaoFinal

        atualizarMostrador(subindo ? 'Subindo': 'Descendo')

        let temporizador = setInterval(()=>{
            const novaPosicao = obterPosicaoAtual() + (subindo? 1 : -1)
            const terminou = posicaoFinal === obterPosicaoAtual()
            elevador.style.bottom = terminou ? posicaoFinal : novaPosicao
            
            if(terminou){
                clearInterval(temporizador)
                atualizarMostrador(andar === 'T' ? 'Térreo' : `${numero}º Andar`)
                finalizarMovimentacao()
                finalizarOperacao(andar)
            }
           
        },1)

        // elevador.style.bottom = obterTamanhoElevador()*numero
        // atualizarMostrador(andar === 'T' ? 'Térreo' : `${numero}º Andar`)
    }

    function aplicarControlesDoElevador(){
        const botoes = document.querySelectorAll('[destino]')

        botoes.forEach(botao => {
            const destino = botao.getAttribute('destino')
            botao.onclick = function(){
                moverElevador(destino)
            }
        })
    }

    criarElevador()
    aplicarControlesDoElevador()

})()