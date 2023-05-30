var person = {
    age: 14,
    name: 'Alex'
    
}

//funçao pura - nao gera efeitos colaterais se mais conhecida como Programação funcional
//sao mais faceis de ser debugadas
function buscarAnoPura (person) {     
   return 18 - person.age
}
// funçao impura- cria efeito colateral conhecida por Programação imperativa
//um pouco mais dificeis de debugar
function buscarAnoImpuro (person) {
    person.age = person.age + 1
}
// chamou um método impuro
buscarAnoImpuro(person)

var anosPuro = buscarAnoPura(person)
console.log(anosPuro)