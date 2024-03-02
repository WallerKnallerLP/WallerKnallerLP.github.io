window.onload = function ()
{
    init();
}

function init ()
{
    changeBackground();
}

function changeBackground ()
{
    slider = document.getElementById("sliderBackground");

    document.body.style.backgroundColor = "#3B3837";

    slider.oninput = function() 
    {
        if (slider.value == 0)
            document.body.style.backgroundColor = "white";
        else 
            document.body.style.backgroundColor = "#3B3837";
    }
}
