const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PlateSize
    .create({
      name: req.body.name
    })
    .then(plateSize => res.json(plateSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PlateSize
    .findAll({raw: true})
    .then(plateSizes => requestHelper.renderOrJSON(req, res, {plateSizes},'plate/size'))
    .catch(err => res.status(503).send(err))
};
