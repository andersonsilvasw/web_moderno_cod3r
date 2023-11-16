const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const resultadoPrecos = carrinho.map(paraObjeto).map(apenasPreco)
const resultadoNomes = carrinho.map(paraObjeto).map(apenasNome)
console.log(resultadoPrecos)
console.log(resultadoNomes)