//ex.02
let clique = document.getElementById('clique');
let resultado = document.getElementById('resultado');

function Mostrar() {
    resultado.innerHTML = 'olá, ' + clique.value + ", tudo bem?";
}


//ex.03
var Vmetros = document.getElementById("metros")
var Vcentimetros = document.getElementById("resultadoConversao")
function transferir(){
Vcentimetros.innerHTML = parseFloat(Vmetros.value) + "cm é igual a " + parseFloat(Vmetros.value) / 100;
}


//ex.04
let pegaNumero = document.getElementById("valor")
let n1MaisUm = document.getElementById("sucessor")
let n1MenosUm = document.getElementById("antecessor")

function descobrir(){
    n1MaisUm.innerHTML = parseFloat(pegaNumero.value) + 1;
    n1MenosUm.innerHTML = parseFloat(pegaNumero.value) -1 ;
}



//ex.05
function compararNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = "";

    if (num1 > num2) {
        resultado = "O maior número é: " + num1;
    } else if (num2 > num1) {
        resultado = "O maior número é: " + num2;
    } else {
        resultado = "Os números são iguais.";
    }

    document.getElementById('resultado').innerText = resultado;
}



//ex.6




//ex.07
a = 1
while (a <= 100){
    console.log(a)
    a = a + 1
}



//ex.08
a = 0
while (a <= 50){
    console.log(a)
    a = a + 5
}



//ex.09
a = 100
while (a >= 0){
    console.log(a)
    a = a - 10
}

