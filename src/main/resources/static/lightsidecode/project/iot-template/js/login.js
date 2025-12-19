function login() {
    window.location.href = "details.html";
}

const loginButton = document.getElementById("login");
const pressEnter = document.getElementById("container");

loginButton.addEventListener('click', login);

pressEnter.addEventListener('keydown', function(event) {
    console.log('Klawisz wciśnięty (addEventListener):', event.key);

    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("login").click();
    }
});
