// Transformando um objeto em JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// Transformando um JSON em objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

const objJson = '{ "a": 4, "b": 5, "c": 6 }'
console.log(JSON.parse(objJson))

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))