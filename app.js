let player1Name = prompt("player 1 enter name").trim();
while (player1Name.length > 14) {
    player1Name = prompt("Name Can Not Greater Then 14").trim();
}
let player2Name = prompt("player 2 enter name").trim();
while (player2Name.length > 14) {
    player2Name = prompt("Name Can Not Greater Then 14").trim();
}


document.body.querySelector(".name1").innerHTML = player1Name
document.body.querySelector(".name2").innerHTML = player2Name

alert('player 1 : ' + player1Name + " start")

let player1Turn = true;
let player2Turn = false;
let player1Border = document.body.querySelector(".player1").classList;
let player2Border = document.body.querySelector(".player2").classList;
let player1CS = document.body.querySelector(".currentScore1").classList;
let player2CS = document.body.querySelector(".currentScore2").classList;

player2Border.toggle("borderNone")
player1CS.toggle("redShadow")

let currentScore1 = 0;
let currentScore2 = 0;
let totalScore_1 = 0;
let totalScore_2 = 0;

function rollDice() {

    let diceImg = document.body.querySelector(".buttons").querySelector("img");

    diceImg.classList.remove('rotation');
    void diceImg.offsetWidth;   //  ye offSetWidth element ki css ko refresh kat de ta he take brower is ki css ko dubara emplement/read kare 
    diceImg.classList.add('rotation');

    let randomNumber = Math.ceil(Math.random() * 6)
    diceImg.src = `./assets/${randomNumber}.jfif`

    if (player1Turn) {

        if (randomNumber == 1) {
            currentScore1 = 0;
            document.body.querySelector(".currentScore1").innerHTML = "00"

            player2Border.toggle("borderNone")
            player1Border.toggle("borderNone")
            player1CS.toggle("redShadow")
            player2CS.toggle("redShadow")

            player1Turn = false;
            player2Turn = true;
        }
        else {
            currentScore1 += randomNumber;
            console.log(currentScore1, "==> current Score1");
            document.body.querySelector(".currentScore1").innerHTML = currentScore1;
        }

    }
    else if (player2Turn) {

        if (randomNumber == 1) {
            currentScore2 = 0;
            document.body.querySelector(".currentScore2").innerHTML = "00"

            player2Border.toggle("borderNone")
            player1Border.toggle("borderNone")
            player1CS.toggle("redShadow")
            player2CS.toggle("redShadow")

            player1Turn = true;
            player2Turn = false;
        }
        else {
            currentScore2 += randomNumber;
            console.log(currentScore2, "==> current Score2");
            document.body.querySelector(".currentScore2").innerHTML = currentScore2;
        }
    }

}




function hold() {

    if (player1Turn) {

        totalScore_1 += currentScore1;
        document.body.querySelector(".totalScore1").innerHTML = totalScore_1;
        if (totalScore_1 >= 100) {
            // alert(`${player1Name} YOU WIN`)

            document.querySelector(".winModal").querySelector(".wName").innerHTML = player1Name
            modalOpen()

            currentScore1 = 0;
            document.body.querySelector(".currentScore1").innerHTML = "00"
            currentScore2 = 0;
            document.body.querySelector(".currentScore2").innerHTML = "00"

            totalScore_1 = 0;
            document.body.querySelector(".totalScore1").innerHTML = '00';
            totalScore_2 = 0;
            document.body.querySelector(".totalScore2").innerHTML = '00';
            return;
        }

        currentScore1 = 0;
        document.body.querySelector(".currentScore1").innerHTML = "00"

        player2Border.toggle("borderNone")
        player1Border.toggle("borderNone")
        player1CS.toggle("redShadow")
        player2CS.toggle("redShadow")

        player1Turn = false;
        player2Turn = true;

    }
    else if (player2Turn) {

        totalScore_2 += currentScore2;
        document.body.querySelector(".totalScore2").innerHTML = totalScore_2;
        if (totalScore_2 >= 100) {
            // alert(`${player2Name} YOU WIN`)

            document.querySelector(".winModal").querySelector(".wName").innerHTML = player2Name
            modalOpen()

            currentScore1 = 0;
            document.body.querySelector(".currentScore1").innerHTML = "00"
            currentScore2 = 0;
            document.body.querySelector(".currentScore2").innerHTML = "00"

            totalScore_1 = 0;
            document.body.querySelector(".totalScore1").innerHTML = '00';
            totalScore_2 = 0;
            document.body.querySelector(".totalScore2").innerHTML = '00';

            return;
        }

        currentScore2 = 0;
        document.body.querySelector(".currentScore2").innerHTML = "00"

        player2Border.toggle("borderNone")
        player1Border.toggle("borderNone")
        player1CS.toggle("redShadow")
        player2CS.toggle("redShadow")

        player1Turn = true;
        player2Turn = false;

    }
}


function newGame() {

    currentScore1 = 0;
    document.body.querySelector(".currentScore1").innerHTML = "00"
    currentScore2 = 0;
    document.body.querySelector(".currentScore2").innerHTML = "00"

    totalScore_1 = 0;
    document.body.querySelector(".totalScore1").innerHTML = '00';
    totalScore_2 = 0;
    document.body.querySelector(".totalScore2").innerHTML = '00';

    player1Name = prompt("player 1 name").trim();
    player2Name = prompt("player 2 name").trim();

    document.body.querySelector(".name1").innerHTML = player1Name
    document.body.querySelector(".name2").innerHTML = player2Name

    alert('player 1 : ' + player1Name + " start")

}

//  modal close function

function modalClose() {
    document.body.querySelector(".parentWinModal").classList.toggle("modalOpen")

}

//  open close function

function modalOpen() {
    document.body.querySelector(".parentWinModal").classList.toggle("modalOpen")
}