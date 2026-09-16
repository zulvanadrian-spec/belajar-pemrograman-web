let aritmatikaAngka1,operatorAritmatika,aritmatikaAngka2,hasilOperatorAritmatika;

document.getElementById('buttonAritmatika').onclick = function(){
    // input
    aritmatikaAngka1 = document.getElementById('aritmatikaAngka1').value;
    aritmatikaAngka2 = document.getElementById('aritmatikaAngka2').valueAsNumber;
    operatorAritmatika = document.getElementById('operatorAritmatika').value;

    // operasi
    hasilOperatorAritmatika = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);
    
    // output
    document.getElementById("hasilOperatorAritmatika").textContent = hasilOperatorAritmatika;

}