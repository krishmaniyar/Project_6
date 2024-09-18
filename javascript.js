function inp()
{
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phoneno = document.getElementById("phoneno").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if(confirm_password!=password)
    {
        document.getElementById("confirm_password").value = "";
        console.log("invalid input");
        document.getElementById("invalid").innerText = "invalid input";
    }
    else
    {
        console.log(fn + "\n" + ln + "\n" + email + "\n" + password + "\n" + confirm_password + "\n" + phoneno);
        document.getElementById("detail").reset();
    }
}