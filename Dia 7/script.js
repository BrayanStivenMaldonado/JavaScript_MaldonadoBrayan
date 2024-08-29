document.getElementById('button1').addEventListener('click', getDataFromAPI)
function getDataFromAPI(){
    fetch('https://superheroapi.com/api/6aac02713fe9774884d0213abf2cc533/70')
    .then(res=> res.json())
    .then(data => {
        console.log(data);
    })
}