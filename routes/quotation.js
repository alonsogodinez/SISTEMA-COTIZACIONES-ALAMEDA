const express = require('express');
const router = express.Router();

const quotationController = require('../controllers/quotation');


router.route('/')
  .get(quotationController.listAll)
  //.post(plateController.create);



module.exports = router;
