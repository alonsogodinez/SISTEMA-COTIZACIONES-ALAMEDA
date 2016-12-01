const express = require('express');
const router = express.Router();

const paperTypeController = require('../controllers/paperType');


router.route('/tipo')
    .get(paperTypeController.listAll)
    .post(paperTypeController.create);


module.exports = router;
