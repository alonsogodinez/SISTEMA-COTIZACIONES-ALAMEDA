module.exports.create = (req, res) => {

  models.Plasticizing
    .create({
      quantity: req.body.quantity,
      PlasticizingSizeId: req.body.photolithSize,
      PlasticizingClassId: req.body.photolithClass,
      price: req.body.price

    })
    .then(plasticizing => res.json(plasticizing))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.Plasticizing
    .findAll()
    .then(plasticizings => res.json(plasticizings))
    .catch(err => res.status(503).send(err))
};