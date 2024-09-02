document.getElementById("Next").addEventListener("click", MostrarNombre())



function MostrarPokemon(){
    let id = document.getElementById("Find").value;
    let url = "https://pokeapi.co/api/v2/pokemon/"+id
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        let image = document.getElementById("Image")
        image.innerHTML = `
        <img src="${Data.sprites.other.showdown.back_default}">
        `



        //Mostar el nombre del Pokemon
        let Name = document.getElementById("PokeName")
        Name.innerHTML = `
        <p>${Data.name}</p>
        `
    })
}