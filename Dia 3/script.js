//Function to separate numbers 
function Separate(number) {
    const Digits = [];
    const NumberSeparated = number.toString(); //Convert the number to string 

    for (let i = 0; i<NumberSeparated.length; i++) {
        const Digit = parseInt(NumberSeparated[i]); //Convert each caracter back to a number
        Digits.push(Digit);
    }
    return Digits;
}
//Function to Reduce list
function Reduce(Digits) {
    Value = 0
    console.log(Digits);
    for (let i = 0; i < Digits.length; i++) {
        Value += Digits[i];
        numero = Value
    } 
    return numero
}
//Program Start
let numero = prompt("Numero: ");
let Digits = Separate(numero);
while(Digits.length>1){
    let Numerote = Reduce(Digits)
    console.log(Numerote)
    Digits = Separate(Numerote)
}