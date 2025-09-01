export class Carro {
    marca: string
    private _velocidadeAtual: number = 0

    acelerar(): void {
        this._velocidadeAtual += 5
    }

    // Quando usa o get separado do nome da função, ele retorna como atributo

    get velocidadeAtual(){
        return this._velocidadeAtual
    }

    set velocidadeAtual(novaVelocidade: number){
        if(novaVelocidade >= 220) return
        this._velocidadeAtual = novaVelocidade
    }

    // getVelocidadeAtual(): number {
    //     return this._velocidadeAtual
    // }

    // setVelocidadeAtual(novaVelocidade: number){
    //     this._velocidadeAtual = novaVelocidade
    // }
}