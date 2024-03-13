function initHamburgerMenu()
{
    document.getElementById("menu-button").addEventListener('click', function() 
    {
        document.getElementById("menu-list").style.display = 
        (document.getElementById("menu-list").style.display == 'flex') ? 'none' : 'flex';
    });
}

export { initHamburgerMenu };