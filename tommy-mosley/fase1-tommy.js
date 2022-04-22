function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1-Marcar um encontro com Carl Jones para averiguar a hipótese de Kimber em associá-lo ao roubo  \n 2-Arriscar-se em fazer uma busca, sem mandato, pela casa de Carl Jones, junto a Ted, um dos policiais corruptos da delegacia, mas que era seu parceiro de profissão há anos  \n 3-Colher novamente depoimentos das vítimas que estavam no banco, a fim de construir um novo retrato falado mais preciso, e assim, encontrar os criminosos. ")

    if (escolha == 1){
        window.location.href= 'game-over1-fase1.html'
    }else if(escolha == 2){
        window.location.href= 'game-over2-fase1.html'
    } else if(escolha == 3){
        window.location.href= 'fase2-tommy.html'
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}