const express = require('express');
const router = express.Router();

const plateController = require('../controllers/plate');
const plateSizeController = require('../controllers/plateSize');

router.route('/')
  .get(plateController.listAll)
  .post(plateController.create);

router.route('/tamano')
  .get(plateSizeController.listAll)
  .post(plateSizeController.create);


module.exports = router;
