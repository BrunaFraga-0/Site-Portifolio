function validacaoFormulario() {
    // Seleciona os elementos
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");

    // Resetar as bordas antes de validar novamente
    [campoNome, campoEmail, campoMensagem].forEach((campo) => {
    campo.style.borderColor = "#131f36"; // Volta para a cor padrão definida no CSS
    });

    // Validar campos obrigatórios
    if (campoNome.value.trim() === "" || campoEmail.value.trim() === "" || campoMensagem.value.trim() === "") {
    alert("ATENÇÃO: Campos são obrigatórios (nome, e-mail, mensagem)");
    // Alterar cor do campo para vermelho dos que estiverem vazios
    if (campoNome.value.trim() === "") campoNome.style.borderColor = "red";
    if (campoEmail.value.trim() === "") campoEmail.style.borderColor = "red";
    if (campoMensagem.value.trim() === "")
        campoMensagem.style.borderColor = "red";
    return false; // INTERROMPE O ENVIO DO FORMULÁRIO
    }

    // Validar Nome
    if (campoNome.value.trim().length < 3) {
    // value.trim para remover espaços em branco no início e fim de strings
    alert("ATENÇÃO: o nome deve ter pelo menos 3 caracteres");
    campoNome.style.borderColor = "red";
    campoNome.focus(); // pra levar o cursor do usuário novamente para o campo onde o alerta foi disparado
    return false;
    }

    // Validar E-mail com Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(campoEmail.value)) {
    alert("Por favor, insira um e-mail válido");
    campoEmail.style.borderColor = "red";
    campoEmail.focus();
    return false;
    }

    // Validar Mensagem
    if (campoMensagem.value.trim() === "") {
    alert("Por favor, escreva sua mensagem");
    campoMensagem.style.borderColor = "red";
    campoMensagem.focus();
    return false;
    }

    return true;
}

document.getElementById("formulario").addEventListener("submit", function (evento) {
   if (!validacaoFormulario()) { 
        evento.preventDefault(); // Se o formulario não passar, chama o preventDefault e o formulário não é enviado
    } else {
        alert("Formulário validado! Enviando sua mensagem...");
    }
});

// --- LÓGICA DO MENU SANDUÍCHE ---

const menuToggle = document.querySelector('.menu-toggle');
const menuPrincipal = document.querySelector('.menu-principal');

// Abre e fecha o menu ao clicar no botão de três barrinhas
menuToggle.addEventListener('click', () => {
    menuPrincipal.classList.toggle('ativo');
});

// Fecha o menu automaticamente ao clicar em um link (melhora a UX no celular)
document.querySelectorAll('.menu-principal a').forEach(link => {
    link.addEventListener('click', () => {
        menuPrincipal.classList.remove('ativo');
    });
});