document.getElementById("Next").addEventListener("click", MostrarNombre())

button.addEventListener("keyup", MostrarPokemon()){
    if (event.keyCode == 13){
        button.click()
    }
}

function MostrarPokemon(){
    let id = document.getElementById("Find").value;
    let url = "https://pokeapi.co/api/v2/pokemon/"+id
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        //Mostar el Gif del Pokemon
        let image = document.getElementById("Image")
        image.innerHTML = `
        <img src="${Data.sprites.other.showdown.front_default}">
        `

        //Mostar el id del Pokemon
        let Id = document.getElementById("PokeId")
        Id.innerHTML = `
        ${Data.id+"ﾠ-ﾠ"}
        `

        //Mostar el nombre del Pokemon
        let Name = document.getElementById("PokeName")
        Name.innerHTML = `
        <p>${Data.name}</p>
        `

    })
}