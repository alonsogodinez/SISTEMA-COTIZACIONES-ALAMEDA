const express = require('express');
const router = express.Router();

const paperRouter = require('./paper');
const plateRouter = require('./plate');
const printRouter = require('./print');
const photolithRouter = require('./photolith');
const plasticizingRouter = require('./plasticizing');
const quotationRouter = require('./quotation');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.use('/cotizacion', quotationRouter);

router.use('/papel', paperRouter);
router.use('/placa', plateRouter);
router.use('/impresion', printRouter);
router.use('/fotolito', photolithRouter);
router.use('/plastificado', plasticizingRouter);


module.exports = router;


