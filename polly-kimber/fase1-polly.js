function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1- Entrar no mausoléu e descobrir quem eram as pessoas que Gregory procurava \n 2- Buscar informações sobre o paradeiro de seu pai com o coveiro \n 3-Se esconder e esperar que alguém saísse do mausoléu para descobrir onde essa pessoa iria")

    if (escolha == 1){
        window.location.href= './game-over1-fase1.html'
    }else if(escolha == 2){
        window.location.href= './fase2-polly.html'
    } else if(escolha == 3){
        window.location.href= './game-over2-fase1.html'
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}
