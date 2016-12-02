module.exports.create = (req, res) => {

  models.Paper
    .create({
      quantity: req.body.quantity,
      PaperTypeId: req.body.paperType,
      PaperSizeId: req.body.paperType,
      price: req.body.price

    })
    .then(paper => res.json(paper))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.Paper
    .findAll()
    .then(papers => res.json(papers))
    .catch(err => res.status(503).send(err))
};
