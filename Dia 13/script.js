const carta = document.querySelector('.Carta')
const link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const PedirCarta = document.querySelector("#PedirCarta")
const Quedarse = document.querySelector("#Quedarse")

fetch(link)
.then(res => res.json())
.then(Data => {
    let DeckId = Data.deck_id
    let Decklink = "https://deckofcardsapi.com/api/deck/"+String(DeckId)+"/draw/?count=20"
    console.log(Decklink)
    fetch(Decklink)
    .then(res1 => res1.json())
    .then(Cards => {
        console.log(Cards)
        // console.log(parseInt(Cards.cards[0].value))
        // console.log(Cards.cards[0].suit)

        let fotosCartas = []
        let Valores = []

        Cards.cards.forEach(carta => {
            console.log(carta.image)
            console.log(carta.value)
            fotosCartas.push(carta.image)
            Valores.push(carta.value)
        });
        console.log(fotosCartas)
        console.log(Valores)


        // let total = 0

        // total += parseInt(Valores[1])+parseInt(Valores[0])
        // console.log(total)
        // for (let i = 0;i<fotosCartas.length;i++){

        //         if(Valores[i]==="ACE"){
        //             total += 1
        //         }else if(Valores[i]==="JACK"){
        //             total += 10
        //         }else if(Valores[i]==="QUEEN"){
        //             total += 11
        //         }else if(Valores[i]==="KING"){
        //             total += 12
        //         }else{
        //             total += parseInt(Valores[i])
        //         }

        //         if(total<21){
        //             carta.innerHTML += `
        //             <img src=${fotosCartas[i]}>
        //             `
        //         }   
        // }
        // console.log(total)



        let contador = -1
        total = 0
        PedirCarta.addEventListener("click",DarCarta)
        function DarCarta(){
            contador += 1

            if(total>21){
                alert("has perdido")
                carta.innerHTML = " "
                return
            }

            carta.innerHTML += `
                    <img src=${fotosCartas[contador]}>
                    `
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
            console.log(total)
        }
        // let total = 0

        // while(total <= 21){
        //     carta.innerHTML += `
        //     <img src=${Cards.cards[0].image}>
        //     `
        //     total += parseInt(Cards.cards[0].value)
        // }
        // console.log(total)
    })
})

