const images = document.getElementById("images");

const search = document.getElementById("search");

const submit = document.getElementById("submit");

function imgs() {
    images.innerHTML = "";
    getData(search.value);
}

submit.addEventListener('click', imgs);

function getData(query){
    fetch('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=AWPmNeZQjU5gVEjv9qGiaCOl3PnvX63W&limit=5')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        renderData(myJson);
        //console.log(JSON.stringify(myJson));
    });
}

function renderData(data) {
    console.log(data.data);
    for(let i = 0; i < data.data.length; i++){
        const img = document.createElement('img');
        img.src = data.data[i].images.original.url;

        images.appendChild(img)
    }
}

getData();