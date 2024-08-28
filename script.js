function enviar(){
    const campoA = document.getElementById('numero-a')
    const campoB = document.getElementById('numero-b')
    const res = document.querySelector('div#resultado')

    if(campoA.value < campoB.value){
        alert('Parabéns, seu formulário é válido!')
        res.innerHTML = `Porque o valor ${campoB.value}, do campo B é maior que ${campoA.value}, do campo A. `
        res.style.textAlign = 'center'
       
    } else{
        alert ('[ERRO] Seu formulário é inválido!')
         res.innerHTML = `Porque o valor ${campoA.value} do campo A,  é maior que ${campoB.value}, do campo B. `
         res.style.textAlign = 'center'
    }
}
