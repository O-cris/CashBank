//Info do usuario
const cristian = {
    usuario: "Cristian",
    cpf: 60002665026,
    senha: "Cristian.2017"
}
//função para exibir com js no html
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
//função do botão login
function botaoLogin() {
    let inputNome = document.querySelector("#inputNome").value;
    let inputSenha = document.querySelector("#inputSenha").value;
    
    if (inputNome == cristian.usuario & inputSenha == cristian.senha) {
        window.open('indexHome.html', '_self');
    } else{
        exibirTextoNaTela("#messagemErrojs", "Senha ou Usuario incorretos");
    }
}



