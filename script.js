'use strict'

/*
const key = prompt ('Введите свойство')

const person = {
    age: 30,
    isStudent: false,
    firstName: "John",
    lastName: "Doe",
}

for(const key in person) {
    console.log(person[key])
}*/
/*
let a = 0
let b = a
++b

console.log('b', b)
console.log('a', a)

*/
/*
let obj1 = {first: 'Первый'}

let obj2 = _.clone(obj1)


console.log ('obj2', obj2)
console.log ('obj1', obj1)
*/
/*
let a = ''
let b = {}

if (!false){
    console.log ('Валидацию не прошел')
}*/
/*
const person = {
    age: 30,
    isStudent: false,
    firstName: "John",
    lastName: "Doe",

    sayHi: function() {
        console.log (`Привет, меня зовут ${this.firstName}. Мне ${this.age} лет.`)
    }
}

const person2 = {
    age: 23,
    isStudent: false,
    firstName: "Michael",
    lastName: "Jackson",

    sayHi: function() {
        console.log (`Привет, меня зовут ${this.firstName}. Мне ${this.age} лет.`)
    }
}*/

//функция, которая создает объекты
/*
const makePerson = (age, isStudent, firstName, lastName) => {

    return{
        age,
        isStudent,
        firstName,
        lastName,
        sayHi: function() {
            console.log (`Привет, меня зовут ${this.firstName}. Мне ${this.age} лет.`)
        }
    }
}

makePerson(23, false, "Michael", "Jackson").sayHi()*/

const user = {
    name: 'Michael',
    work: {
        title: 'Фронтенд',
        isRemote: true,
    },
}
console.log (user?.work?.title)