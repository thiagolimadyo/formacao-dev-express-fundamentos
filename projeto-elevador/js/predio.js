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

    function obterTamanhoElevador(){
        const terreo = document.querySelector('div[andar="T"]')
        console.log(terreo.clientHeight, terreo.offsetHeight)

        return terreo.offsetHeight
    }

    function criarElevador(){
    const poco = document.querySelector('.poco')

    const elevador = document.createElement('div')
    elevador.classList.add('elevador')
    elevador.style.height = obterTamanhoElevador()

    poco.appendChild(elevador)

    }

    criarElevador()

})()