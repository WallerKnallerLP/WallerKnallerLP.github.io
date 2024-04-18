import { changeBackground } from './General/Js/changeBackground.js';
import { initHamburgerMenu } from './General/Js/initHamburgerMenu.js';
import { initLogin } from './General/Js/login.js';

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

