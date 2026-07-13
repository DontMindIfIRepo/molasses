const button = document.querySelector(".btn-prs-m");
const welcome = document.querySelector("#welcome");
const aftersetup = document.querySelector(".aft-setup");
const now = new Date();
const datetime = document.querySelector("#datetime");
let user = localStorage.getItem("user");
let visits = Number(localStorage.getItem("visits") || 0);
function updateClock() {
    const now = new Date();
    datetime.textContent = now.toLocaleString();
}
aftersetup.style.display = "none";
if (user !== null) {
    aftersetup.style.display = "";
    visits++;

    localStorage.setItem("visits", visits);

    button.style.display = "none";
    welcome.textContent = "Hi, " + user + "! Visit #" + visits;
}

button.addEventListener("click", () => {
    user = prompt("What is your name?");

    if (user !== null && user.trim() !== "") {
        localStorage.setItem("user", user);

        localStorage.setItem("visits", 0);

        location.reload()
    }
});
updateClock();
setInterval(updateClock, 1000);