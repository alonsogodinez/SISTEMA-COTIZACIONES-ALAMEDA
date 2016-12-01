module.exports.create = (req, res) => {

  models.Paper
    .create({
      name: req.body.name,
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
