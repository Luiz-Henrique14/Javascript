var agora = new Date()
var h = agora.getHours()
console.log(`agr são ${h} horas`)
if (h < 12) {
    console.log('bom dia')
} else if (h <= 18) {
    console.log('boa tarde')
}   else {
    console.log('boa noite')
}