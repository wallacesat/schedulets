const express = require('express');

const router = express.Router();

const produtos = require('./data/produtos');
const agenda = require('./data/agenda');

router.get('/dashboard', (req, res) => res.json(produtos));
router.get('/agenda/:idProduto', (req, res) => res.json(agenda));

module.exports = router;
