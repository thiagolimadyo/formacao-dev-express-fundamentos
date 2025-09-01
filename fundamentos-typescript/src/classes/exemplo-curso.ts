import { Aula } from "./aula";
import { Curso } from "./curso";

const aulas: Aula[] = [
    new Aula('Introdução', 'https://...', 180),
    new Aula('Configuração do Ambiente', 'https://...', 600),
    new Aula('Primeiro Componente', 'https://...', 1200),
    new Aula('Segundo Componente', 'https://...', 800),
]

const novoCurso = new Curso("React Fundamentos", "Xuxa da Silva", "O curso aborda os principais recursos da linguagem...", aulas)

novoCurso.nome = 'Fundamentos de React'

console.log(novoCurso)
console.log(`Duração do curso: ${novoCurso.duracaoTotalDoCursoEmSegundos}`)