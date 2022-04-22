
function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n  \n 1-Se esconder no QG da campanha eleitoral de Carl Jones e esperar que ele confessasse sua relação com o roubo ou o sumiço de seu pai  \n 2-Entrar em contato com Troy, seu amigo de infância que trabalhava na divisão policial do oeste dos Estados Unidos, e pedir ajuda para resolver o caso de seu pai. \n 3-Seguir Carl Jones para descobrir se ele irá ao mausoléu ou encontrar o  e confirmar a relação dele com os crimes \n  ")

    if (escolha == 1){
        window.location.href= 'game-over1-fase3.html'
    }else if(escolha == 2){
        window.location.href= 'congratulations.html'
    } else if(escolha == 3){
        window.location.href= 'game-over2-fase3.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}

