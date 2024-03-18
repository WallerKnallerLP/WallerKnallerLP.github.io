import { changeBackground } from './General/Js/changeBackground.js';
import { initHamburgerMenu } from './General/Js/initHamburgerMenu.js';
import { login } from './General/Js/login.js';

window.onload = function ()
{
    init();
}

function init()
{
    changeBackground();
    initHamburgerMenu();
    
    initLogin();
}

function initLogin()
{
    let account = login(); 

    console.log(account);
    
    if (account != "")
    {
        document.getElementById("login-button").innerHTML = "Sign out";
    }
}