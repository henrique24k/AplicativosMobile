function resultado(){
    var ponto = 0;
    if(document.getElementById('corretap1').checked){
        ponto ++;
    }

    if(document.getElementById('corretap2').checked){
        ponto++;
    }

    if(document.getElementById('corretap2').checked){
        ponto++;
    }

    alert("Sua pontuação foi: " + ponto);

}