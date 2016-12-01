const express = require('express');
const router = express.Router();

const plasticizingController = require('../controllers/plasticizing');
const plasticizingSizeController = require('../controllers/plasticizingSize');

router.route('/placa')
  .get(plasticizingController.listAll)
  .post(plasticizingController.create);

router.route('/placa/tipo')
  .get(plasticizingSizeController.listAll)
  .post(plasticizingSizeController.create);


module.exports = router;