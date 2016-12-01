const express = require('express');
const router = express.Router();

const paperRouter = require('./paper');


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.get('/cotizaciones', (req, res) => {
  res.render('quotation')
});

router.use('/papel',paperRouter);



module.exports = router;


