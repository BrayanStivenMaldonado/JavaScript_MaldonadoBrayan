class CrearElementos extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
            <div class="arriba">
                <h1>Live User Filter</h1>
                <p>Search by name and/or location</p>
                <input type="text" id="search" placeholder="Search">
            </div>
            <div class="content">
            </div>
        `
    }
}
customElements.define('new-content',CrearElementos)


const content = document.querySelector(".content")
fetch("https://66e45ac5d2405277ed14047d.mockapi.io/Users")
.then(res => res.json())
.then(data =>{
    for(const i of data){
       console.log(i)

       content.innerHTML += `
        <div class="persona">
            <img src=${i.avatar} alt="person">
            <div class="info">
                <h1  id="name">${i.name_full}</h1>
                <h3 id="infoPer">${i.description}</h3>
            </div>
        </div>
        `
    }   
    document.addEventListener("keyup", e=>{
        if(e.target.matches("#search")){
            console.log(e.target.value)
            document.querySelectorAll(".persona").forEach(nombre=>{
                nombre.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ?nombre.classList.remove("filtro")
                :nombre.classList.add("filtro")
            })

        }
    })
})