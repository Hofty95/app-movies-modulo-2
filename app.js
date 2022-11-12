const movies = require ("./movies")

const moviesDH = {
    listMovies : function (){
        console.log(movies)
    }
}

return moviesDH.listMovies()