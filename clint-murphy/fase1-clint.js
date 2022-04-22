function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1- Esperar a madrugada para invadir o porão da fazenda \n 2- Seguir os dois picaretas para ouvir mais informações e traçar um plano de invasão \n 3- Seguir sua rotina oferecendo serviços às famílias dos desaparecidos na cidade")

    if (escolha == 1){
        window.location.href= 'game-over1-fase1.html'
    }else if(escolha == 2){
        window.location.href= 'game-over2-fase1.html'
    } else if(escolha == 3){
        window.location.href= 'fase2-clint.html'
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}