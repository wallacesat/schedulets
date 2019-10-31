const Chance = require('chance');

const chance = new Chance();

const ids = [1, 2, 3, 4];

const produtos = ids.map((id) => ({
  id,
  titulo: chance.word({ length: 5 }),
  tempo: chance.integer({ min: 20, max: 60 }),
  disponivel: chance.bool({ likelihood: 7 }),
  preco: chance.floating({ fixed: 2, min: 50, max: 300 }),
  descricao: chance.word({ length: 15 }),
  selecionado: false,
}));

module.exports = produtos;
