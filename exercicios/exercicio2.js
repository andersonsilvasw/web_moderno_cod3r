function tipoDeTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        return 'Não é um triangulo'
    } else if (ladoA == ladoB && ladoB == ladoC) {
       return 'O triangulo é Equilátero'
    } else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        return 'O triangulo é Isósceles'
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC)
        return 'O triangulo é Escaleno'
}

console.log(tipoDeTriangulo(5, 5, 5))
console.log(tipoDeTriangulo(5, 5, 7))
console.log(tipoDeTriangulo(3, 5, 5))
console.log(tipoDeTriangulo(3, 4, 3))
console.log(tipoDeTriangulo(3, 4, 5))
console.log(tipoDeTriangulo(0, 4, 5))