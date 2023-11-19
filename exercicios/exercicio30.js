function encontrarMaiorEMenor(vetor) {
    if (vetor.length === 0) {
        // Se o vetor estiver vazio, não há maior nem menor valor
        return "Vetor vazio";
    }

    let maior = vetor[0];
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        } else if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    return { maior, menor };
}

// Exemplo de uso:
const meuVetor = [4, 7, 2, 9, 2, 5, 10];
const resultado = encontrarMaiorEMenor(meuVetor);

console.log("Maior valor:", resultado.maior);
console.log("Menor valor:", resultado.menor);