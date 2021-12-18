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
            }
        });
    }
}