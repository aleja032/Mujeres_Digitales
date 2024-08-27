// "Calculadora atravez de funciones"
function suma(a,b){
     return a+b;
}
function resta(a,b){
    return a-b;
}
function multiplicacion(a,b){
    return a*b;
}
function divicion(a,b){
    return a/b;
    
}
var a=24, b=100;
alert(suma(a,b));

var resta=a-b;
var multiplicacion =a*b;
var divicion=a/b;

// Suma de todos los numeros que sean par

function sum_par(num){
    let sum=0
    for(let i=0; i<=50; i++){
        if(num % 2 ==0){
            sum=+i;
        }
    }
 return sum;
}

console.log("El valor de la suma es:"+sum_par(2))




// Determinar si es par o impar 
let a= 5 % 2 == 0 ? "par":"impar";

console.log(a);



