//Parte inicial do Prompt

var nome = prompt("Digite seu nome: ");
alert("Bem vindo " + nome + " Digite o login e senha para continuar ");

var login = prompt("Login: ");
var password = prompt("Password: ");


if((login == "LocalHost") && (password == "LocalHost8080")){
    document.write("Bem vindo " + nome + "<br>");
}
else{
    alert("Usuário ou Senha incorretos");
    window.location.replace('index.html')
}

//Parte das caixas de texto para usuario e senha.

function entrar(){
    var usuario = document.getElementById("txtUsuario").value;
    var senha = document.getElementById("txtSenha").value;
    
    if((usuario == "root") && (senha == "Root102030")){
        window.location.replace('acessoPermitido.html');
    }
    else{
        window.location.replace('acessoNegado.html');
    }

}




