function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.falar = function () {
        return `${this.nome} ${this.sobrenome} está falando...`
    }
}

const p1 = new Pessoa('Xuxa', 'da Silva')
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.falar())

const p2 = new Pessoa('Joana', 'Dark')
console.log(p2.nome)
console.log(p2.sobrenome)
console.log(p2.falar())