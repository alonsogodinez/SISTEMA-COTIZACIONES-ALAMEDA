const express = require('express');
const router = express.Router();

const paperController = require('../controllers/paper');
const paperTypeController = require('../controllers/paperType');
const paperSizeController = require('../controllers/paperSize');


router.route('/')
  .get(paperController.listAll)
  .post(paperController.create);

router.route('/tamano')
  .get(paperSizeController.listAll)
  .post(paperSizeController.create);

router.route('/tipo')
  .get(paperTypeController.listAll)
  .post(paperTypeController.create);


module.exports = router;
