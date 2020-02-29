// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

// route to show info
router.get('/show/*', PagesController.show);

// route to edit info
router.get('/edit/*', PagesController.editInfo);

// finish the edit
router.post('/finishEdit', PagesController.finishEdit); //post to submit forms

// route to add info
router.get('/add', PagesController.addInfo);

// finish adding
router.post('/finishAdd', PagesController.finishAdd);

// delete product
router.get('/delete/*', PagesController.delete);

// Exporta las configuraciones
module.exports = router;