function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio // inicio = 19 + 3 = 22
        fim = inicio - fim // fim = 22 - 3 = 19
        inicio = inicio - fim // inicio = 22 - 19 = 3    
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)
imprimirImpares(3, 19)