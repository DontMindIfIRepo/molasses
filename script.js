const button = document.querySelector(".btn-prs-m");
const welcome = document.querySelector("#welcome");
let user = localStorage.getItem("user");

if (user !== null) {
    button.style.display = "none";
    welcome.textContent = "Hi, " + user + "!";
}
button.addEventListener("click", () => {
    user = prompt("What is your name?");
    if (user !== null && user.trim() !== "") {
        localStorage.setItem("user", user);
        button.style.display = "none";
        welcome.textContent = "Hi, " + user + "!";
    }
});