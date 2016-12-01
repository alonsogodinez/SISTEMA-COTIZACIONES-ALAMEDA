module.exports.create = (req, res) => {

  models.Print
    .create({
      quantity: req.body.quantity,
      PrintSizeId: req.body.printSize,
      price: req.body.price

    })
    .then(print => res.json(print))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.Print
    .findAll()
    .then(prints => res.json(prints))
    .catch(err => res.status(503).send(err))
};