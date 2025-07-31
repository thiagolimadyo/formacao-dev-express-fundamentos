function externa(){
    function interna(){
        console.log('Fim da fn interna')
    }

    interna()

    console.log('Fim da fn externa')
}

externa()