function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação Inválida'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(5, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(9, '/', 3))
console.log(calculadora(2, 'a', 3))