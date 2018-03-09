function pageReady() {
    "use strict";
    var userAuth = document.forms.login_form;
    function validateForm() {
        var userName = userAuth.loginform__username;
        var userPass = userAuth.loginform__password;
        var userNameOut = document.getElementById("logindetails__user");
        var userPassOut = document.getElementById("logindetails__pass");
        var userNameErr = document.getElementById("loginform__username_err");
        var userPassErr = document.getElementById("loginform__password_err");
        var flag = true;
        if (userName.value === "" || userName.value === null) {
            userName.style.background = "red";
            userNameErr.innerHTML = "Please input username.";
            userName.focus();
            flag = false;
        } else {
            userName.style.background = "white";
            userNameErr.innerHTML = "";
        }
        if (userPass.value === "" || userName.value === null) {
            userPass.style.background = "red";
            userPassErr.innerHTML = "Please input password.";
            userPass.focus();
            flag = false;
        } else {
            userPass.style.background = "white";
            userPassErr.innerHTML = "";
        }
        if (!flag) {
            return false;
        }
        userNameOut.innerHTML = "<span class='logindetails__label'>Username: </span>" + userName.value;
        userPassOut.innerHTML = "<span class='logindetails__label'>Password: </span>" + userPass.value;
        return false;
    }
    userAuth.onsubmit = validateForm;
}
window.onload = pageReady;