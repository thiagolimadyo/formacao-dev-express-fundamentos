const senha = '#Senha111'
const SENHA_FORTE = senha.length >= 8

if (SENHA_FORTE) {
    console.log('Senha FORTE')
} else {
    console.log('Senha fraca')
}