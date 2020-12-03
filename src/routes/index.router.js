const { Router } = require('express');
const router = Router();

const index = require('../controllers/index.controller');

router.get('/', index.home);
router.get('/cartelera', index.enCartelera);
router.get('/mas-votadas', index.masVotadas);
router.get('/sucursales', index.sucursales);
router.get('/contacto', index.contacto);
router.get('/faqs', index.faqs);

module.exports = router;