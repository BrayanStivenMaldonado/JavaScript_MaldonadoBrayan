document.getElementById("Find").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        PersonajeId = parseInt(document.getElementById("Find").value, 10);
        MostarPersonaje(PersonajeId);
    }
})

function MostarPersonaje(id){
    let url = "https://rickandmortyapi.com/api/character/"+id
    fetch(url)
    .then(res => res.json())
    .then (Data => {
        let Content = document.getElementById("Content")
        Content.innerHTML = `
        <h1>${Data.name}</h1>
        <img src=${Data.image}>
        `

        PersonajesE = document.getElementById("PersonajesE")
        PersonajesE.innerHTML = ""
        for (const i of Data.episode)
            fetch(i)
            .then(res1 => res1.json())
            .then(DataEpisode => {
                ContentEpisodes = document.getElementById("Episodes")
                ContentEpisodes.innerHTML = `
                <h1>Name: ${DataEpisode.name}</h1>
                <h1>Air Date: ${DataEpisode.air_date}</h1>
                `
                
                for (const i of DataEpisode.characters)
                    fetch(i)
                    .then(res => res.json())
                    .then(CharEp =>{
                        PersonajesE = document.getElementById("PersonajesE")     
                        PersonajesE.innerHTML += `
                        <h1>${CharEp.name}</h1>
                        <img src="${CharEp.image}">
                        `
                    }
                    )

                

            })
    })

}