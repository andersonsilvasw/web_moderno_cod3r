const nome = "Anderson";

console.log(nome.charAt(7)); // Diz a posição do caractere (7)
console.log(nome.charAt(8)); // Como não há, não retorna nada, mas não gera erro
console.log(nome.charCodeAt(3)); // retorna o código do caractere da posição indicada na variável 
console.log(nome.indexOf('A')); // Diz se existe o Caractere indicado na variável
console.log(nome.indexOf('m')); // retorna -1 pq não existe

console.log(nome.substring(1)); // retorna uma substring a partir da posição indicada
console.log(nome.substring(0,5)); // retorna uma substring desde a posição indicada até a anterior a segunda

console.log('Nome: '.concat(nome).concat('!'));
console.log('Nome: '+ nome + '!');
console.log(nome.replace('s', 'z')); // altera um caractere da string

console.log('Ana, Bob, Caio, Duda'.split(','));