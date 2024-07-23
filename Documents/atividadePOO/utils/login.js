var users = JSON.parse(localStorage.getItem("users"));

if (localStorage.getItem("user")) {
    window.location.href = "profile.html"
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("senha").value;

    let user = users.find((usuario) => usuario.username == username);

    if (users.find((usuario) => usuario.username == username && usuario.password == password)) {
        saveData(user);
        window.location.href = "profile.html"
    } else {
        alert("Usuário ou senha inválidos");
    }
}

function saveData(user) {
    localStorage.setItem("user", JSON.stringify(user));
}