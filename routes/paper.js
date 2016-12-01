const express = require('express');
const router = express.Router();

const paperController = require('../controllers/paper');
const paperTypeController = require('../controllers/paperType');


router.route('/')
  .get(paperController.listAll)
  .post(paperController.create);

router.route('/tipo')
  .get(paperTypeController.listAll)
  .post(paperTypeController.create);


module.exports = router;
