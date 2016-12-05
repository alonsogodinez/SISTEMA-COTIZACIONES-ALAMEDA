const express = require('express');
const router = express.Router();

const plasticizingController = require('../controllers/plasticizing');
const plasticizingSizeController = require('../controllers/plasticizingSize');
const plasticizingClassController = require('../controllers/plasticizingClass');

router.route('/')
  .get(plasticizingController.listAll)
  .post(plasticizingController.create);

router.route('/tamano')
  .get(plasticizingSizeController.listAll)
  .post(plasticizingSizeController.create);

router.route('/clase')
  .get(plasticizingClassController.listAll)
  .post(plasticizingClassController.create);


module.exports = router;