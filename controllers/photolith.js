module.exports.create = (req, res) => {

  models.Photolith
    .create({
      quantity: req.body.quantity,
      PhotolithSizeId: req.body.photolithSize,
      price: req.body.price

    })
    .then(photolith => res.json(photolith))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.Photolith
    .findAll()
    .then(photoliths => res.json(photoliths))
    .catch(err => res.status(503).send(err))
};