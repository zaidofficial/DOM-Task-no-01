let login = document.querySelector("#login");
let hide = document.querySelector("span");
let loginModel = document.querySelector(".login-model");
let body = document.querySelector("body");
//login section open
login.addEventListener("click",()=>{
    loginModel.classList.add('showModel');
})
//login section close
    hide.addEventListener("click",()=>{
        loginModel.classList.remove('showModel');
})