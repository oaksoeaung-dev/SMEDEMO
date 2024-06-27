// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');
// const signIn = document.querySelector(".sign-in");
// const signUp = document.querySelector(".sign-up");
// const toggleContainer = document.querySelector(".toggle-container");
// const toggle = document.querySelector(".toggle");
// const toggleLeft = document.querySelector(".toggle-left");
// const toggleRight = document.querySelector(".toggle-right");

// registerBtn.addEventListener('click', () => {
//     signIn.classList.add("translate-x-full");
//     signUp.classList.add("translate-x-full");
//     signUp.classList.add("opacity-100");
//     signUp.classList.add("z-[5]");
//     signUp.classList.add("move");
//     toggleContainer.classList.add("-translate-x-full");
//     toggleContainer.classList.add("rounded-tr-[150px]");
//     toggleContainer.classList.add("rounded-br-[100px]");
//     toggle.classList.add("translate-x-1/2");
//     toggleLeft.classList.add("translate-x-0");
//     toggleRight.classList.add("translate-x-[200%]");
// });

// loginBtn.addEventListener('click', () => {
//     signIn.classList.remove("translate-x-full");
//     signUp.classList.remove("translate-x-full");
//     signUp.classList.remove("opacity-100");
//     signUp.classList.remove("z-[5]");
//     signUp.classList.remove("move");
//     toggleContainer.classList.remove("-translate-x-full");
//     toggleContainer.classList.remove("rounded-tr-[150px]");
//     toggleContainer.classList.remove("rounded-br-[100px]");
//     toggle.classList.remove("translate-x-1/2");
//     toggleLeft.classList.remove("translate-x-0");
//     toggleRight.classList.remove("translate-x-[200%]");
// });

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
