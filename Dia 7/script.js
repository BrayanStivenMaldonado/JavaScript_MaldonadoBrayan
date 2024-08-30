document.getElementById('button1').addEventListener('click', getDataFromAPI);
function getDataFromAPI(){
    let id = parseInt(document.getElementById("SuperId").value);
    if (id<1 || id>731) {
        alert("This id isn't available (Max range: 731)")
    }else{
        let url = 'https://superheroapi.com/api.php/6aac02713fe9774884d0213abf2cc533/'+String(id)
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            document.querySelector("#TableName tbody").innerHTML="";
            let TablaNombre = document.querySelector("#TableName tbody");
            var fila = document.createElement('tr');
            fila.innerHTML= `
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td><img src="${data.image.url}"></td>
            `;
            TablaNombre.appendChild(fila);

            document.querySelector("#TablePowerStats tbody").innerHTML="";
            let TablePowerStats = document.querySelector("#TablePowerStats tbody")
            fila = document.createElement("tr");
            fila.innerHTML=`
            <td>${data.powerstats.intelligence}</td>
            <td>${data.powerstats.strength}</td>
            <td>${data.powerstats.speed}</td>
            <td>${data.powerstats.durability}</td>
            <td>${data.powerstats.power}</td>
            <td>${data.powerstats.combat}</td>
            `;
            TablePowerStats.appendChild(fila);

            document.querySelector("#TableBiography tbody").innerHTML="";
            let TableBiography = document.querySelector("#TableBiography tbody")
            fila = document.createElement("tr");
            fila.innerHTML=`
            <td>${data.biography["full-name"]}</td>
            <td>${data.biography["alter-egos"]}</td>
            <td>${data.biography["aliases"].map(i => i).join('<br>')}</td>
            <td>${data.biography["place-of-birth"]}</td>
            <td>${data.biography["first-appearance"]}</td>
            <td>${data.biography["publisher"]}</td>
            <td>${data.biography["alignment"]}</td>
            `;
            TableBiography.appendChild(fila)

            document.querySelector("#TableAppearance tbody").innerHTML="";
            let TableAppearance = document.querySelector("#TableAppearance tbody")
            fila = document.createElement("tr");
            fila.innerHTML=`
            <td>${data.appearance["gender"]}</td>
            <td>${data.appearance["race"]}</td>
            <td>${data.appearance["height"].map(i => i).join('<br>')}</td>
            <td>${data.appearance["weight"].map(i => i).join('<br>')}</td>
            <td>${data.appearance["eye-color"]}</td>
            <td>${data.appearance["hair-color"]}</td>
            `
            TableAppearance.appendChild(fila);

            document.querySelector("TableWork tbody").innerHTML="";
            let TableWork = document.querySelector("#TableWork tbody")
            fila = document.createElement("tr");
            fila.innerHTML=`
            <td>${data.work.occupation}</td>
            <td>${data.work.base}</td>
            `
            TableWork´´´´´´fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        });


    }
}