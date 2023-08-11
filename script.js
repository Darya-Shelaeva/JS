'use strict'

let officialNameJS = 'ECMAScript';

if(officialNameJS = true) {
    console.log('Верно!')}
    else {
            console.log('Не знаете? ECMAScript!')
        }
    let number = prompt ('Введите число')
    if (number > 0){
        alert(1)
    } else if (number < 0){
        alert(-1)
    } else if (number === 0) {
        alert(0)
    }

    let a = 1+2;
    let result  = (a > 4) ? 'Много': 'Мало';
    console.log (result);

let login = 'Сотрудник';
let message = (login = true) ? 'Привет': 'Здравствуйте';
let message2 = (login == '') ? 'Нет логина': '  ';
console.log(message);

/*if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/