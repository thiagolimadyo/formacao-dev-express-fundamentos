export default function saudar() {
    const horaAtual = new Date().getHours()
    
    if(horaAtual <= 11){
        return "Bom dia!"
    } else if(horaAtual <= 17){
        return "Boa tarde!"
    } else{
        return "Boa noite!"
    }
}