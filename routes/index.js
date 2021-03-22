var express = require('express');
var router = express.Router();

var Controller = require('../controllers/article');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles'});

// Rutas de prueba
router.post('/datos-autor', Controller.datosAutor);
router.get('/test-de-controlador', Controller.test);

// Rutas útiles
router.post('/save', Controller.save);
router.get('/articles/:last?', Controller.getArticles);
router.get('/article/:id', Controller.getArticle);
router.put('/article/:id', Controller.update);
router.delete('/article/:id', Controller.delete);
router.post('/upload-image/:id?', md_upload, Controller.upload);
router.get('/get-image/:image', Controller.getImage);
router.get('/search/:search', Controller.search);

module.exports = router;
