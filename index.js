// run `node index.js` in the terminal

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

const apenasLancamento = (filme, index, array) => {
  console.log(index), console.log(array);
  return filme.lancamento;
};

const maiorAnos2000 = (filme) => filme.lancamento > 2000;

const filmesAcima2000 = filmes.filter(maiorAnos2000).map(apenasLancamento);
console.log(filmesAcima2000);
