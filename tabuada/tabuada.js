var n = document.getElementById('numero')
var res = document.getElementById('res')
var lis = document.getElementById('lis')

function clicar(){
    var n1 = Number(n.value)
    if(n1 == '' || isNaN(n1)){
            res.innerHTML = 'Digite um número válido!'
            return
        }
    lis.innerHTML = ''
    for(var t = 1; t <= 10; t++){
    var r = n1 * t
     var nli = document.createElement('li')
     nli.textContent = `${n1} X ${t} = ${r}`
     lis.appendChild(nli)
    }

}