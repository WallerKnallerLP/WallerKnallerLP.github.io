window.onload = function ()
{
    init();
}

function init()
{
    changeBackground();
    initializeTicTacToe();
}

function changeBackground()
{
    var slider = document.getElementById("sliderBackground");
    var ticTacToeItems = document.getElementsByClassName("ticTacToeItem");
    var restartButton = document.getElementById("restartButton");

    document.body.style.backgroundColor = "#3B3837";
    slider.style.setProperty("--SliderColor", "white");

    restartButton.style.setProperty("--BackgroundColor", "white")
    restartButton.style.setProperty("--TextColor", "#3B3837")

    //TicTacToeItem Color
    Array.from(ticTacToeItems).forEach((item) => 
    {
        item.style.setProperty("--TicTacToeItemColor", "white");
        item.style.setProperty("--TextColor", "#3B3837");
    });
    

    slider.oninput = function() 
    {
        if (slider.value == 0)
        {
            backgroundWhite();
        }
        else
        {
            backgroundBlack();
        }
    }
}

function backgroundWhite()
{
    var slider = document.getElementById("sliderBackground");
    var ticTacToeItems = document.getElementsByClassName("ticTacToeItem");
    var restartButton = document.getElementById("restartButton");

    document.body.style.backgroundColor = "white";
    slider.style.setProperty("--SliderColor", "#3B3837");

    restartButton.style.setProperty("--BackgroundColor", "#3B3837")
    restartButton.style.setProperty("--TextColor", "white")

    //TicTacToeItem Color
    Array.from(ticTacToeItems).forEach((item) => 
    {
        item.style.setProperty("--TicTacToeItemColor", "#3B3837");
        item.style.setProperty("--TextColor", "white");
    });
}

function backgroundBlack()
{
    var slider = document.getElementById("sliderBackground");
    var ticTacToeItems = document.getElementsByClassName("ticTacToeItem");
    var restartButton = document.getElementById("restartButton");

    document.body.style.backgroundColor = "#3B3837";
    slider.style.setProperty("--SliderColor", "white");

    restartButton.style.setProperty("--BackgroundColor", "white")
    restartButton.style.setProperty("--TextColor", "#3B3837")

    //TicTacToeItem Color
    Array.from(ticTacToeItems).forEach((item) => 
    {
        item.style.setProperty("--TicTacToeItemColor", "white");
        item.style.setProperty("--TextColor", "#3B3837");
    });  
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