const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('src/data/movies.json'));

module.exports = {
    home: (req, res) => {
        let moviesList = movies.movies.map(movie => movie.title);
        let moviesAlfa = moviesList.sort();
        
        res.render('index', {movies, moviesAlfa});
    },
    enCartelera: (req, res) => {
        res.send('En cartelera')
    },
    masVotadas: (req, res) => {
        res.send('Mas votadas');
    },
    sucursales: (req, res) => {
        res.send('Sucursales');
    },
    contacto: (req, res) => {
        res.send('Contacto');
    },
    faqs: (req, res) => {
        res.send('Mas votadas');
    }
}