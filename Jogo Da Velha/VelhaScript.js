/*
-JOGO DA VELHA-
JAVASCRIPT
HTML
CSS

NOME: DAVI RIBEIRO FERNANDES ALEIXO
IDADE: 15 
DATA (última atualização): 15/06/19
*/

var tabuleiro = document.getElementById('tab')
var espacos = document.getElementsByName('espacos')
var botao_reiniciar = document.getElementById('botao_reiniciar')

var Menu_Versus_X = document.getElementById('Menu_Versus_X')             //Menu, para mudar a cor, desing indicativo de quem vai jogar
var Menu_Versus_O = document.getElementById('Menu_Versus_O')

var pontos_X = 0
var pontos_O = 0
var vitoria = false                       
var placar = document.getElementById('placar')
var contagem_para_empate = 0

var jogador1 = window.prompt('Qual o nome do jogador1?')
var jogador2 = window.prompt('Qual o nome do jogador2?')
//----Variável nescessária para a condição de quem esta jogando (Quem_Joga)(Condição 1*) e escolha aleatória de quem comeca e introdução dos nomes------

var opcoes = [jogador1,jogador2];
var Quem_Joga = ((opcoes[Math.random() < 0.5 ? 0 : 1]));
window.alert(`'${Quem_Joga}' começa! O jogo vai até 3 pontos!`)
Menu_Versus_O.innerHTML = 'Jogador ' + jogador2
Menu_Versus_X.innerHTML = 'Jogador ' + jogador1

if  (Quem_Joga == jogador1){
    Quem_Joga = 'X'
}else
    Quem_Joga = 'O'
//----------------------------------------------------------------------------------------

function Selecionar_Espaco(){  //(JOGO SE BASEA NESSA FUNCTION)

    if (vitoria == false) {                  //Se a vitória for false, continua o jogo, se vitoria for true, ele acaba
        
        var espaco_selecionado = event.target   //Identificação de qual div (a1, a2...) o jogador esta clicando

         //------------------------ERRO se a casa clicada ja estiver selecionada-----------------------------------------------------
        if (espaco_selecionado.innerHTML == 'X' || espaco_selecionado.innerHTML == 'O' || espaco_selecionado == tabuleiro){  
            window.alert('Casa já selecionada!')
            return
        }
        //------------------------------------------------------------------------------------------------------

        contagem_para_empate += 1                //Se ela ficar = 9 o progama da empate (9 quadrados) (*3)

        //----------------------------------QUEM TA JOGANDO X--------------------------------------

        if (Quem_Joga == 'X'){ //(1*)       //Jogador1: marcação da casa e analise de qual jogador vai jogar
            Menu_Versus_X.style.color = 'black'
            Menu_Versus_O.style.color = 'greenyellow'       //Mudança das cores do nome (estética)
            espaco_selecionado.innerHTML = 'X'
            Quem_Joga = 'O'                //Quando o jogador1 jogar, tal recebe 'O' (quer dizer que a proxima condicao(1*) sera falsa, passando a vez para o jogador2(2*)) 

//----------------------------------------------------CONDICOES DE VITORIA JOGADOR X---------------------------------------------------------
        if ((a1.innerHTML == 'X' && a2.innerHTML == 'X' && a3.innerHTML == 'X') || (b1.innerHTML == 'X' &&  b2.innerHTML == 'X' && b3.innerHTML == 'X') || (c1.innerHTML == 'X' && c2.innerHTML == 'X' && c3.innerHTML == 'X') || (a1.innerHTML == 'X' && b2.innerHTML == 'X' && c3.innerHTML == 'X') || (a3.innerHTML == 'X' && b2.innerHTML == 'X' && c1.innerHTML == 'X') || (a1.innerHTML == 'X' && b1.innerHTML == 'X' && c1.innerHTML == 'X') || (a2.innerHTML == 'X' && b2.innerHTML == 'X' && c2.innerHTML == 'X') || (a3.innerHTML == 'X' && b3.innerHTML == 'X' && c3.innerHTML == 'X')){     

            if (pontos_X < 2){     
                pontos_X += 1
                contagem_para_empate = 0
                window.alert(` Rodada ganhada pelo(a) ${jogador1.toUpperCase} ( X ) ! `)
                espacos.forEach(function(n){
                    n.innerHTML = ''
                });

            }else{           //Se o ponto de X for NÃO for menor que dois (quer dizer q vai ser  = 3) entao ele ganha (vai ate 3 pontos)
                window.alert('VITORIA DE' + jogador1.toUpperCase + '( X )')
                pontos_X += 1
                vitoria = true
                Menu_Versus_O.style.color = 'red'
                Menu_Versus_X.style.color = 'blue'
            }

        }
        //------------------------------------------------------------------------------------------------------------------------------------

            //----------------------------------QUEM TA JOGANDO O--------------------------------------
        }else{ //(2*)  
            espaco_selecionado.innerHTML = 'O'        //Jogador2
            Quem_Joga = 'X'
            Menu_Versus_O.style.color = 'black'
            Menu_Versus_X.style.color = 'greenyellow'

            //------------------------------------------CONDICOES DE VITORIA JOGADOR O---------------------------------------------------------
            if ((a1.innerHTML == 'O' && a2.innerHTML == 'O' && a3.innerHTML == 'O') || (b1.innerHTML == 'O' &&  b2.innerHTML == 'O' && b3.innerHTML == 'O') || (c1.innerHTML == 'O' && c2.innerHTML == 'O' && c3.innerHTML == 'O') || (a1.innerHTML == 'O' && b2.innerHTML == 'O' && c3.innerHTML == 'O') || (a3.innerHTML == 'O' && b2.innerHTML == 'O' && c1.innerHTML == 'O') || (a1.innerHTML == 'O' && b1.innerHTML == 'O'  && c1.innerHTML == 'O') || (a2.innerHTML == 'O' && b2.innerHTML == 'O' && c2.innerHTML == 'O') || (a3.innerHTML == 'O' && b3.innerHTML == 'O' && c3.innerHTML == 'O')){     

                if (pontos_O < 2){     
                    pontos_O += 1
                    window.alert(` Rodada ganhada pelo(a) ${jogador2.toUpperCase} ( O ) ! `)
                    contagem_para_empate = 0
                    espacos.forEach(function(n){
                        n.innerHTML = ''
                    });

                }else{
                    window.alert('VITORIA DE' + jogador2.toUpperCase + '( O )')
                    pontos_O += 1
                    vitoria = true
                    Menu_Versus_X.style.color = 'red'
                    Menu_Versus_O.style.color = 'blue'
                }

            }
            //------------------------------------------------------------------------------------------------------------------------------
        }

        placar.innerHTML = `<fieldset>${pontos_X} X ${pontos_O}</fieldset>` //Mudança do placar se tiver vitoria (esta dentro do bloco (if vitoria = false))

        //--------------------------------------EMPATE---------------------------------------------------
        if (contagem_para_empate == 9){  //(*3)
                window.alert('EMPATE')
                contagem_para_empate = 0

                espacos.forEach(function(n){n.innerHTML = ''});
            }
        //------------------------------------------------------------------------------------------

    }   

}

//----------Reinicia pontos, placar, contagem_empate - coloca vitora como false novamente - escolhe um player - limpa a tabela---------------
function reiniciar(){
    espacos.forEach(function(n){
        n.innerHTML = ''
    });

    pontos_O = 0
    pontos_X = 0
    contagem_para_empate = 0
    vitoria = false

    Quem_Joga = ((opcoes[Math.random() < 0.5 ? 0 : 1]));
    window.alert(`'${Quem_Joga}' começa! O jogo vai até 3 pontos!`)

    placar.innerHTML = `<fieldset>${pontos_X} X ${pontos_O}</fieldset>`
    Menu_Versus_O.style.color = 'black'
    Menu_Versus_X.style.color = 'black'
}