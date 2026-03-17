function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados colocados e tente novamnete!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'criançahomem.jpg')
        }
       else if (idade < 21){
            //criança
            img.setAttribute('src', 'jovemhomem.jpg')
        }
       else if (idade < 50){
            //criança
            img.setAttribute('src', 'adultohomem.jpg')
        }
        else {
            //criança
            img.setAttribute('src', 'velhohomem.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'criançamulher.jpg')
        }
       else if (idade >=11 && idade < 21){
            //criança
            img.setAttribute('src', 'jovemmulher.jpg')
        }
       else if (idade <= 50){
            //criança
            img.setAttribute('src', 'adultomulher.jpg')
        }
        else {
            //criança
            img.setAttribute('src', 'velhamulher.jpg')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}