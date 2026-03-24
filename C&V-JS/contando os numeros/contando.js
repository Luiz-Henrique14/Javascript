function contar(){
    var ini = document.getElementById('ini')  // input início
    var f = document.getElementById('fim')    // input fim  
    var pa = document.getElementById('pas')   // input passo
    var res = document.getElementById('res')
    
    var i = Number(ini.value)
    var fimm = Number(f.value)
    var p = Number(pa.value)
    
    res.innerHTML = `Contando: <br>`
    if (p <= 0 || p == NaN){
        alert('O passo colocar não pode ser executado. considerando Passo = 1 ')
        p = 1
    }
    if (ini.value == 0 || f.value == 0){
        alert('[ERRO] faltam dados para serem colocados')
        res.innerHTML = 'impossivel contar'
    }
    
   if (i < f){
    for(var r = i; r <= fimm; r += p){
        res.innerHTML += ` ${r}  \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`}

    else {
    for(var r = i; r >= fimm; r -= p){
        res.innerHTML += ` ${r}  \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`}
}