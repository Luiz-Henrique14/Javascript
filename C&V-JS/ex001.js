var agr = new Date()
var diasem = agr.getDay()

console.log(diasem)

switch (diasem) {
    case 0:
    console.log('é domingo')
    break
    case 1:
    console.log('é segunda')
    break
    case 2:
    console.log('é terça')
    break
    case 3:
    console.log('é quarta')
    break
    case 4:
    console.log('é quinta')
    break
    case 5:
    console.log('é sexta')
    break
    case 6:
    console.log('é sabádo')
    break
    default: 
    console.log('[ERRO] Dia invalido')
}