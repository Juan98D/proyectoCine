const BASE = 'https://api.themoviedb.org/3';
const BASE_IMAGE = 'https://image.tmdb.org/t/p/w200';


function ellipsis_box(elemento, max_chars){
	limite_text = elemento;
	if (limite_text.length > max_chars) {
	    limite = limite_text.substr(0, max_chars)+" ...";
	    elemento += limite;
        return limite;

	}
}

async function getTrendingMoviesPreview () {
    const res = await fetch(BASE + '/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
    console.log(movies)
    
    movies.forEach(element => {

        let x = element.overview;
        let text = ''
            
        if (x.length < 200){
            text = element.overview
        }else{
            text = (ellipsis_box(x, 200));
        }
        
        //Creación de elements
        const destacados = document.getElementById('destacados');
        const movieConteiner = document.createElement('article');
        const movieCard = document.createElement('div');
        const movieTitle = document.createElement('h3');
        const img = document.createElement('img');
        const parrafo = document.createElement('p');
        const btnVerMas = document.createElement('button')

        //Creación de los textos que agregaremos en cada element
        const cardTitle = document.createTextNode(`${element.original_title}`);
        const description = document.createTextNode(`Sinopsis: ${text}`)
        const verMas = document.createTextNode('ver más');

        //Asignación de clases
        movieConteiner.className = 'movie-container--card';
        movieCard.className = 'movie-cards';
        movieTitle.className = 'cards-title';
        img.className = 'img-card';
        parrafo.className = 'cards-parrafo';
        btnVerMas.className = 'boton-ver_mas';

        //Agregar Atributos a los elementos
        img.alt = `Poster de la pelicula ${element.original_title}`;
        img.src = `${BASE_IMAGE}/${element.poster_path}`;

        //Agregar al HTML
        destacados.appendChild(movieConteiner);
        movieConteiner.appendChild(movieCard);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(img);
        movieCard.appendChild(parrafo);

        //Agregamos los textos a los elementos
        movieTitle.appendChild(cardTitle);
        parrafo.appendChild(description);
        btnVerMas.appendChild(verMas);

    });
}

getTrendingMoviesPreview()