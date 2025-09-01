import { Aula } from "./aula";

export class Curso { 
    constructor(
        public nome: string,
        private autor: string,
        readonly descricao: string = "",
        readonly aulas: Aula[] = []
    ){}
    get duracaoTotalDoCursoEmSegundos(){
        const duracoes = this.aulas.map(aula => aula.duracaoEmSegundos)
        let duracaoTotalEmSegundos = 0
        for(let duracao of duracoes){
            duracaoTotalEmSegundos += duracao
        }
        return duracaoTotalEmSegundos
    }
}

// colocar a palavra PUBLIC antes do nome do atributo permite que este atributo seja relacionado diretamente com a classe, sem a 
// necessidade de declarar o atributo antes do construtor.

// O mesmo se aplica para private e readonly, a diferença é que o private precisa de get/set para alterações/consultas e o readonly não permite
// alterações após a criação do objeto.