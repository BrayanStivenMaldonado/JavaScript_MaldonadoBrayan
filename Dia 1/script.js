//Imprimir datos en consola 
console.log("Hola Marte!");

//Tipo de Dato - Number
num1 = 1;
num2 = 3.14;

//verificación de tipo de datos 
console.log(typeof num1);
console.log(typeof num2);

//Operaciones
operacion = ((((5**6)+256)/5)*2);
console.log(operacion);

//String
text1 = "Campus";
text2 = "Lands";

//Concatenación
console.log(text1+text2);

//Booleanos
booleano1 = true;
booleano2 = false;
booleano3 = false;
booleano4 = true;
OperadoresBandera = (booleano1 || booleano2) & (booleano3 || booleano4)

console.log(OperadoresBandera);


//Acorde con la edad de una persona, imprime el año en el que nació
function CalcularNacimiento (Edad) {
    return 2024-Edad;
}
let AñoNacimiento = CalcularNacimiento(17);
console.log("Naciste en",AñoNacimiento);

//Toma el valor de grados celsius
function Fahrenheit (Celsius) {
    return 32+(9*Celsius/5);
}
let GradosFahrenheit = Fahrenheit(100);
console.log("Equivale a",GradosFahrenheit,"° Fahrenheit");

//Saber cuánto descuento tiene el cliente, según el orden en el que llegó
function CalcularDescuento(Entrada){
    if (Entrada<=20){
        Descuento = "20%";
    }else if(Entrada>20 & Entrada<=50){
        Descuento = "10%";
    }else {
        Descuento = "0%";
    }
    return Descuento
}
let TotalDescuento = CalcularDescuento(15);
console.log("Tu descuento es de "+TotalDescuento);

//Tipos de funciones 

//Con parámetro y sin retorno
function Saludar(Nombre){
    console.log("Hola, "+Nombre +"!")
}
const Saludo = Saludar("Brayan")

//Sin parámetro y con retorno
function ObtenerNumero(){
    return 42
}
let Numero = ObtenerNumero()
console.log(Numero)

//Sin parámetro y sin retorno
function Mensaje(){
    console.log("Esta es una función sin parámetro y sin retorno")
}
Mensaje()

//Con parámetro y con retorno
function CalcularCuadrado(num){
    return num*num
}
var Resultado = CalcularCuadrado(8)
console.log(Resultado)