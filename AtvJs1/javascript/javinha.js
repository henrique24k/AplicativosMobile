/*var nome = prompt("qual é o seu nome?")
    alert("Olá " + nome + " Aqui vamos calcular sua media")
*/
function atv1()
{
    alert("interagindo com o botao");
}


function atv2()
{  
    var nome = prompt("Digite seu nome");
    alert("Ola " + nome + " seja bem vindo");
}

function atv3(){
    var num = prompt("Digite um numero para calcular: ");
    var dobro = num * 2;
    var metade = num / 2;

    document.write("O dobro de " + num + " é " + dobro + " e a metade é " + metade);

}

function atv4(){
    var portugues = parseFloat(prompt("Digite sua nota " + nome));
    var matematica = parseFloat(prompt("Além de " +portugues+ " Qual foi sua nota: "));

    var media = parseFloat((portugues+matematica) / 2);


    if(media > 9){
        document.write("Muito bem! | ");
    }
    else if (media < 4){
        document.write("Ruim | ");
    }
    else{
        document.write("Mediano | ");
    }
    document.writeln("Sua media foi de " + media);
}

function atv5(){
    var num1 = parseInt(prompt("Digite um numero"));
    var num2 = parseInt(prompt("Digite outro numero"));

    if(num1 > num2){
        document.write("Analizando " +num1+ " e " + num2 + " O maior Valor é " + num1);
    }
    else if(num1 < num2){
        document.write("Analizando " +num1+ " e " + num2 + " O maior Valor é " + num2);
    }
    else{
        document.write("Numeros iguais");
    }

}