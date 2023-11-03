function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log('R$ ' + jurosSimples(5000, 0.1, 5))
console.log('R$ ' + jurosCompostos(5000, 0.1, 5).toFixed(2))