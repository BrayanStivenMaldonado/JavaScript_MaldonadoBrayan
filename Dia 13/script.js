//Relacionando los elementos del Html con js para usarlos mas adelante en el proyecto
const carta = document.querySelector('.Carta')
const cartaMaquina = document.querySelector('.CartaMaquina')
const link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const PedirCarta = document.querySelector("#PedirCarta")
const Quedarse = document.querySelector("#Quedarse")


//fetch para hacer el uso de la Api en la que se encuentran los mazos y cartas
fetch(link)
.then(res => res.json())
.then(Data => {
    let DeckId = Data.deck_id //Se saca el id del mazo que nos genera la Api, para posteriormente sacar las cartas
    let Decklink = "https://deckofcardsapi.com/api/deck/"+String(DeckId)+"/draw/?count=20"
    console.log(Decklink)
    fetch(Decklink) //Fetch para hacer uso de las cartas que nos proporciona la Api
    .then(res1 => res1.json())
    .then(Cards => {
        console.log(Cards)

        let fotosCartas = [] //Lista en la que se van a guardar los links de las imagenes de las cartas que nos da el mazo
        let Valores = [] //Lista en la que se van a guardar los valores de las cartas que nos dió el mazo

        Cards.cards.forEach(carta => { //forEach que va a servir para que los datos que nos proporciona la Api se puedan
            console.log(carta.image)   // guardar dentro del programa y usarlos cuando se requiera
            console.log(carta.value)
            fotosCartas.push(carta.image)
            Valores.push(carta.value)
        });



        // Condiciones para que el juego funcione correctamente
        let contador = -1
        total = 0
        PedirCarta.addEventListener("click",DarCarta)
        function DarCarta(){ //funcion para mostrar la carta den
            contador += 1
            if(total>22){
                alert("has perdido")
                carta.innerHTML = " "
            }else{
                    if(Valores[contador]==="ACE"){
                        total += 1
                    }else if(Valores[contador]==="JACK"){
                        total += 10
                    }else if(Valores[contador]==="QUEEN"){
                        total += 11
                    }else if(Valores[contador]==="KING"){
                        total += 12
                    }else{
                        total += parseInt(Valores[contador])
                    }
                    
                    carta.innerHTML += `
                    <img id="CartaUsuario" src=${fotosCartas[contador]}>
                    `

                    carta.innerHTML += `
                    <div class="Crup">
                        <p>${total}</p>
                    </div>
                    <p id="Crupier">Jugador </p>
                    `
            }
            if(total>=22){
                alert("Te has pasado ("+ total +") puntos")
                total = 0
                cartaMaquina.innerHTML = ""
                totalMaquina = 0
                location.reload()
            }
        }

        //Funcion para asignar los valores de la maquina
        let totalMaquina = 0
        function CartasMaquina(){
            contadorMaquina = 10 
            for(let i=0;i<6;i++){
                if(totalMaquina<17){
                    cartaMaquina.innerHTML +=`
                        <img class="Esconder" src=${fotosCartas[contadorMaquina]}>
                        `
                        if(Valores[contadorMaquina]==="ACE"){
                            totalMaquina += 1
                        }else if(Valores[contadorMaquina]==="JACK"){
                            totalMaquina += 10
                        }else if(Valores[contadorMaquina]==="QUEEN"){
                            totalMaquina += 11
                        }else if(Valores[contadorMaquina]==="KING"){
                            totalMaquina += 12
                        }else{
                            totalMaquina += parseInt(Valores[contadorMaquina])
                        }
                        contadorMaquina+=1
                }else{
                    console.log("a")
                }
            }
            cartaMaquina.innerHTML += `
            <div class="Crup Esconder">
                <p>${totalMaquina}</p>
            </div>
            <p id="Crupier" class="Esconder"> <span></span> Crupier</p>
            `
        }
        CartasMaquina()


        // Funcion para que el usuario pueda quedarse
        Quedarse.addEventListener('click',Quedo)
        function Quedo(){
            if(totalMaquina>21 && total<21){
                alert("El dealer se pasó ("+totalMaquina+" puntos), Has ganado")
                cartaMaquina.innerHTML = ""
                totalMaquina = 0
                location.reload()
            }
            else if(total>totalMaquina){
                alert("Has ganado con "+total+" puntos y la maquina sacó "+totalMaquina+" puntos")
                total = 0
                carta.innerHTML = ""
                cartaMaquina.innerHTML = ""
                totalMaquina = 0
                location.reload()
            }else if(total<totalMaquina ){
                alert("Perdiste, la maquina sacó "+totalMaquina+" puntos")
                total = 0
                carta.innerHTML = ""
                cartaMaquina.innerHTML = ""
                totalMaquina = 0
                location.reload()
            }else if(total==totalMaquina){
                alert("EMPATE")
                total = 0
                carta.innerHTML = ""    
                cartaMaquina.innerHTML = ""
                totalMaquina = 0     
                location.reload()   
            }
        }

    })
})
