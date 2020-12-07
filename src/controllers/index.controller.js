const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('src/data/movies.json'));
let sucursales = JSON.parse(fs.readFileSync('src/data/theaters.json'));

module.exports = {
    home: (req, res) => {
        let moviesList = movies.movies.map(movie => movie.title);
        let moviesAlfa = moviesList.sort();

        res.render('index', {movies, moviesAlfa});
    },
    enCartelera: (req, res) => {
        res.render('cartelera', {movies});
    },
    masVotadas: (req, res) => {
        let moviesAverage = movies.movies.filter(movie => movie.vote_average >= 7);
        let moviesTopTen = moviesAverage.map(movie => movie.vote_average);
        let totalMovies = moviesTopTen.length;
        
        let reduceVotes = moviesTopTen.reduce((totalVotes, vote) => totalVotes + vote);
        let average = reduceVotes / totalMovies;
        let rounded = average.toFixed(2);

        res.render('masVotadas', {moviesAverage, totalMovies, rounded});
    },
    sucursales: (req, res) => {
        res.render('sucursales', {sucursales});
    },
    contacto: (req, res) => {
        res.send('Contacto');
    },
    faqs: (req, res) => {
        res.send('Mas votadas');
    }
}