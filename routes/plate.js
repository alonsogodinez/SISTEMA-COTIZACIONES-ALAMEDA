const express = require('express');
const router = express.Router();

const plateController = require('../controllers/plate');
const plateSizeController = require('../controllers/plateSize');

router.route('/placa')
  .get(plateController.listAll)
  .post(plateController.create);

router.route('/placa/tipo')
  .get(plateSizeController.listAll)
  .post(plateSizeController.create);


module.exports = router;
