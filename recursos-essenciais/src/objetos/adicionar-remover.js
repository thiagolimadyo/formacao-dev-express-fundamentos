const curso = {
    id: 10,
    nome: 'Javascript Essencial',
    duracao: 10000,
    aulas: [{}, {}, {}],
    duracaoEmHoras() {
        return ((this.duracao / 60) / 60).toFixed(2)
    }
}


delete curso.aulas
curso.ativo = true

console.log(`Durancao em horas: ${curso.duracaoEmHoras()}`)
console.log(curso)