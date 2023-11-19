function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 3, 150, 2));
console.log(calcularCrescimento(150, 3, 150, 4));
console.log(calcularCrescimento(150, 4, 150, 4));

console.log(calcularCrescimento(140, 4, 130, 4));
console.log(calcularCrescimento(140, 3, 130, 4));

console.log(calcularCrescimento(130, 4, 140, 4));
console.log(calcularCrescimento(130, 3, 140, 2));