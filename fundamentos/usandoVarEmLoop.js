console.log('Usando var em loop 1')
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)

console.log('Usando var em loop 2')
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// Nesse caso a posição de i não é respeitada e é impresso o valor de i que sai do loop
funcs[2]()
funcs[8]()