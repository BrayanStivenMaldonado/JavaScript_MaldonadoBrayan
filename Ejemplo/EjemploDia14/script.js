//Creacion de un elemento personalizable (webComponents General)
class crearBoton extends HTMLElement {
    constructor(){
        super();
        this.textContent = '¡Haz click aquí!';
        this.addEventListener('click',()=>alert("Hiciste click!"))
    }
}
customElements.define('mi-boton',crearBoton)
   
//-------------------------------------------------------------------
// Creacion de un elemento personalizable (ShadowDom)
class crearBotonShadow extends HTMLElement {
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML = `
        <button>Soy un boton lindo!</button>
        <mi-boton></mi-boton>
        `
    }
}
customElements.define('boton-shadow',crearBotonShadow)