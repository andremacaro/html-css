var botao = document.getElementById('btn-calcular')
var nota1 = document.getElementById('nota1')
var nota2 = document.getElementById('nota2')
var campoMedia = document.getElementById('media')
var campoSituacao = document.getElementById('situacao')

botao.addEventListener("click", calcular)

function calcular(){
    var valor1 = (parseFloat(nota1.value))
    var valor2 = (parseFloat(nota2.value))
    var media = (valor1 + valor2) / 2
    campoMedia.value = media

    if(media < 6.0){
        campoSituacao.value = 'Reprovado'
    }
    else{
        campoSituacao.value = 'Aprovado' 
    }
}