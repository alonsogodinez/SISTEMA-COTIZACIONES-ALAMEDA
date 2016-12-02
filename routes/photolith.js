const express = require('express');
const router = express.Router();

const photolithController = require('../controllers/photolith');
const photolithSizeController = require('../controllers/photolithSize');

router.route('/')
  .get(photolithController.listAll)
  .post(photolithController.create);

router.route('/tamano')
  .get(photolithSizeController.listAll)
  .post(photolithSizeController.create);

module.exports = router;
