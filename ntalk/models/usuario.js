const db = require('../libs/db');
const mongoose = require('mongoose');

module.exports = () => {
  const contato = mongoose.Schema({
    nome: String,
    email: String
  });
  const usuario = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      index: { unique: true }
    },
    contatos: [contato]
  });
  return db.model('usuarios', usuario);
};