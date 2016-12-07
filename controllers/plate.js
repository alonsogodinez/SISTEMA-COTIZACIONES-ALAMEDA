const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.Plate
    .create({
      quantity: req.body.quantity,
      PlateSizeId: req.body.plateSize,
      price: req.body.price
    })
    .then(plate => res.json(plate))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {

  const ctx = {};
  const where = req.query;

  models.Plate
    .findAll({raw: true, where, include: [models.PlateSize]})
    .then(plates => {
      ctx.plates = plates;
      return models.PlateSize.findAll({raw: true})
    })
    .then(plateSizes => {
      ctx.plateSizes = plateSizes;
      return requestHelper.renderOrJSON(req, res, ctx, 'plate')
    })
    .catch(err => res.status(503).send(err))
};