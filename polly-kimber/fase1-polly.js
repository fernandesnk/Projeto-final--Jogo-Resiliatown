
function voltar(){
    alert("Desistiu de procurar por Gregory Kimber? Tudo bem! Há outras jornadas em Resiliatown que você pode escolher. Clint e Tommy esperam pela sua escolha!")
    window.location.href='../pagina_principal/apresentacao-personagens.html'


   
    

}


function clicar(){
    var escolha = prompt("Digite o número correspondente a escolha: \n 1- Entrar no mausoléu 2- Buscar informações com o coveiro 3-Voltar para casa")

    if (escolha == 1){
        window.location.href= 'game-over-fase1.html'
    }else if(escolha == 2){} 
}