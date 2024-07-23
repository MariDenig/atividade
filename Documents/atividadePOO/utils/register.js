var user = {
    name: "",
    username: "",
    email: "",
    password: ""
}

var users = JSON.parse(localStorage.getItem("users"));

if (localStorage.getItem("user")) {
    window.location.href = "profile.html"
}

function register() {
    let name = document.getElementById("nome").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        return;
    }

    if (username.length < 6 || username.length > 15) {
        alert("O nome de usuário deve ter entre 6 e 15 caracteres");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres");
        return;
    }

    if (!email.includes("@")) {
        alert("O email deve ser válido");
        return;
    }

    userData(name, username, email, password);

    if (!users.find((usuario) => usuario.username === username)) {
        users.push({ ...user });
        saveData();
        window.location.href = "profile.html";
    } else {
        alert("Usuário já cadastrado");
        return;
    }

    console.log(users);
}

function userData(name, username, email, password) {
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;
    console.log("Usuário registrado");
}

function saveData() {
    localStorage.setItem("users", JSON.stringify(users));
}