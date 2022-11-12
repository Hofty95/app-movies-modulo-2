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

    }
}

console.log(moviesDH.searchMovies(2))