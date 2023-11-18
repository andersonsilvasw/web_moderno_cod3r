function calculaValorDoPlano(idade) {
    if (idade < 10) {
        return 180
    } else if (idade <= 30) {
        return 150
    } else if (idade <= 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calculaValorDoPlano(1))
console.log(calculaValorDoPlano(10))
console.log(calculaValorDoPlano(30))
console.log(calculaValorDoPlano(55))
console.log(calculaValorDoPlano(60))
console.log(calculaValorDoPlano(81))