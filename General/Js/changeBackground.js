function changeBackground()
{
    var slider = document.getElementById("sliderBackground");

    document.documentElement.style.setProperty('--main-bg-color', '#3B3837');
    document.documentElement.style.setProperty('--secondary-bg-color', 'white');

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
    document.documentElement.style.setProperty('--main-bg-color', 'white');
    document.documentElement.style.setProperty('--secondary-bg-color', '#3B3837'); 
}

function backgroundBlack()
{
    document.documentElement.style.setProperty('--main-bg-color', '#3B3837');
    document.documentElement.style.setProperty('--secondary-bg-color', 'white');
}

export { changeBackground };