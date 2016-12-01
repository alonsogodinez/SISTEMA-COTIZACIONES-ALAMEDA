const express = require('express');
const router = express.Router();

const printController = require('../controllers/print');
const printSizeController = require('../controllers/printSize');

router.route('/placa')
  .get(printController.listAll)
  .post(printController.create);

router.route('/placa/tipo')
  .get(printSizeController.listAll)
  .post(printSizeController.create);

module.exports = router;