module.exports.create = (req, res) => {

  models.PhotolithSize
    .create({
      name: req.body.name
    })
    .then(photolithSize => res.json(photolithSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PhotolithSize
    .findAll()
    .then(photolithSizes => res.json(photolithSizes))
    .catch(err => res.status(503).send(err))
};
