const fs = require('fs');

const leituraAsync = (arquivo) => {
  console.log('Fazendo leitura async');
  const inicio = new Date().getTime();
  fs.readFile(arquivo, () => {});
  const fim = new Date().getTime();
  console.log(`Bloqueio assíncrono: ${fim - inicio}ms`);
};

module.exports = leituraAsync;