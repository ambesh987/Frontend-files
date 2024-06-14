const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

document.addEventListener('DOMContentLoaded',()=>{
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const movieList = document.getElementById('movie-list');


    searchButton.addEventListener('click',()=>{
        const check = searchInput.value.trim();
        if(check){
            fetchMovie(check);
        }
    });
    //
    async function fetchMovie(check){
        const url = `${API_URL}?api_key=${API_KEY}&query=${encodeURIComponent(check)}`;

        try{
            const response = await fetch(url);
            const data= await response.json();
            console.log(data.results);
            displayMovies(data.results);
        }catch(error){
            console.error('error fetching movies:',error);
        }
    }

    function displayMovies(movies){
        movieList.innerHTML='';
        movies.forEach(e=>{
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie');

            movieItem.innerHTML=`
            <img src= "https://image.tmdb.org/t/p/w500${e.poster_path}">
            <h2>${e.title}</h2>
            <p>${e.release_date}</p>
            <p>${e.overview}</p>
            `;

            movieList.appendChild(movieItem);
        })
    }
})