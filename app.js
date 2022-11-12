const movies = require ("./movies")

const moviesDH = {
    listMovies : function (){
        console.log(movies)
    },
    searchMovies : function(id){
        let movieFound;
        movieFound = movies.filter(function (movie){
            return movie.id === id
        })
        return movieFound.length ? movieFound : "no se encuentra la pelicula requerida"

    },
    searchMoviesByGenre : function(genre){
        let movieByGenre;
        movieByGenre = movies.filter(function (movie){
            return movie.genre === genre
        })
        return movieByGenre.length ? movieByGenre : "no hay peliculas de ese genero"
    }
}

console.log(moviesDH.searchMoviesByGenre("Animación..."))