let PokemonId = 1


document.getElementById("Prev").addEventListener("click", function(){
    PokemonId--;
    MostrarPokemon(PokemonId)
})

document.getElementById("Next").addEventListener("click", function(){
    PokemonId++;
    MostrarPokemon(PokemonId)
})

document.getElementById("Find").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        PokemonId = parseInt(document.getElementById("Find").value, 10);
        MostrarPokemon(PokemonId);
    }
})

function MostrarPokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/"+id;
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        //Mostar el Gif del Pokemon
        let image = document.getElementById("Image")
        image.innerHTML = `
        <img src="${Data.sprites.other.showdown.front_default}">
        <audio autoplay src="${Data.cries.latest}">
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