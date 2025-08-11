(function criarFaixas(){
        const elementosComFaixas = document.querySelectorAll('[faixas]')
        elementosComFaixas.forEach(el => {
            const qtde = +el.getAttribute('faixas')
            for(let i =0; i < qtde; i++){
                const novaFaixa = document.createElement('div')
                novaFaixa.classList.add('faixa')
                el.appendChild(novaFaixa)
            }
        })
    }
)()
