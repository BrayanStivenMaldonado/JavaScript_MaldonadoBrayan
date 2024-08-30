document.getElementById("Button").addEventListener("click", getDataFromAPI)

function getDataFromAPI(){
    let id = parseInt(document.getElementById("FindId").value);
    let url = 'https://swapi.dev/api/people/'+String(id)+"/"
    fetch(url)
    .then(res => res.json())
    .then(data => {
       
        console.log(data)
        document.querySelector("#Data").innerHTML="";
        let Datos = document.querySelector('#Data')
        var newDiv = document.createElement("div");
        var newContent = document.createElement("table");
        newContent.innerHTML=`
        <thead>
        <tr>
            <th>
                <ul class="list-group bg-dark text-light">
                <li class="list-group-item bg-dark text-light">${"Name: "+data.name}</li>
                <li class="list-group-item bg-dark text-light">${"Height: "+data.height}</li>
                <li class="list-group-item bg-dark text-light">${"Mass: "+data.mass}</li>
                <li class="list-group-item bg-dark text-light">${"Hair color: "+data.hair_color}</li>
                <li class="list-group-item bg-dark text-light">${"Skin color: "+data.skin_color}</li>
                <li class="list-group-item bg-dark text-light">${"Eye color: "+data.eye_color}</li>
                <li class="list-group-item bg-dark text-light">${"Birth year: "+data.birth_year}</li>
                <li class="list-group-item bg-dark text-light">${"Gender: "+data.gender}</li>
                <td class="list-group-item bg-dark text-light">${"Homeworld"}
                    <tr class="list-group">
                        <td class="list-group-item">${data.homeworld}</td>
                    </tr>
                </td>
                </ul>
            </th>
        </tr>
        </thead>
        `
        Datos.appendChild(newContent)
    
    })



}