


function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1- Subornar o policial corrupto Ted para obter as informações que a polícia possui sobre o desaparecimento \n 2- Seguir Polly para descobrir o que ela sabe sobre o desaparecimento do pai \n 3-Procurar por pistas no escritório de Gregory, na fazenda dos Kimber\n  ")

    if (escolha == 1){
        window.location.href= '../clint-murphy/fase3-clint.html'
    }else if(escolha == 2){
        window.location.href= '../clint-murphy/game-over1-fase2.html'
    } else if(escolha == 3){
        window.location.href= '../clint-murphy/game-over2-fase2.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}


