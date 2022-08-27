function semana(){
    var week = parseInt(document.getElementById("dia").value);
    var resultado;

    switch(week){
        case 1:
        resultado = document.write("Domingo");
        break;

        case 2:
        resultado = document.write("Segunda-Feira");
        break;

        case 3:
        resultado = document.write("Terça-Feira");
        break;

        case 4:
        resultado = document.write("Quarta-Feira");
        break;

        case 5:
        resultado = document.write("Quinta-Feira");
        break;

        case 6:
        resultado = document.write("Sexta-Feira");
        break;

        case 7:
        resultado = document.write("Sabado");
        break;

        default:
        resultado = document.write("Digite uma opção valida");
        break;

        
    }

}