const profile = document.querySelector("#Profile")
const etiqueta = document.querySelector("#Saludo")
const Dato = document.querySelector("#Data")
const user = document.querySelector("#user")
const mail = document.querySelector("#mail")

const url = "https://randomuser.me/api/"

fetch(url)
.then(res => res.json())
.then(Data => {
    console.log(Data.results[0]["name"]["title"],Data.results[0]["name"]["first"],Data.results[0]["name"]["last"])
    console.log(Data.results[0]["gender"])
    console.log(Data.results[0]["email"])
    console.log(Data.results[0]["dob"]["date"])
    console.log(Data.results[0]["location"]["postcode"],Data.results[0]["location"]["city"])
    console.log(Data.results[0]["phone"])
    console.log(Data.results[0]["login"]["password"])
    console.log(Data.results[0]["picture"]["large"])

    profile.src = Data.results[0]["picture"]["large"]
    // etiqueta.innerHTML = "Hi,my name is"
    // Dato.innerHTML = Data.results[0]["name"]["first"]+" "+Data.results[0]["name"]["last"]

    user.addEventListener("mouseover",CambiarNombre())
    function CambiarNombre(){
        etiqueta.innerHTML = "Hi,my name is"
        Dato.innerHTML = Data.results[0]["name"]["first"]+" "+Data.results[0]["name"]["last"]
    }

    mail.addEventListener("mouseover",CambiarMail())
    function CambiarMail(){
        etiqueta.innerHTML = "My email address is"
        Dato.innerHTML = Data.results[0]["email"]
}
})







