const imprimirResultado1 = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado1(10)
imprimirResultado1(4)
imprimirResultado1('Êpa!') // Cuidado!!!

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado2 = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota Inválida!')
    }
}

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.5)
imprimirResultado2(2.3)
imprimirResultado2(-1)
imprimirResultado2(11)