
function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n  \n 1- Combinar com Peg um dia em que a casa estivesse vazia, de preferência quando Carl estivesse na cidade vizinha, para que pudessem verificar com calma e segurança policial, o barulho que ela ouvia do escritório. \n 2- Seguir a esposa e Carl porquê provavelmente ela cometeria um deslize e iria ao encontro de Eithan que poderia estar em posse do dinheiro do roubo\n 3- Entrar em contato a divisão policial do oeste dos EUA e solicitar apoio e sigilo na condução do caso \n  ")

    if (escolha == 1){
        window.location.href= './game-over1-fase3.html'
    }else if(escolha == 2){
        window.location.href=  './game-over2-fase3.html'
    } else if(escolha == 3){
        window.location.href= './congratulations.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}




