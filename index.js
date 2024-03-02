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
    var slider = document.getElementById("sliderBackground");

    document.body.style.backgroundColor = "#3B3837";
    slider.style.setProperty("--SliderColor", "white")

    slider.oninput = function() 
    {
        if (slider.value == 0)
        {
            document.body.style.backgroundColor = "white";
            slider.style.setProperty("--SliderColor", "#3B3837")
        }
        else
        {
            document.body.style.backgroundColor = "#3B3837";
            slider.style.setProperty("--SliderColor", "white")
        }
    }
}
