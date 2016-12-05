const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.Plasticizing
    .create({
      quantity: req.body.quantity,
      PlasticizingSizeId: req.body.plasticizingSize,
      PlasticizingClassId: req.body.plasticizingClass,
      price: req.body.price

    })
    .then(plasticizing => res.json(plasticizing))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  const ctx = {};

  models.Plasticizing
    .findAll({raw: true, include: [models.PlasticizingSize, models.PlasticizingClass]})
    .then(plasticizings => {
      ctx.plasticizings = plasticizings;

      return models.PlasticizingClass.findAll({raw: true})
    })
    .then(plasticizingClasses => {
      ctx.plasticizingClasses = plasticizingClasses;
      return models.PlasticizingSize.findAll({raw: true})
    })
    .then(plasticizingSizes => {

      ctx.plasticizingSizes = plasticizingSizes;
      return requestHelper.renderOrJSON(req, res, ctx, 'plasticizing');
    })
    .catch(err => res.status(503).send(err))
};