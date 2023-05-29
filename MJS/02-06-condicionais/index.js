var me = {
    name: 'Alex',
    age: 23
}
checkAge(me)
function checkAge(person){
    console.log('A idade é = ' + person.age)
    if(person.age >= 18){
        console.log('Ele e considerado maior de idade.')
    }else{
        console.log('Ele e considerado menor de idade.')
    }
}
