function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i] // vetorA[0] = 1 + 4 = 5
            vetorB[i] = vetorA[i] - vetorB[i] // vetorB[0] = 5 - 4 = 1
            vetorA[i] = vetorA[i] - vetorB[i] // vetorA[0] = 5 - 1 = 4
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)