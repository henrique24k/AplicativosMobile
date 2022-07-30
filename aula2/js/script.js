/*O JavaScrip funciona mais do lado do cliente "Usuário mediocre",
 já o PHP funciona do lado do servidor, por isso conseguimos copiar o javaScript de um site em javascript no inspecionar e do PHP não.*/

/*window.alert("Olá");
document.write("Boa noite");*/

/*
var nome = "Henrique"; //string
var idade = 20; // inteiro - se eu colocar aspas nele ele vira tipo string. Com isso nao vai conseguir fazer conta se precisar.
var altura = 1.83; // float
var filhos = false; // booleano

document.write(
"Nome: " + nome +
 " <br/>Idade: " + idade + 
 " <br/>Altura: " + altura + 
 " <br/>Filhos? " + filhos
 );
*/

/*var n1 = prompt("Digite um valor"); //o Prompt entra do tipo texto tem que converter!.
var n2 = prompt("Digite outro valor");

var total = n1 + n2;//o Prompt entra do tipo texto tem que converter se não vai concatenar!.

//var total = parseInt(n1) + parseInt(n2);

alert(total);

document.write("o resultado é de: " + total);
*/



/*var peso = parseFloat(prompt("Digite seu peso"));
var altura = parseFloat(prompt("Digite sua a altura"));
var imc = peso / (altura * altura);

alert("Seu imc é " + imc);

if(imc > 25){
    document.write("Acima do peso");
}
else if(imc < 10){
    document.write("Abaixo do peso");
}
else{
    document.write("Peso Normal!");
}
*/

function calculadora()
{
    var n1 = parseFloat(document.getElementById("cx1").value);
    var n2 = parseFloat(document.getElementById("cx2").value);
var total = parseFloat(n1)+parseFloat(n2);

    document.getElementById("resultado").value = n1 + n2;

    if(total >= 100)
    {
        alert("Total acima de 100");
    }
    else
    {
        alert("total abaixo de 100");
    }

}



