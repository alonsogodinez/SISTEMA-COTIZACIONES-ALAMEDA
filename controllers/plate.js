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
  models.Plate
    .findAll()
    .then(plates => res.json(plates))
    .catch(err => res.status(503).send(err))
};