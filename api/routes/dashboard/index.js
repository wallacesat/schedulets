const express = require('express');
const { isEqual } = require('date-fns');

const router = express.Router();

const produtos = require('./data/produtos');
const agenda = require('./data/agenda');

router.get('/dashboard', (req, res) => res.json(produtos));
router.get('/agenda/:idProduto', (req, res) => {
  const parsedDate = Number(req.query.date);

  const isDay04 = isEqual(
    new Date(new Date(parsedDate).toISOString()),
    new Date('2019-11-04T03:00:00.000Z'),
  );

  return res.json(isDay04 ? agenda.dia04 : agenda.dia07);
});

module.exports = router;
