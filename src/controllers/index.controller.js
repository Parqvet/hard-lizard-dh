const fs = require('fs');

module.exports = {
    home: (req, res) => {
        res.send('Hola mundo')
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