const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Felipe Massa']
pilotos.pop() // Pop - remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Push - adiciona o elemento ao array
console.log(pilotos)

pilotos.shift() // Shift - Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Unshift - Adiciona um elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Felipe Massa') // Nesse caso add no índice 2 e não remove nenhum(0)
console.log(pilotos)

//Removendo
pilotos.splice(3, 1) // Nesse caso remove no índice 3, apenas 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Nesse caso gera um novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Nesse caso gera um novo array do índice 1 ao 3(4-1)
console.log(algunsPilotos2)