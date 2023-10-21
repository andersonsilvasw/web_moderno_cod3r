// Função sem retorn
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // ele usa o segundo parâmetro como undefined e resulta em NaN
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma() // resulta em NaN por não ter os parâmetros

// Função com retorno
function soma(a, b = 1) { // nesse caso o valor padrão de b é 1, caso não seja declarado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // resulta em NaN pq o A não foi definido e não tem um valor padrão