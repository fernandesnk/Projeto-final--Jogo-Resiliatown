
function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n  \n 1- Invadir a sala de campanha eleitoral de Carl atrás de provas que o liguem aos crimes \n 2-Vigiar Carl Jones para que em um momento em que ele esteja só, confrontá-lo sobre sua relação com o roubo e o sumiço de Gregory \n 3- Na madrugada, vasculhar a casa de Carl Jones em busca de pistas sobre o paradeiro de Gregory Kimber\n  ")

    if (escolha == 1){
        window.location.href= './game-over1-fase3.html'
    }else if(escolha == 2){
        window.location.href= './game-over2-fase3.html'
    } else if(escolha == 3){
        window.location.href= './congratulations.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}

