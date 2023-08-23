'use strict'
/*
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

    let a = 1;
    let b = 2;
    let result  = (a + b > 4) ? 'Много': 'Мало';
    console.log (result);

    
let login = prompt('введите Вашу должность');
let message = (login === 'Сотрудник' ? 'Привет': login ==='Директор' ? 'Здравствуйте':login ==='' ? 'нет логина');

console.log(message);*/
/*
const number = prompt('введите число')
let counter = 0;
let sum = 0;

while(counter < number){
  counter++
  sum = sum + counter

}
console.log(sum)*/
/*
let a = 3, b = 5;

while(a < 100){
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b; 
}*/

/*let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/
/*
let login = prompt('Введите логин')
let message

switch (login) {
  case 'Сотрудник':{
    message = 'Привет'
  }
  break;

  case 'Директор':{
    message = 'Здравствуйте'
  }
  break;

  case '':{
    message = 'Нет логина'
  }
  break;

  default: {
    message = 'Неверный логин'
  }
    break;
}
console.log(message)*/
/*
let numbers = +prompt('Введите число')

const getRoot = (num) => {
console.log (num*2)
}

getRoot(numbers)*/

//КАЛЬКУЛЯТОР
/*
const operator = prompt("Введите операцию");
const number = +prompt("Введите число");//+ преобразует строку в число
const number2 = +prompt ("Введите второе число");

//const number = Number(numberString);
//const number2 = Number(numberString2);

let result;

switch(operator) {
  case "+":
  result = number + number2;
  break;

  case "-":
  result = number - number2;
  break;

  case "*":
      result = number * number2;
    break;
  

  case "/":
    if(operator === '/' && number2 === 0){
      throw Error ('На ноль делить нельзя') //можно через console.log
    } else {
    result = number / number2;
  }
    break;


    default:
      console.log ('Недопустимая операция');
}


const div = document.querySelector('.result');
div.innerHTML = result;*/

//функция для деления

/*const divide = (firstNumber, secondNumber) => {

  if (firstNumber === '') {
    console.log ('Вы не ввели первое число')
    return;
  }

  if (secondNumber === '') {
    console.log ('Вы не ввели второе число')
    return;
  }

  if (secondNumber === 0) {
    console.log ('На ноль делить нельзя')
    return;
  }
  const result = firstNumber / secondNumber
  return result;
}*/ //вариант операции деления. В switch просто вызывается функция divide (number, number2)