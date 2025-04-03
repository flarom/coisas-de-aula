const botao = document.getElementById("botao");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const alertas = document.getElementById("alertar")

botao.addEventListener("click", () => {
    let nome = campoNome.value;
    let email = campoEmail.value;

    if(nome.trim() === "" || email.trim() === ""){
        alert("Por favor. Preencha todos os campos");
        alertas.textContent = "";
        return;
    }

    alertas.textContent = "Nome: " + nome + " | Email: " + email;
});

