const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.get('/cotizaciones', (req, res) => {
  res.render('quotation')
});

module.exports = router;


