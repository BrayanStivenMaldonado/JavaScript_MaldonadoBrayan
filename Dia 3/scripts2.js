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

let numero = prompt("Numero: ")
var Digits = Separate(numero)

const xd = Digits.length

console.log(xd)