const express = require('express');
const router = express.Router();

const paperRouter = require('./paper');
const plateRouter = require('./plate');
const printRouter = require('./print');
const photolithRouter = require('./photolith');
const plasticizingRouter = require('./plasticizing');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/cotizaciones', (req, res) => {
  res.render('quotation')
});

router.use('/papel',paperRouter);
router.use('/placa', plateRouter);
router.use('/impresion',printRouter);
router.use('/fotolito',photolithRouter);
router.use('/plastificado',plasticizingRouter);


module.exports = router;


