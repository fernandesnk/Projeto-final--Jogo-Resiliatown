


function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1-Ir para casa e se planejar para seguir o coveiro no dia seguinte  \n 2- Entrar em contato com a polícia e explicar o que descobriu para que a investigação do sumiço do pai seja revista \n 3-Confrontar o coveiro e pedir que exigir que ele explique que riscos são esses que ele se referia\n  ")

    if (escolha == 1){
        window.location.href= 'fase3-polly.html'
    }else if(escolha == 2){
        window.location.href= 'game-over1-fase2.html'
    } else if(escolha == 3){
        window.location.href= 'game-over2-fase2.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}



