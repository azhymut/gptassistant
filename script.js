const correctPassword = "minhaSenha123"; // Defina sua senha aqui
const loginForm = document.getElementById("login-form");
const assistantFrame = document.getElementById("assistant-frame");

function validatePassword() {
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === correctPassword) {
        loginForm.style.display = "none";
        assistantFrame.classList.remove("hidden");
    } else {
        alert("Senha incorreta!");
    }
}

// Mostra o formulário de login ao carregar a página
window.onload = function () {
    loginForm.style.display = "flex";
};
