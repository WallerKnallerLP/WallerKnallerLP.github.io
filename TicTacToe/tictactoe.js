import { changeBackground } from './../General/Js/changeBackground.js';
import { initHamburgerMenu } from './../General/Js/initHamburgerMenu.js';
import { initLogin } from './../General/Js/login.js';

window.onload = function ()
{
    init();
}

function init()
{
    changeBackground();
    initHamburgerMenu();
    initLogin();

    initializeTicTacToe();
}

function initializeTicTacToe()
{
    var ticTacToeItems = document.getElementsByClassName("ticTacToeItem");
    var isGameRunning = true;
    var counter = 0;

    Array.from(ticTacToeItems).forEach((item) => 
    {
        item.onclick = function()
        {
            if (item.innerHTML == "" && isGameRunning)
            {
                item.innerHTML = "X";
                counter++;
                isGameRunning = checkForWin(true, ticTacToeItems, isGameRunning, counter);

                if (isGameRunning)
                {
                    botTurn(ticTacToeItems);
                    counter++;
                    isGameRunning = checkForWin(false, ticTacToeItems, isGameRunning, counter);
                }
            }
        };
    });

    document.getElementById("restartButton").onclick = function()
    {
        Array.from(ticTacToeItems).forEach((item) => 
        {
            item.innerHTML = "";
        });

        isGameRunning = true;
        counter = 0;
    };
}

function botTurn(ticTacToeItems)
{
    var item = Math.floor(Math.random() * 9);
    if (Array.from(ticTacToeItems)[item].innerHTML == "")
        Array.from(ticTacToeItems)[item].innerHTML = "O";
    else
        botTurn(ticTacToeItems);
}

function checkForWin(isPlayer, ticTacToeItems, isGameRunning, counter)
{
    var search = "O";

    if (isPlayer)
        search = "X";

    if (Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[1].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[2].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == search)
        isGameRunning = false;
    else if (Array.from(ticTacToeItems)[3].innerHTML == Array.from(ticTacToeItems)[4].innerHTML && Array.from(ticTacToeItems)[3].innerHTML == Array.from(ticTacToeItems)[5].innerHTML && Array.from(ticTacToeItems)[3].innerHTML == search)
        isGameRunning = false;
    else if (Array.from(ticTacToeItems)[6].innerHTML == Array.from(ticTacToeItems)[7].innerHTML && Array.from(ticTacToeItems)[6].innerHTML == Array.from(ticTacToeItems)[8].innerHTML && Array.from(ticTacToeItems)[6].innerHTML == search)
        isGameRunning = false;

    else if (Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[3].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[6].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == search)
        isGameRunning = false;
    else if (Array.from(ticTacToeItems)[1].innerHTML == Array.from(ticTacToeItems)[4].innerHTML && Array.from(ticTacToeItems)[1].innerHTML == Array.from(ticTacToeItems)[7].innerHTML && Array.from(ticTacToeItems)[1].innerHTML == search)
        isGameRunning = false;
    else if (Array.from(ticTacToeItems)[2].innerHTML == Array.from(ticTacToeItems)[5].innerHTML && Array.from(ticTacToeItems)[2].innerHTML == Array.from(ticTacToeItems)[8].innerHTML && Array.from(ticTacToeItems)[2].innerHTML == search)
        isGameRunning = false;

    else if (Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[4].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == Array.from(ticTacToeItems)[8].innerHTML && Array.from(ticTacToeItems)[0].innerHTML == search)
        isGameRunning = false;
    else if (Array.from(ticTacToeItems)[2].innerHTML == Array.from(ticTacToeItems)[4].innerHTML && Array.from(ticTacToeItems)[2].innerHTML == Array.from(ticTacToeItems)[6].innerHTML && Array.from(ticTacToeItems)[2].innerHTML == search)
        isGameRunning = false;

    if (counter == 9)
        isGameRunning = false;

    return isGameRunning;
}