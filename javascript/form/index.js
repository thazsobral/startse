function welcome() {
    const name = document.querySelector("#name").value;
    alert(`Olá ${name}, seja bem-vindo!`);

    document.getElementById("login-form").style.display = "none";
}