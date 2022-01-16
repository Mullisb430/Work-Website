var CREDENTIALS = [["jonathon", "998811"]];

function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < CREDENTIALS.length; i++)
    {
        if (username === CREDENTIALS[i][0])
        {
            if (password === CREDENTIALS[i][1])
            {
                window.open("./naratives.html");
            }
        } 
    }



}