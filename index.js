
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5e347aa3emsh83ddf0a8da0766ep13759cjsn26ffa1895f30',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

    const pinkFloyd = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink_floyd', options)
    .then(response => response.json())
    .then(songs => {
    
    
        console.log(songs)
    for (let i = 0; i < songs.data.length; i++) {
        const song = songs.data[i];
        const grid = document.querySelector(".container > .row")
        const col = document.createElement("div")
        col.className = "col-sm-6 col-md-4 col-lg-3"
        col.innerHTML = `<div class="card" style="width: 15rem;">
          <img src=${song.album.cover_medium} class="card-img-top" alt=${song.title_short}>
          <div class="card-body">
            <p class="card-text">${song.title}</p>
          </div>
        </div>`
        grid.appendChild(col)
    }})

    .catch(err => console.error(err));
 

}


    const daftPunk = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=daft_punk', options)
    .then(response => response.json())
    .then(songs => {
    
    
        console.log(songs)
    for (let i = 0; i < songs.data.length; i++) {
        const song = songs.data[i];
        const grid = document.querySelector(".container > .row")
        const col = document.createElement("div")
        col.className = "col-sm-6 col-md-4 col-lg-3"
        col.innerHTML = ``
        col.innerHTML = `<div class="card" style="width: 15rem;">
          <img src=${song.album.cover_medium} class="card-img-top" alt=${song.title_short}>
          <div class="card-body">
            <p class="card-text">${song.title}</p>
          </div>
        </div>`
        grid.appendChild(col)
    }})

.catch(err => console.error(err));
}

    const metallica = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', options)
    .then(response => response.json())
    .then(songs => {
    
    
        console.log(songs)
    for (let i = 0; i < songs.data.length; i++) {
        const song = songs.data[i];
        const grid = document.querySelector(".container > .row")
        const col = document.createElement("div")
        col.className = "col-sm-6 col-md-4 col-lg-3"
        col.innerHTML = `<div class="card" style="width: 15rem;">
          <img src=${song.album.cover_medium} class="card-img-top" alt=${song.title_short}>
          <div class="card-body">
            <p class="card-text">${song.title}</p>
          </div>
        </div>`
        grid.appendChild(col)
    }})

    .catch(err => console.error(err));

}

