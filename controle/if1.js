function boaNota(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

boaNota(8.1)
boaNota(6.2)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

function teste1(num) {
    if(num > 7) { // Se optar por não pôr as chaves aqui só será válida a primeira sentença de código
        console.log(num)
        console.log('Final')
    }
}

teste1(6)
teste1(8)