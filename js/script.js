"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля:" + vehicleBodyWidth + ', длина: ' + vehicleBodyLength); 


// let number = 4.6;

// console.log(-4/0); Infinity
// console.log('string' * 9);  NaN

// const persone = "Alex";

// const bool = true; 

// console.log(something); отсуствие контейнера 

// let und;
// console.log(und); Пустой контейнер 

// const obj = {
//     name: "John", 
//     age: 25,
//     isMarried: false,
//     pop: {
//         kola: 15,
//         lom: 10
//     }
// };

// console.log(obj.pop);


// console.log(obj.name);
// console.log(obj['name']);

//  let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
//  console.log(arr[1]);  

// const arr = {
//     a: 'aa',
//     b: 'ab',
//     c: 'ac'
// };
// const ab = 'bb';

// arr[ab] = '1';

// console.log(arr);


// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c'
// }
// const b = 'boo';

// arrObj[b] = '1234';

// //console.log(arrObj ['b']);
// console.log(arrObj);

// alert('hello')

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваша фамилия?', '');
// answers[2] = prompt('сколько вам лет?', '');

// console.log(typeof (answers));

// const caregory = 'toys';

// console.log(`htttps://someurl.com/${caregory}/5`);

// const user = "ivan";

// alert(`hello, ${user}`)

// console.log('arr' + " - object");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2*4 === 8);

// &&
// II 

// const isChecked = false,
//       isClose = false

// console.log(isChecked || !isClose);



// let answers = {
//     'film': 'chislo',
//     'film2': 'chislo2'
// };

// answers.film = prompt('какой фильм смотрели последним?', '');
// answers.chislo = prompt('какую оценку поставите?', '');
// answers.film2 = prompt('какой фильм смотрели последним?', '');
// answers.chislo2 = prompt('какую оценку поставите фильму', '');

// console.log(answers.film2 + ' ' + answers.chislo2);
// console.log(answers.film + ' ' + answers.chislo);






// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c'
// }
// const b = 'b';

// arrObj.b = '1234';

// console.log(arrObj ['b']);
// console.log(arrObj.b);


// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваша фамилия?', '');
// answers[2] = prompt('сколько вам лет?', '');

// console.log(typeof (answers));

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('error!');
     
// }
// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 51:
//         console.log('в точку!');
//         break;
//     default:
//         console.log('ничего не подошло');
//         break;
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for (let i = 20; i > 10; i--) {
//     if (i === 13){
//         break;
//         co
//     }

//     console.log(i);
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// console.log( NaN || 2 || undefined );

// for(let i = 5; i < 11; i++) {
//     console.log(i);
// }



// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
// };
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }



//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) continue first;
//             console.log(`third level: ${k}`);
//         };
//     };
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;

// while (num <= 16) {
//     if (num % 2 === 0){
//         num++;
//         continue;
//     } else {
//         console.log(num);
//     } 
//     num++;
// }



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// let num = 1;

// while (num <= 15) {
//     num++;
//     if (num % 2 === 0){
//         continue;
//     } else {
//         console.log(num);
//     } 
// }

// const arrayOfNumbers = [];
// for(let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

//     // Пишем решение вот тут
// result[0] = arr[0];
// result[1] = arr[1];
// result[2] = arr[2];
// result[3] = arr[3];
// result[4] = arr[4];
// result[5] = arr[5];
// result[6] = arr[6];
// console.log(result);
// console.log(arr);
    
    
//     // Не трогаем
//     return result;

    // const answers = [];


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++){
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// const arr = [5, 2, 8, 3, 20, 14, 19];

// arr.sort(function(a,b){ 
//     return a - b;
//   });
// console.log(arr);

// for (let i = 1; i arr.length; i++){
//     if(arr[i]) 


// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++){
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);

// let num = 20;


// function showFirstMessege(text) {
//     console.log(text);
//     num = 20;
// }

// showFirstMessege("hello");
// console.log(num);


// const logger = function() {
//     console.log("hello");
// };
// logger();

// const calc = (a, b) => { return a + b; };


// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// let arr = [3, 7, 5, 17, 9, 12];

// for(let i = 0; i < arr.length / 2; i++){
//     let num = arr[i];
//     arr[i] = arr[5-i];
//     arr[5-i] = num;
//     console.log(arr);
// }

// let i = 0;

// let num = arr[i];
// arr[i] = arr[5-i];
// arr[5-i] = num;


// num = arr[1];
// arr[1] = arr[4];
// arr[4] = num;
// num = arr[3];
// arr[3] = arr[2];
// arr[2] = num;

// console.log(arr);

// for(let i = 5; i < 0; i--) {
//     arr = [i];

// }
// console.log(arr);

// console.log(min);
// console.log(max);


// 1. Введите с клавиатуры в массив пять целочисленных значений.
//  Выведите их в одну строку через запятую. Получите для массива среднее арифметическое.
// let arr = [2, 4, 6, 8, 10];
// let num = 0;

// for(let i = 0; i < arr.length; i++){
//     num += arr[i];
// }
// num = num / arr.length;
// console.log(num);

// 2. Введите с клавиатуры пять целочисленных элементов массива X.
// Выведите на экран значения квадратов каждого из элементов массива.
// let arr = [2, 4, 6, 8, 10]; 

// for(let i = 0; i < arr.length; i++){
//     arr[i] *= arr[i];
// }
// console.log(arr);

// 3. Создайте массив из пяти фамилий и 
// выведите их на экран столбиком, начиная с последней.
// let arr = ["ilya", "alex", "marina", "anton", "andrei"];
// let result = '';

// for (let i = arr.length - 1; i >= 0; i--) {
//     result += arr[i];
//     result += " ";
//     result += "\n";
//     }
// console.log(result);

// 4. Создайте массив из пяти фамилий и выведите их на экран те из них,
// которые начинаются с определенной буквы, которая вводится с клавиатуры.
// let arr = ["ilya", "alex", "marina", "anton", "andrei"];

// const letter = prompt('Имя начинающееся на какую букву вас интересует?');

// for(let i = 0; i < arr.length; i++){
//     if (letter === arr[i][0]){
//         console.log(arr[i]);
//     }
// }

// 5. Создайте массив А[1..7] с помощью генератора случайных чисел и
//  выведите его на экран. Увеличьте все его элементы в 2 раза.
// let arr = [];
// for ( let i = 0; i < 7; i++ ) {
//     arr.push( Math.round( Math.random() * 100 ));
// }
// console.log(arr);

// for ( let i = 0; i < 7; i++ ){
//     arr[i] *= 2;
// }
// console.log(arr);

// 6. Создайте массив А[1..8] с помощью генератора случайных чисел
//  с элементами от –10 до 10 и выведите его на экран. 
//  Подсчитайте количество отрицательных элементов массива.
// let arr = [];
// for ( let i = 0; i < 8; i++ ) {
//     arr.push( Math.round( Math.random() * (-20) + 10 ));
// }
// console.log(arr);
// for (let i = 0; i < 8; i++ ){
//     if(arr[i] < 0){
//         console.log(arr[i]);
//     }
// }

// 7. Создайте массив А[1..12] с помощью генератора случайных чисел с
//  элементами от –20 до 10 и выведите его на экран. Замените
//   все отрицательные элементы массива числом 0.
// let arr = [];
// for ( let i = 0; i < 12; i++ ) {
//     arr.push( Math.round( Math.random() * (-30) + 10 ));
// }
// console.log(arr);
// for (let i = 0; i < 12; i++ ){
//     if(arr[i] < 0){
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// 8. Создайте целочисленный массив А[1..15] с помощью генератора
//  случайных чисел с элементами от –15 до 30 и выведите его на экран.
//   Определите самый большой элемент массива и его индекс.

let arr = [];
for ( let i = 0; i < 15; i++ ) {
    arr.push( Math.round( Math.random() * (-45) + 30 ));
}
console.log(arr);

for ( let i = 0; i < 15; i++) {
    let num = arr[i];
    if (arr[i] >= num){
        continue;
    } else {
        console.log(arr[i]);
    }
}