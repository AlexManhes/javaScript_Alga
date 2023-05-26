//nao se usa idade para banco de dados.
var person1 = {
    name: 'Alex',
    age: 23
}
var person2 = {
    name: 'Keleve',
    age: 21
}
var person3 = {
    name: 'Gustavo',
    age: 21
}

var list = [person1, person2, person3]

for (var person0 of list) {
    console.log(person0)
}