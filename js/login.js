let x = document.getElementById("login");
let y = document.getElementById("signup");
let z = document.getElementById("btn");
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
function signup(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

// let password = document.querySelector("#YourPassword");
// let show = document.querySelector(".show");
// show.onclick = function() {
//     if (password.type === "password") {
//         password.setAttribute("type", "text");
//         show.classList.add("hide");
//     } else {
//         password.setAttribute("type", "password");
//         show.classList.remove("hide");
//     }
// };

// let password1 = document.querySelector("#YourPassword1");
// let show1 = document.querySelector(".show1");
// show1.onclick = function() {
//     if (password1.type === "password") {
//         password1.setAttribute("type", "text");
//         show1.classList.add("hide");
//     } else {
//         password1.setAttribute("type", "password");
//         show1.classList.remove("hide");
//     }
// };

// function function1(){
//     alert("You are successfully Loged In");
// }
// function function2(){
//     alert("You are successfully Signed Up");
// }
