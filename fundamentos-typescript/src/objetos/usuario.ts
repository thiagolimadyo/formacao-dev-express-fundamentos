import { statusUsuario } from "./status-usuario"

export interface Usuario {
    id: string
    nome: string
    email: string
    senha?: string
    ativo: statusUsuario
}