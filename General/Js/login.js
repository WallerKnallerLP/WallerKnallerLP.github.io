function login()
{
    let account = readCookie();

    if (account == "")
    {
        return "";
    }
    else 
    {
        return account;
    }
}

function readCookie()
{
    let email = "email=";
    let password = "password="
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let account = [];

    for(let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(email) == 0) 
        {
            account[0] = c.substring(email.length, c.length);
        }
        if (c.indexOf(password) == 0) 
        {
            account[1] = c.substring(password.length, c.length);
        }
        return account;
    }
    return "";
}

export { login };