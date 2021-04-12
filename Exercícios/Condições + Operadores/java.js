
function confirmar(){
    
    var n1 = document.getElementById('numero1') 
    var n2 = document.getElementById('numero2')
    var opcao = document.getElementsByName('radnumero')
    var resposta = document.getElementById('resp')
    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)
    var result = ''

    if (opcao[0].checked) {
        result = numero1 + numero2
    }else if (opcao[1].checked){
        result = numero1 - numero2
    }else if (opcao[2].checked){
        result = numero1 * numero2
    }else if (opcao[3].checked) {
        result = numero1 / numero2
    }else {
        window.alert('ERROR')
    }

    resposta.innerHTML = (`Resposta: ${result}`)
}