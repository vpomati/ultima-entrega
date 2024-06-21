
// Supuesta tabla de usuarios con nombres y contraseñas
const usuarios = [
    { nombre: "Juani", contrasena: "campeones" },
    { nombre: "Poma", contrasena: "campeones" },
    { nombre: "Santi", contrasena: "campeones" },
    { nombre: "Pedro", contrasena: "campeones" },
    { nombre: "Lucas", contrasena: "campeones" },
    { nombre: "Esteban", contrasena: "campeones" },
    // Agrega más usuarios aquí según sea necesario
];

function verificarCredenciales(nombre,contrasena,objeto) {
    // Itera sobre los usuarios y verifica si hay una coincidencia
    for (let usuario of objeto) {
        if (usuario.nombre === nombre && contrasena === usuario.contrasena) {
            return true; // Coincidencia encontrada
        }
    }
    return false; // No se encontró coincidencia
}


let signUp = document.getElementById("signUp");
let mailInput = document.getElementById("mailInput")
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let passwordInput= document.getElementById("passwordInput")
let title = document.getElementById("title");
let submit = document.getElementById("submit");

/* tengo una lista de objetos, con cada usuario y adentro de cada usuario nameuser, y contrasena*/

signIn.onclick = function(){
    mailInput.style.maxHeight= "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick = function(){
    mailInput.style.maxHeight= "60px";
    title.innerHTML = "Register";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
/*  mandar un form submit.com*/
submit.onclick = function() {
    if (title.innerHTML === "Login") {
        // Si estás en modo de inicio de sesión
        const nombreIngresado = document.getElementById("nameInput").value;
        const contrasenaIngresada = document.getElementById("passwordInput").value;

        // Verifica las credenciales ingresadas
        const credencialesValidas = verificarCredenciales(nombreIngresado, contrasenaIngresada, usuarios);

        if (credencialesValidas) {
            // Si las credenciales son válidas, redirige a index.html
            window.location.href = "index.html";
        } else {
            // Si las credenciales no son válidas, muestra una alerta de error
            alert("Error: Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        }
    } else if (title.innerHTML === "Register") {

        // Redirige a index.html después de registrar al usuario
        window.location.href = "index.html";
    }
};