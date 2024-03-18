import { changeBackground } from './../General/Js/changeBackground.js';
import { initHamburgerMenu } from './../General/Js/initHamburgerMenu.js';

window.onload = function ()
{
    init();
}

function init()
{
    changeBackground();
    initHamburgerMenu();
    initLogin();

    console.log(login());
}

function initLogin()
{
    document.getElementById("submit-form").addEventListener('click', function ()
    {
        console.log("Login");
        createAccountCookie();
    });
}

function createAccountCookie()
{
    let email = document.forms["loginForm"]["email-form"].value;
    let pw = document.forms["loginForm"]["password-form"].value;

    document.cookie = "email=" + email + "; password=" + pw + "; path=/";
}

function login()
{
    let email = "email=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(email) == 0) 
        {
            return c.substring(email.length, c.length);
        }
    }
    return "sssss";
}