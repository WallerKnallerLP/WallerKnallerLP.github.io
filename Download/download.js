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

    initForm();
}

function initForm()
{
    let loginForm = document.getElementById("downloadForm");

    let data = "";

    loginForm.addEventListener("submit", (e) => 
    {
        e.preventDefault();

        let browser1 = document.getElementById("browser1");
        let browser2 = document.getElementById("browser2");
        let browser3 = document.getElementById("browser3");

        let games1 = document.getElementById("games1");
        let games2 = document.getElementById("games2");
        let games3 = document.getElementById("games3");

        let others1 = document.getElementById("others1");
        //let password = document.getElementById("password");


        if (browser1.checked == true) 
        {
            data = data + "curl.exe -L \"https://download.mozilla.org/?product=firefox-latest&os=win&lang=de\" -o firefox.exe &firefox.exe -ms &del firefox.exe \n"
        } 
        if (browser2.checked == true) 
        {
            data = data + "curl.exe -L \"https://dl.google.com/chrome/install/375.126/chrome_installer.exe\" -o chrome.exe &chrome.exe -ms &del chrome.exe \n"
        } 
        if (browser3.checked == true) 
        {
            data = data + "curl.exe -L \"https://www.opera.com/de/computer/thanks?ni=eapgx&os=windows\" -o opera.exe &opera.exe -ms &del opera.exe \n"
        } 
        
        if (games1.checked == true)
        {
            data = data + "curl.exe -L \"https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe\" -o steam.exe &steam.exe -ms &del steam.exe \n"
        }
        if (games2.checked == true)
        {
            data = data + "curl.exe -L \"https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi\" -o epic.msi &epic.msi -ms &del epic.msi \n"
        }
        if (games3.checked == true)
        {
            data = data + "curl.exe -L \"https://download.battle.net/de-de/?product=bnetdesk\" -o battle.exe &battle.exe -ms &del battle.exe \n"
        }

        if (others1.checked == true)
        {
            data = data + "curl.exe -L \"https://dl.discordapp.net/apps/win/0.0.306/DiscordSetup.exe\" -o discord.exe &discord.exe -ms &del discord.exe \n"
        }

        var blob = new Blob([data], 
        {
            type: "text/plain;charset=utf-8",
        });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "download.bat";
        link.click();
        URL.revokeObjectURL(link.href);
    });
}
