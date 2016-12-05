const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PrintSize
    .create({
      name: req.body.name
    })
    .then(printSize => res.json(printSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PrintSize
    .findAll({raw:true})
    .then(printSizes => requestHelper.renderOrJSON(req, res, {printSizes}, 'print/size'))
    .catch(err => res.status(503).send(err))
};
