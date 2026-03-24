var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
function carregar(){
    var data = new Date()
    var hora = data.getHours()
   //hora = 19
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(3, 183, 214)'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(1, 41, 172)'
    } else {
        //Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(2, 3, 100)'
    }
}