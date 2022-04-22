
function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1-Intimar Eithan Jones a prestar depoimento na delegacia explicando em que local estava no dia do assalto  \n 2-Seguir  Peg, empregada da casa dos Jones, e interroga-la se sobre o sumiço do jovem Eithan e sobre uma possível estranheza na casa desde o dia do roubo \n 3-Comunicar ao atual prefeito, Bradley Olsen, sobre suas desconfianças quanto à família Jones para que possa encontrar um caminho seguro para a cidade na resolução do crime ")

    if (escolha == 1){
        window.location.href= '../tommy-mosley/game-over1-fase2.html'
    }else if(escolha == 2){
        window.location.href= '../tommy-mosley/fase3-tommy.html'
    } else if(escolha == 3){
        window.location.href= '../tommy-mosley/game-over2-fase2.html'
       
    } else if (escolha !== 1 && 2 && 3){
        alert('Resposta inválida! Digite 1, 2 ou 3 para avançar.')
    }
}



