//Ejemplo con Ajax


document.getElementById('button').addEventListener('click', getDataFromAPI);
function getDataFromAPI(){
    fetch('https://api.github.com/users')
    .then(res=> res.json())
    .then( data=> {

        let output = '';

        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });

        document.getElementById('output').innerHTML = output;

    });

}

//Ejemplo de HXMLHTTPRequest

function fetchAPI(){
    let xhr = new XMLHttpRequest();
    let url = 'https://api.github.com/users';

    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log('Este es XML: '+response[0]["login"])
        }
    }

    xhr.send();
}

fetchAPI()