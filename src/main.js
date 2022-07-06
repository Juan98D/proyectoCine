const BASE = 'https://api.themoviedb.org/3';
const BASE_IMAGE = 'https://image.tmdb.org/t/p/w200';

async function getTrendingMoviesPreview () {
    const res = await fetch(BASE + '/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
    console.log(movies)
    
    movies.forEach(element => {
        //Creación de elements
        const destacados = document.getElementById('destacados');
        const movieConteiner = document.createElement('article');
        const movieCard = document.createElement('div');
        const movieTitle = document.createElement('h3');
        const img = document.createElement('img');
        const parrafo = document.createElement('p');

        //Creación de los textos que agregaremos en cada element
        const cardTitle = document.createTextNode(`${element.original_title}`);

        //Asignación de clases
        movieConteiner.className = 'movie-container--card';
        movieCard.className = 'movie-cards';
        movieTitle.className = 'cards-title';
        img.className = 'img-card';
        parrafo.className = 'cards-parrafo';

        //Agregar Atributos a los elementos
        img.alt = `Poster de la pelicula ${element.original_title}`
        img.src = `${BASE_IMAGE}/${element.poster_path}`

        //Agregar al HTML
        destacados.appendChild(movieConteiner);
        movieConteiner.appendChild(movieCard);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(img);
        movieCard.appendChild(parrafo);

        //Agregamos los textos a los elementos
        movieTitle.appendChild(cardTitle);

    });
}

getTrendingMoviesPreview()