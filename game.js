const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
    if (gameOver) {
        return;
    }
    if (playTime == player1) {
        var player = document.querySelectorAll("div.indicador img") [0];
        player.setAttribute("src", "./assets/img/x.png");
    }
    else {
        var player = document.querySelectorAll("div.indicador img") [0];
        player.setAttribute("src", "./assets/img/circulo.png");
    }
}

function inicializarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if (gameOver) {return;}

            if(this.getElementsByTagName("img").length == 0){

                if (playTime == player1) {
                    this.innerHTML = "<img src='./assets/img/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }
                else {
                    this.innerHTML = "<img src='./assets/img/circulo.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
}

function verificarvencer(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "" )  ||  (a1 == a2 && a1 == a3 && a1 != "" )  ||  (a1 == b2 && a1 == c3 && a1 != "" ))
        vencedor = a1;
}