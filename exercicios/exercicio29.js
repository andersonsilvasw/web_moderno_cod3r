function analisarIntervalo(vetorNumeros) {
    let dentroIntervalo = 0
    let foraDoIntervalo = 0
    for(let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            dentroIntervalo++
        } else {
            foraDoIntervalo++
        }
    }
    console.log(`${dentroIntervalo} números dentro do intervalo e ${foraDoIntervalo} for do intervalo.`)
}

const vetorNumeros = [2, 4, 5, 6, 7, 9, 10, 14, 16, 18, 20, 27]
analisarIntervalo(vetorNumeros)