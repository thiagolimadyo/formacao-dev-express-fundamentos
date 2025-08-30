export class Carro {
    marca: string
    private velocidadeAtual: number = 0

    acelerar(): void {
        this.velocidadeAtual += 5
    }

    getVelocidadeAtual(): number {
        return this.velocidadeAtual
    }
}