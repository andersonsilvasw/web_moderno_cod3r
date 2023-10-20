const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log([4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // push insere algo no array
console.log(valores)

console.log(valores.pop()) // pop retira o último elemento do array
delete valores[0] // delete, exclui o elemento indicado do array
console.log(valores)

console.log(typeof valores)