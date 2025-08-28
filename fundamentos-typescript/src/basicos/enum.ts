enum diaSemana {
    DOMINGO = 'Domingo',
    SEGUNDA = 'Segunda',
    TERÇA = 'Terça',
    QUARTA = 'Quarta',
    QUINTA = 'Quinta',
    SEXTA = 'Sexta',
    SABADO = 'Sábado'
}

let diasDisponiveis: diaSemana[] = [diaSemana.SEGUNDA, diaSemana.QUARTA]

console.log(`Dias disponíveis: ${diasDisponiveis}`)