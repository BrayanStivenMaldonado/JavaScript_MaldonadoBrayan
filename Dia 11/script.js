const profile = document.querySelector("#Profile");
const etiqueta = document.querySelector("#Saludo");
const Dato = document.querySelector("#Data");
const user = document.querySelector("#user");
const mail = document.querySelector("#mail");
const birthday = document.querySelector("#birthday");
const ubi = document.querySelector("#location");
const phone  = document.querySelector("#phone");
const password = document.querySelector("#password");

let cards = document.getElementsByClassName("image");
let previous = cards[0];

for(const card of cards){ // para cada div
    card.addEventListener("mouseenter",() => { // agrego un evento que de dispara al entrar al div
      if(!card.classList.contains("selected")) { // si ese div no contiene la clase first_col:
        previous.classList.remove("selected") // le remueve dicha clase al div seleccionado por defecto
        previous = card; // ahora previous (el div por defecto) es igual al div que disparo este evento
        card.classList.add("selected") // finalmente le agregamos la clase first_col al div disparador
      }
    })
  }

const url = "https://randomuser.me/api/";
fetch(url)
.then(res => res.json())
.then(Data => {
    console.log(Data)
    console.log(Data.results[0]["name"]["title"],Data.results[0]["name"]["first"],Data.results[0]["name"]["last"])
    console.log(Data.results[0]["gender"])
    console.log(Data.results[0]["email"])
    console.log(Data.results[0]["dob"]["date"])
    console.log(Data.results[0]["location"]["postcode"],Data.results[0]["location"]["city"])
    console.log(Data.results[0]["phone"])
    console.log(Data.results[0]["login"]["password"])
    console.log(Data.results[0]["picture"]["large"])

    profile.src = Data.results[0]["picture"]["large"]
    etiqueta.innerHTML = "Hi,my name is"
    Dato.innerHTML = Data.results[0]["name"]["first"]+" "+Data.results[0]["name"]["last"]

    function reset(){
        Dato.innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    }

    function CambiarNombre(){
        etiqueta.innerHTML = "Hi,my name is"
        Dato.innerHTML = Data.results[0]["name"]["first"]+" "+Data.results[0]["name"]["last"]
    }
    user.onmouseover = CambiarNombre

    function CambiarMail(){
        etiqueta.innerHTML = "My email address is"
        Dato.innerHTML = Data.results[0]["email"]
    }
    mail.onmouseover = CambiarMail

    function CambiarCumple(){

        let text = Data.results[0]["dob"]["date"]
        let fecha = []
        for (const i of text){
            fecha.push(i)
        }
        anio = (fecha[0]+fecha[1]+fecha[2]+fecha[3])
        mes = (fecha[8]+fecha[9])
        dia = (fecha[5]+fecha[6])
        const date = (dia+"/"+mes+"/"+anio)
        etiqueta.innerHTML = "My birthday is"
        Dato.innerHTML = date
        
    }
    birthday.onmouseover = CambiarCumple

    function Cambiarubi(){
        etiqueta.innerHTML = "My address is"
        Dato.innerHTML = Data.results[0]["location"]["street"]["number"]+" "+Data.results[0]["location"]["street"]["name"]
    }
    ubi.onmouseover = Cambiarubi

    function CambiarPhone(){
        etiqueta.innerHTML = "My phone number is"
        Dato.innerHTML = Data.results[0]["phone"]
    }
    phone.onmouseover = CambiarPhone

    function CambiarPass(){
        etiqueta.innerHTML = "My password is"
        Dato.innerHTML = Data.results[0]["login"]["password"]
    }
    password.onmouseover = CambiarPass

})







