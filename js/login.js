const usuarios = [
    { nombre: "Juani", contrasena: "campeones" },
    { nombre: "Poma", contrasena: "campeones" },
    { nombre: "Santi", contrasena: "campeones" },
    { nombre: "Pedro", contrasena: "campeones" },
    { nombre: "Lucas", contrasena: "campeones" },
    { nombre: "Esteban", contrasena: "campeones" },
];

function verificarCredenciales(nombre, contrasena, objeto) {
    for (let usuario of objeto) {
        if (usuario.nombre === nombre && contrasena === usuario.contrasena) {
            return true; // Coincidencia encontrada
        }
    }
    return false; // No se encontró coincidencia
}

let signUp = document.getElementById("signUp");
let mailInput = document.getElementById("mailInput");
let signIn = document.getElementById("signIn");
let title = document.getElementById("title");
let submit = document.getElementById("submit");

signIn.onclick = function() {
    mailInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    mailInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

submit.onclick = function() {
    const nombreIngresado = document.getElementById("name").value;
    const contrasenaIngresada = document.getElementById("password").value;

    console.log("Nombre ingresado: ", nombreIngresado);
    console.log("Contraseña ingresada: ", contrasenaIngresada);

    if (title.innerHTML === "Login") {
        const credencialesValidas = verificarCredenciales(nombreIngresado, contrasenaIngresada, usuarios);

        if (credencialesValidas) {
            window.location.href = "index.html";
        } else {
            alert("Error: Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        }
    } else if (title.innerHTML === "Registro") {
        // Aquí puedes manejar el registro de un nuevo usuario si es necesario
        window.location.href = "index.html";
    }
};