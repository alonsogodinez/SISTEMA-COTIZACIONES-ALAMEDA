const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PaperSize
    .create({
      name: req.body.name,
    })
    .then(paperSize => res.json(paperSize))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.PaperSize
    .findAll()
    .then(paperSizes => requestHelper.renderOrJSON(req, res, {paperSizes}, 'paper/size'))
    .catch(err => res.status(503).send(err))
};