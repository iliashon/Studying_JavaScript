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
// let arr = [];
// for ( let i = 0; i < 15; i++ ) {
//     arr.push( Math.round( Math.random() * (-45) ));
// }
// console.log(arr);

// let numMax = arr[0];
// let indMax = 0;
// for ( let i = 0; i < 15; i++) {
//     if (numMax < arr[i]){
//         numMax = arr[i];
//         indMax = i;
//     }
// }
// console.log(numMax);
// console.log(indMax);

// 9. С 8 до 20 часов температура воздуха измерялась ежечасно.
// Известно, что в течение этого времени температура понижалась.
// Определите, в котором часу была впервые отмечена отрицательная
// температура.
// let temperature = [8, 5, 3, 10, 12, 6, 5, -4, -7, -2, -7, -10];
// let timesOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i < 12; i++){
//     if (temperature[i] < 0){
//         console.log(temperature[i] + ' ' + timesOfDay[i]);
//         break;
//     }
// }

// 10. Данные о температуре воздуха за декаду ноября хранятся в массиве.
// Определить, сколько раз температура опускалась ниже –10 градусов.
// let temperature = [8, 5, 3, 10, 12, 6, 5, -14, -17, -2];
// let amount = 0;

// for (let i = 0; i < 10; i++){
//     if (temperature[i] < -10){
//         amount++;
//     }
// }
// console.log(amount);

// 11. Данные о температуре воды на Черноморском побережье за декаду
//  сентября хранятся в массиве. Определить, сколько за это время было
//   дней, пригодных для купания.
// let temperature = [8, 15, 3, 20, 12, 28, 5, -14, 32, -2];
// let amount = 0;

// for (let i = 0; i < 10; i++){
//     if (temperature[i] >= 20){
//         amount++;
//     }
// }
// console.log(amount);

// 12. Данные о температуре воздуха и количестве осадков за декаду
//  апреля хранятся в массивах. Определить количество осадков,
//   выпавших в виде дождя и в виде снега за эту декаду.
// let temperature = [8, 15, 3, 20, 12, 28, 5, -14, 32, -2];
// let precipitation = [2.2, 7.1, 1, 3, 1.9, 2.6, 0.8, 1.7, 4.6, 1.5];
// let snow = 0;
// let rain = 0;

// for (let i = 0; i < 10; i++){
//     if (temperature[i] > 0){
//         rain += precipitation[i];
//     } else {
//         snow += precipitation[i];
//     }
// }
// console.log(snow);
// console.log(rain);

// 13. Данные о температуре воздуха за декаду декабря хранятся в массиве.
//  Определить, сколько раз температура была выше средней за эту декаду..
// let temperature = [8, 15, 3, 20, 12, 28, 5, -14, 32, -2];
// let medium = 0;
// let amount = 0;

// for (let i = 0; i < 10; i++){
//     medium += temperature[i];
// }

// medium /= temperature.length;

// for (let i = 0; i < 10; i++){
//     if (temperature[i] > medium){
//         amount++;
//     }
// }

// console.log(medium);
// console.log(amount);

// 14. Данные о направлении ветра (северный, южный, восточный, западный) 
// и силе ветра за декаду ноября хранятся в массиве. Определить,
//  сколько дней дул южный ветер с силой, превышающей 8 м/с.
// let direction = ["Северный", "Южный", "Восточный", "Западный", "Восточный",
// "Южный", "Южный", "Западный", "Южный", "Северный"];
// let precipitation = [2.2, 9.1, 1, 3, 1.9, 15.6, 0.8, 10.7, 4.6, 1.5];
// let amount = 0;

// for (let i = 0; i < 10; i++){
//     if(direction[i] === "Южный" && precipitation[i] > 8){
//         amount++;
//     }
// }

// console.log(amount);

// 15. Создайте массив из 15 целочисленных элементов и определите
//  среди них минимальное значение.
// let arr = [];
// for ( let i = 0; i < 15; i++ ) {
//     arr.push( Math.round( Math.random() * 50 ));
// }
// console.log(arr);

// let numMin = arr[0];
// for ( let i = 0; i < 15; i++) {
//     if (numMin > arr[i]){
//         numMin = arr[i];
//     }
// }
// console.log(numMin);

// 16. Сформируйте линейный массив вещественных чисел,
//  элементы которого являются расстояниями, пройденными телом при
//   свободном падении на землю за 1, 2, … , 10 с.
// (формула расстояния: h=(gt2)/2, где g=9,8)
// let distance = [];
// const g = 9.81;

// for(let i = 0; i < 10; i++){
//     distance.push((g * (i+1) ** 2) / 2);
// }

// console.log(distance);

// 17. Дан линейный массив целых чисел. Проверьте, является
//  ли он упорядоченным по убыванию.
// let arr = [10, 9, 8, 7, 6, 5, 8, 3, 2, 1];
// let num = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (num > arr[i]){
//         num = arr[i];
//     } else if (num < arr[i]){
//         console.log('error');
//         break;
//     }
// }  

// 18. Найти сумму положительных элементов линейного массива целых чисел.
//  Размерность массива – 10. Заполнение массива осуществить с клавиатуры.
// let arr = [];
// let sum = 0;

// for (let i = 0; i < 10; i++){
//     const meaning = +prompt('Введите значение 0т -10 до 20');

//     if(meaning != null && meaning != '' && meaning < 20 && meaning > -10){
//         arr.push(meaning);
//     } else{
//         alert('Ошибка, Введите значение согласно требованию');
//         i--;
//     }
// }
// console.log(arr);

// for (let i = 0; i < 10; i++){
//     if(arr[i] > 0){
//         sum += arr[i] ;
//     }
// }
// console.log(sum);

// 19. Найти сумму четных элементов массива целых чисел. 
// Размерность массива – 20. Заполнение массива осуществить
//  случайными числами от 100 до 200.
// let arr = [];
// let sum = 0;
// for ( let i = 0; i < 20; i++ ) {
//     arr.push( Math.round( Math.random() * (100 - 200) +200  ));
// }
// console.log(arr);

// for ( let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         sum += arr[i];
//     }
// }
// console.log(sum);

// 20. Найти произведение элементов массива целых чисел,
//  которые кратны 7. Размерность массива – 15. Заполнение 
//  массива осуществить случайными числами от 10 до 50.
// let arr = [];
// let work = 1;
// for ( let i = 0; i < 15; i++ ) {
//     arr.push( Math.round( Math.random() * (10 - 50) +50  ));
// }
// console.log(arr);

// for ( let i = 0; i < arr.length; i++){
//     if (arr[i] % 7 === 0){
//         work *= arr[i];
//     } 
// }
// console.log(work);

// 30. Рассортируйте заданный линейный массив по возрастанию.
// let item = [8, 15, 3, 20, 12, 28, 5, -14, 12, -2];

// for (let i=0; i<item.length; i++) {
//     for (let j=i; j<item.length; j++) {
//         if (item[i] > item[j]) {
//         let t = item[i];
//         item[i] = item[j];
//         item[j] = t;
//       }
//     }
//   }
//   console.log(item);

// 65. Дан целочисленный линейный массив из 10 элементов. Найдите
//  наименьшее число K элементов, которое нужно исключить из 
//  последовательности A[1],A[2],…,A[10], чтобы осталась возрастающая 
//  последовательность.
// ----------------
// let arr = [8, 15, 2, 3, 20, 4, 5];
// let num = arr[0];
// let amount = 0;

// for (let i = 1; i < arr.length; i++){
//     if (num < arr[i]){
//         num = arr[i];
//     } else if (num > arr[i]){
//         amount++;
//     }
// }  
// console.log(amount);

// 27. Задача на функции

// function sayHello(name) {
//     let phrase = 'привет';
//     console.log(phrase + ', ' + name);
// }
// sayHello('ilya');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers);

// task №1
// function returnNumber(first, second){
//     if(first % 2 === 0 && second % 2 === 0) {
//         return (first * second);
//     } else if (first % 2 === 1 && second % 2 === 1){
//         return (first + second);
//     } else if (first % 2 === 0 && second % 2 === 1){
//         return (second);
//     } else if (first % 2 === 1 && second % 2 === 0){
//         return (first);
//     }
// }
// while(true){
//     let firstUserNumber = +prompt('Первое число', ''),
//     secondUserNumber = +prompt('Второе число', '');
// console.log(returnNumber(firstUserNumber, secondUserNumber));
// }

// task№2
// function returnNumber(firstVertexX, firstVertexY, secondVertexX, secondVertexY,
//      thirdsVertexX, thirdsVertexY, fourthVertexX, fourthVertexY){
//     if((firstVertexY + secondVertexY) === (fourthVertexY + thirdsVertexY) && 
//        (firstVertexX + fourthVertexX) === (secondVertexX + thirdsVertexX) &&
//        (firstVertexX + fourthVertexX) === (fourthVertexY + thirdsVertexY)) {
//         return ('Это квадрат');
//     }  else if ((firstVertexY + secondVertexY) === (fourthVertexY + thirdsVertexY) && 
//                 (firstVertexX + fourthVertexX) === (secondVertexX + thirdsVertexX) &&
//                 (firstVertexX + fourthVertexX) !== (fourthVertexY + thirdsVertexY)){
//                 return ('Это прямоугольник');
//     }  else if ((firstVertexY + secondVertexY) !== (fourthVertexY + thirdsVertexY)
//  || (firstVertexX + fourthVertexX) !== (secondVertexX + thirdsVertexX)){
//         return ('Это не прямоугольник и не квадрат');
//     } 
// }
//     let firstVertexX = +prompt('Первая вершина X', ''),
//         firstVertexY = +prompt('Первая вершина Y', ''),
//         secondVertexX = +prompt('Вторая вершина X', ''),
//         secondVertexY = +prompt('Вторая вершина Y', ''),
//         thirdsVertexX = +prompt('Третья вершина X', ''),
//         thirdsVertexY = +prompt('Третья вершина Y', ''),
//         fourthVertexX = +prompt('Четвертая вершина X', ''),
//         fourthVertexY = +prompt('Четвертая вершина Y', '');
//     console.log(returnNumber(firstVertexX, firstVertexY, secondVertexX, secondVertexY,
//      thirdsVertexX, thirdsVertexY, fourthVertexX, fourthVertexY));


// 1. Написать функцию, которая принимает два числа
//  и возращает результат их умножения
// function work(firstNumber, secondNumber = 0){
//     return(firstNumber * secondNumber);
// }
// let num1 = prompt('Укажите число'),
//     num2 = prompt('Укажите второе число');
// console.log(work(num1, num2));

// 2. Написать функцию, которой передаем, имя, фамилия и возраст,
//  и получаем строку "Привет Иван Петров с возрастом 17 лет" 
//  (только здесь данные, которые были переданы в функцию)
// function nameAndAge (name, surname, age){
//     return(`Привет ${name} ${surname} с возрастом ${age}`);
// }
// let user = prompt('Как вас зовут?'),
//     surname = prompt('Какая у вас фамилия?'),
//     age = prompt('Сколько вам лет?');
// console.log(nameAndAge(user, surname, age));

// 3. Написать функцию, которая принимает пол человека ('M','F') 
// в виде строки, результат функции возвращает строку "Ваш пол мужской" 
// (или женский) или же "Ваш пол не опеределен"
// function genderPerson(sex){
//     if (sex === 'M'){
//         return (`Ваш пол мужской`);
//     } else if (sex === 'F'){
//         return (`Ваш пол женский`);
//     } else {
//         return (`Ваш пол не определен`);
//     }
// }
// let sex = prompt('Укажите ваш пол M или F', 'M - F');
// console.log(genderPerson(sex.trim()));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7,
//  а возвращает день недели на русском языке.
// function dayWeeks(dayNum){
//     const day = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
//                  'Пятница', 'Суббота', 'Воскресенье'];
//     if (dayNum > 0 && dayNum < 8) {
//         return (day[dayNum - 1]);
//     } else {
//         return ('Неверно введено число');
//     }
// }
// let dayNum = +prompt('Введите чсило от 1 до 7', '1 - 7');
// console.log(dayWeeks(dayNum));

// 5. Написать функцию, которая принимает строку (в этом тексте
// 3-5 предложений), верните каждое первое слово в каждом
// предложении, через запятую.
// function returnFirstsWords(offers){
//     let isFirstWord = true;
//     let isEnd = false;
//     let firstsWords = '';
//     for (let i = 0; i < offers.length; i++){
//         if (isFirstWord === true && offers[i] !== ' '){
//             firstsWords += offers[i];
//             isEnd = false;
//         } else if (offers[i] === ' ' && isEnd === false){
//             isFirstWord = false;
//         } else if (offers[i] === '.'){
//             isEnd = true;
//             isFirstWord = true;
//             firstsWords += ', ';
//         } 
//     }
//     return firstsWords;
// }
// let offers = prompt('Введите несколько предложений', '');
// console.log(returnFirstsWords(offers));

// Ильяривет.лексейривет.ндрейривет
// 6. Написать функцию, которой передаем имя, и она возраващает приветствие в
//  зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
// function timesDay (hours, userName){
//     if (hours >= 0 && hours < 6){
//         return console.log(`Доброй ночи ${userName}`);
//     } else if (hours >= 6 && hours < 12){
//         return console.log(`Доброе утро ${userName}`);
//     } else if (hours >= 12 && hours < 18){
//         return console.log(`Добрый день ${userName}`);
//     } else if (hours >= 18 && hours < 24){
//         return console.log(`Добрый вечер ${userName}`)
//     } else {
//         return console.log(`Вы инопрешеленец ${userName}`);
//     }
// }
// let date = new Date();
// let hours = date.getHours();
// let userName = prompt('Как вас зовут?');
// console.log(timesDay(hours, userName));

// 7. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
//  (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
// function ageStatus(userAge){
//     while (userAge) {
//         if (userAge >= 1 && userAge <= 17){
//             return(`${userAge} и он ребенок`);
//         } else if (userAge >= 18 && userAge <= 30){
//             return(`${userAge} и он молодой`);
//         } else if (userAge > 30 && userAge <= 55){
//             return(`${userAge} и он зрелый`);
//         } else if (userAge > 55 && userAge <= 100){
//             return(`${userAge} и он старый`);
//         }
//     }
// }

// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
//  (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию
//   из прошлого задания

// function nameAgeStatus(userName){
//     return(`${userName} имеет возраст ${ageStatus(userAge)}`);
// }

// let userAge = prompt('Сколько вам лет?');
// let userName = prompt('Как вас зовут?');
// console.log(nameAgeStatus(userName));

// 8. Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
//  если все элементы четные, если бы хотя бы один элемент не четный, то false.
// function evenOrOdd(num){
//     for (let i = 0; i < num.length; i++){
//         if (num[i] % 2 === 1){
//             return(false);
//         }
//     }
//     return(true);
// }

// let arr = [2, 4, 6, 8, 10];
// console.log(evenOrOdd(arr));

// 9. Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
//  если хотя бы один элемент нечетный, если все четные, то false.
// function evenOrOdd(num){
//     for (let i = 0; i < num.length; i++){
//         if (num[i] % 2 === 1){
//             return(true);
//         }
//     }
//     return(false);
// }

// let arr = [2, 4, 6, 8, 10];
// console.log(evenOrOdd(arr));

// 10. Сделай функцию, которая принимает массив любых целых чисел, которая возращает
//  новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
// function evenOrOdd(num){
//     let array = [];
//     for (let i = 0; i < num.length; i++){
//         if (num[i] % 5 === 0){
//             array.push(num[i]);
//         }
//     }
//     return(array);
// }

// let arr = [2, 4, 5, 8, 10];
// console.log(evenOrOdd(arr));

// 11 .Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция
//  возращает среднее арифметическое, (округлить результат до десятых)
// function evenOrOdd(num){
//     let saner = 0;
//     for (let i = 0; i < num.length; i++){
//         saner += num[i];
//     }
//     saner = saner / num.length;
//     return(saner.toFixed(1));
// }

// let arr = [2, 4, 5, 8, 10];
// console.log(evenOrOdd(arr));


// 12. У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной
//  sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function totalSalary(obj){
//     let sum = 0;
//     for (let key in obj){
//         sum += obj[key];
//     }
//     return(sum);
// }

// console.log(totalSalary(salaries));

// 13. Создайте функцию multiplyNumeric(obj), которая умножает все
//  числовые свойства объекта obj на 2.
// Например:
// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую
//  изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
// let menu = {
//       width: 200,
//       height: 300,
//       title: "My menu"
//     };

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if (typeof obj[key] == 'number'){
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// 14. Задача на поиск номера купе по месту
// function searchNomberCoupe(place){
//     if (place >= 1 && place <=4){
//         return(1);
//     } else if (place >= 5 && place <=8){
//         return(2);
//     } else if (place >= 9 && place <=12){
//         return(3);
//     } else if (place >= 13 && place <=16){
//         return(4);
//     } else if (place >= 17 && place <=20){
//         return(5);
//     } else if (place >= 21 && place <=24){
//         return(6);
//     } else if (place >= 25 && place <=28){
//         return(7);
//     } else if (place >= 29 && place <=32){
//         return(8);
//     } else if (place >= 33 && place <=36){
//         return(9);
//     } else if (place <= 0 || place >= 37){
//         return('Таких мест в вагоне не существует');
//     } else {
//         return('Ошибка. Проверьте правильность введенного номера места');
//     }
// }

// let userPlace = prompt('Какое у вас метсо?');
// console.log(searchNomberCoupe(userPlace));

// 15. Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
//  (тоже базовая математика, иногда используется в создании анимаций). Эта функция
//   принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате
//    строки, который изображен в примерах.
// function calc(edge){
//     let volumeSquare = {
//         volume: 0,
//         square: 0,
//         error: false
//     };
//     if (edge > 0 && edge % 1 == 0){
//         volumeSquare.volume = edge * edge * edge;
//         volumeSquare.square = 6 * edge * edge;
//     } else {
//         volumeSquare.error = true;
//     }
//     return(volumeSquare);
// }

// let ribLength = prompt('Введите целое число со значением длины ребра куба', '');

// let volumeSquareExternal = calc(ribLength);
// if (volumeSquareExternal.error === true){
//     console.log('При вычислении произошла ошибка');
// } else {
//     console.log(`Объем куба: ${volumeSquareExternal.volume},  
//     площадь всей поверхности: ${volumeSquareExternal.square}`);
// }


// 16. Создайте функцию, которая принимает в себя целое число минут и возвращает время
//  в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова
//   "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не
//    число, дробное или отрицательное число - функция возвращает строку 
//    "Ошибка, проверьте данные"
// function getTimeFromMinutes(userTimeMinutes) {
//     let objTime = {
//         hour: 0,
//         minute: 0,
//         error: false
//     };
//     if (userTimeMinutes >= 0 && userTimeMinutes < 600){
//         objTime.hour = Math.floor(userTimeMinutes / 60);
//         objTime.minute = userTimeMinutes % 60;
//     } else {
//         objTime.error = true;
//     }
//     return(objTime);
// }

// let userTimeMinutes = prompt('Введите количество минут');

// let getTimeFromMinutesExternal = getTimeFromMinutes(userTimeMinutes);

// if (getTimeFromMinutes.error === true){
//     console.log('Ошибка, проверьте данные');
// } else {
//     console.log(`Это ${getTimeFromMinutesExternal.hour} часа и ${getTimeFromMinutesExternal.minute} минут`);
// }

// 17. Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее
//  из них. Если один из аргументов не является числом или их меньше 4 - 
//  возвращается 0. Дробные числа разрешены.
// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number'){
//             return 0;
//         } else {
//             return Math.max(a, b, c, d);
//         }
// }
// console.log(findMaxNumber(3, 9, 5, 6));

// 18. ***Создайте функцию, которая будет принимать в себя один аргумент-целое положительное
//  число. Она должна возвращать строку, в которой будут через пробел выведены числа 
//  Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// function fib(amount){
//     let fibonacheString = '';
//     let fibonacheNumEnd = 0;
//     let fibonacheNumStart = 1;
//     let finonacheNumSum = 0;
//     if (typeof(amount) !== 'number' && amount < 1){
//         return("");
//     } else if(amount === 1){
//         fibonacheString += `0`;
//     } else {
//         fibonacheString += `0 1`;
//     }
//     for(let i = 2; i < amount; i++){
//         finonacheNumSum = fibonacheNumEnd + fibonacheNumStart;
//         fibonacheString += (` ${finonacheNumSum}`);
//         fibonacheNumEnd = fibonacheNumStart;
//         fibonacheNumStart = finonacheNumSum;
//     }
//     return(fibonacheString);
// }
// console.log(fib(10));

// Метод Trim
// const a = prompt('Один из последних просмотренных фильмов?', '').trim(),

// Callback- функции позволяет быть уверенным что код не начнет работать до момента 
// пока не сработает эта функция 
// function first(){
//     // do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// //Анонимная функция
// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок');
// });

// Объекты, деструктуризация объектов (ES6), Метод перебора объекта с помощью (for key in)
// Метод Object.keys(options).length для получения количества свойств в объекте

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// Масссивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];
// console.log(arr.length);

// arr.forEach(function(item, i, arr){   // caalback функция в работе с массивами
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }); // в данном переборе нельзя использовать brake и continue 


// arr.pop(); //Удаляеет послдений элемент массива
// arr.push(10); //Добавляет последний элемент в массив, в скобках указывается 
              // что именно добавляется

// console.log(arr);

// for (let value of arr){
//     console.log(value);  перебор массива с помощью цикла for of
// }

// const str = prompt("", "");
// const products = str.split(", "); //Формирует массив из строки
// products.sort();
// console.log(products.join('; ')); //формирует массив в строку

// const arr = [34, 72, 43, 23, 71];
// arr.sort(compareNum); // по умолчанию сортерует по возрастанию (по первым цифрам элемента) или по алфавиту
// console.log(arr);

// function compareNum(a, b){
//     return a - b;           // функция коректирующая сортировку массива по возрастанию
// }

// Передача по ссылке или по значению, Spread оператор (ES6-ES9) 

// let a = 5,
//     b = a;

//     b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;  // изменяя копию изменяется основной объект, это ссылка на основной объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainOnj){
//     let objCopy = {};

//     let key;
//     for (key in mainOnj){
//         objCopy[key] = mainOnj[key];
//     }

//     return(objCopy);
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add); // сетод копирования объекта

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // метод копирования массива

// newArray[1] = 'dfagfsdv';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'video', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk'];

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со
//  всеми данными и возвращать строку с опытом.
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект 
// со всеми данными и возвращать строку в нужном виде.
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs){
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }
//         return(str);
// }

// console.log(showExperience(personalPlanPeter));

// 3) Напишите функцию showFamily, которая будет принимать в себя массив строк и
//  возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//         if (arr.length === 0){
//             return('Семья пуста');
//         } else if (arr.length >= 1) {
//             str += 'Семья состоит из:';
//             for (let name of arr){
//                 str += ` ${name}`;
//             }
//         } 
//     return(str);
// }

// console.log(showFamily(family));

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив
//  строк и будет выводить в консоль эти строки в нижнем регистре.
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку
//  и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка -
// вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами.
//  Её дают для того, чтобы оценить навыки и знания программиста, посмотреть 
//  как он думает. Как небольшая подсказка, есть метод, который может вам помочь.
//   И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     return str.split('').reverse().join('');
// }

// console.log(reverse(someString));

// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает 
// деньги из двух разных банков в разных валютах. Один банк основной с базовыми
//  валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает 
// два аргумента: первый - это массив со всеми доступными валютами из двух банков
//  сразу (сейчас представим, что они не могут повторяться), второй - необязательный 
//  аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
//  Если массив в первом аргументе пустой - то функция возвращает строку 
//  'Нет доступных валют'. Функция возвращает строку в нужном виде.

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//         let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

//  Основы ООП, прототипно-ориентированное наследование
// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);
// const soldier = {
//     health: 400,
//     armor: 100
// };

// const jonh = Object.create(soldier);

// // const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; устаревший код установки прототипа 

// Object.setPrototypeOf(jonh, soldier); 

// console.log(jonh.armor);

//  Динамическая типизация в JS 
// to string

// 1)
// console.log(typeof(String(null)));
// // console.log(typeof(String(4)));

// // 2) конкотинация 
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // to number 

// // 1)
// console.log(typeof(Number('4')));

// // 2) 
// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("hello", "");

// // to boolean 

// // 0, '', null, undefined, NaN;  все то false 
// let switcher = null;

// switcher = 1;

// if (switcher){
//     console.log('working...');
// }

// // 2)
// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!"2222"));

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData);

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// // console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').previousElementSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes){
//     if (node.nodeName == '#text'){
//         continue;
//     }

//     console.log(node);
// }
// function pow(x, n){
//     let result = 1;

//     for (let i = 0; i < n;i++){
//         result *= x;
//     }
// //     return result;
// // }

// function pow(x, n){
//     if(n === 1){
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2, 4));

// // pow(2, 2);
// // pow(2, 3);

// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18 
//         }], 

//         pro:[{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'test',
//                 progress: 100
//             }]
//         }
//     }
// };

// // function getTotalProgressByIteration(data){
// //     let total = 0;
// //     let students = 0;

// //     for (let course of Object.values(data)){
// //         if(Array.isArray(course)){
// //             students += course.length;
// //             for(let i = 0; i < course.length; i++){
// //                 total += course[i].progress;
// //             }
// //         } else {
// //                 for (let subCourse of Object.values(course)){
// //                     students += subCourse.length;

// //                     for(let i = 0; i < subCourse.length; i++){
// //                         total += subCourse[i].progress;
// //                 }
// //           }
// //     }
// // }

// //     return total / students;
// // }

// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data){
//     if(Array.isArray(data)){
//         let total = 0;

//         for(let i = 0; i < data.length; i++){
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//         for(let subData of Object.values(data)){
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);

// function factorial(n) {
//     if(n === 1){
//         return n;
//     } else if (typeof(n) !== 'number' || n % 1 !== 0) {
//         return ('Error');
//     } else if (n <= 0){
//         return (1);
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(3));

// var string = "!(31310";
// var number = +(string.match(/\d+/g));
// console.log(typeof number);
// console.log(number);

// let nodeList = ['$20.00', '$35,000.00', '$6,000.00', '$510.00', '$1,747.92 to $2,497.86', '$1,325.00', '$1,100.00',
//  '$405.00', '$949.99', '$790.00', '$903.22', '$912.00', '$1,299.00', '$1,644.68', '$1,849.99 to $2,699.95',
//   '$3,999.00', '$7,500.00', '$730.00', '$999.99', '$1,720.97 to $2,499.15', '$981.77', '$7.30', '$1,001.00',
//    '$1,600.00', '$1,699.00', '$913.03', '$895.00', '$995.00', '$975.00', '$1,046.00', '$1,200.00', '$6,500.00',
//     '$5,400.00', '$3,999.00', '$5,500.00', '$875.00', '$610.00', '$800.00', '$850.00', '$1,436.40', '$1,144.82',
//      '$1,429.46', '$1,292.20', '$1,217.93', '$1,804.36', '$850.00', '$1,450.00', '$1,487.00', '$1,828.73', '$1,319.08',
//       '$690.00', '$899.00', '$1,213.05', '$1,395.93', '$650.00', '$850.00', '$310.00', '$499.99', '$1,502.74',
//        '$1,254.51', '$1,599.99', '$1,579.00', '$2,000.00', '$2,600.00',
//         '$1,804.36', '$2,100.00', '$8.52', '$2,999.00', '$7,000.00'];
//         const itemBlok = document.querySelectorAll('.s-item__price');
//         const itemLocation = document.querySelectorAll('.x-refine__main__list')[13];
//         const checkString = itemLocation.querySelectorAll('.x-refine__select__svg');

//         checkString.forEach((item) => {
//             item.innerText = 'Грузия';
//         });
        
// let arrPrice = [];

// itemBlok.forEach((price, i) =>{
//     arrPrice.push(price.innerText);
// });
//         function deleteTo(arrPrice){
//             let deleteTo = [];
//             for(let i = 0; i < arrPrice.length; i++){
//                 // console.log(arrPrice[i].indexOf('to'));
//                 if(arrPrice[i].indexOf('to') >= 1){
//                     deleteTo.push(arrPrice[i].split('to')[0]);
//                 } else {
//                     deleteTo.push(arrPrice[i]);
//                 }
//             }
//             return(deleteTo);
//         }
//     function deleteSymbol (arr){
// let sortPrice = [];
//         for (let i = 0; i < arr.length; i++){
//             sortPrice.push(+arr[i].replace(/[^0-9]/g,""));
//         }
//         return (sortPrice);
//     }
//     function newArrSort (deleteSymbol){
//         let averagePrice = 0;
//                 for (let i = 0; i < deleteSymbol.length; i++){
//                     averagePrice += deleteSymbol[i] / deleteSymbol.length;
//                 }
//                 return (Math.round(averagePrice));
//             }

//             for (let i = 0; i < deleteSymbol(arrPrice).length; i++){
//                 if (deleteSymbol(deleteTo(arrPrice))[i] < newArrSort(deleteSymbol(deleteTo(arrPrice)))){
//                     console.log('Ниже средней');
//                     itemBlok[i].style.backgroundColor = 'green';
//                 } else {
//                     console.log('Выше стредней');
//                     itemBlok[i].style.backgroundColor = 'red';
//                 }
//     }
//     function deleteAdvBlock(){
//         const adv = document.getElementById('google_ads_iframe_/79850875/ebay.gbh.search/keywords_0__container__');
//         adv.remove();
//     }

// deleteAdvBlock();
// console.log(deleteTo(arrPrice));
// console.log(deleteSymbol(deleteTo(arrPrice)));
// console.log(newArrSort(deleteSymbol(deleteTo(arrPrice))));
// console.log(checkString);


// // var s = 'http://www.сайт.ру/страница/подстраница_1+строка';
// // s = s.split('+')[0];
// // console.log(s);
//         // 7708744707                дополнительное 
//         // 531903384801
//                 // arrPrice.splice(4, 1, "$1,747.92");
//         // arrPrice.splice(14, 1, "$1,849.99");
//         // arrPrice.splice(19, 1, "$1,720.97");
        
//         checkString.forEach((film, i) => {
//             parent.innerHTML += `
//             <li class="promo__interactive-item">${i + 1} ${film}
//                 <div class="delete"></div>
//             </li>
//             `;
//         });

// Парсинг расписания коледжа
// const list = document.querySelectorAll('.MsoPlainText');
// console.log(list);
// let parceList = [];
// list.forEach((i)=>{
//     parceList.push(i.innerText);
// });
// console.log(parceList);

// let parceList = ['               РАСПИСАНИЕ НА               ', '            СУББОТУ     28.01.23г.         ', '┌────┬──┬──────────────────────────────────┐', '│    │  │                                  │', '│No  │No├──────────────┬───┬───────────────┤', '│гр. │ур│   Предмет    │Ауд│ Преподаватель │', '├────┼──┼──────────────┼───┼───────────────┤', '│ 71 │ 3│ОФЗ           │   │Авраменко Н.Н. │', '│    │  │ОФЗ           │   │Дубатовка О.А. │', '│    │ 4│ФКиЗ          │   │Авраменко Н.Н. │', '│    │  │ФКиЗ          │   │Дубатовка О.А. │', '├────┼──┼──────────────┼───┼───────────────┤', '│ 45 │ 1│Охрана труда  │262│Васько Е.Н.    │', '│    │ 2│Охрана труда  │262│Васько Е.Н.    │', '│    │ 3│Охрана труда  │262│Васько Е.Н.    │', '│    │ 4│Охрана труда  │262│Васько Е.Н.    │', '│    │ 5│МРС           │264│Рязанов В.А.   │', '│    │ 6│МРС           │264│Рязанов В.А.   │', '├────┼──┼──────────────┼───┼───────────────┤', ' ', '               РАСПИСАНИЕ НА               ', '            СУББОТУ     28.01.23г.         ', '┌────┬──┬──────────────────────────────────┐', '│    │  │                                  │', '│No  │No├──────────────┬───┬───────────────┤', '│гр. │ур│   Предмет    │Ауд│ Преподаватель │', '├────┼──┼──────────────┼───┼───────────────┤', '│ 61 │ 1│Ос.тех.маш.пр.│264│Рязанов В.А.   │', '│    │ 2│Ос.тех.маш.пр.│264│Рязанов В.А.   │', '│    │ 3│Ос.тех.маш.пр.│264│Рязанов В.А.   │', '│    │ 4│Ос.тех.маш.пр.│264│Рязанов В.А.   │', '│    │ 5│ФКиЗ          │   │Авраменко Н.Н. │', '│    │  │ФКиЗ          │   │Дубатовка О.А. │', '│    │ 6│ОФЗ           │   │Авраменко Н.Н. │', '│    │  │ОФЗ           │   │Дубатовка О.А. │', '├────┼──┼──────────────┼───┼───────────────┤', '│182 │ 1│М-В и осн.тех.│102│Каратай И.К.   │', '│    │ 2│М-В и осн.тех.│102│Каратай И.К.   │', '│    │ 3│М-В и осн.тех.│102│Каратай И.К.   │', '│    │ 4│М-В и осн.тех.│102│Каратай И.К.   │', '│    │ 5│Ос.техн.мех.  │262│Васько Е.Н.    │', '│    │ 6│Ос.техн.мех.  │262│Васько Е.Н.    │', '├────┼──┼──────────────┼───┼───────────────┤', '│ 81 │ 1│√             │   │               │', '│    │  │Англ.яз.в проф│246│Пермякова Н.Н. │', '│    │ 2│√             │   │               │', '│    │  │Англ.яз.в проф│246│Пермякова Н.Н. │', '│    │ 3│Сист.упр.обор.│265│Синица П.В.    │', '│    │ 4│Сист.упр.обор.│265│Синица П.В.    │', '│    │ 5│Сист.упр.обор.│265│Синица П.В.    │', '│    │ 6│Сист.упр.обор.│265│Синица П.В.    │', '├────┼──┼──────────────┼───┼───────────────┤', ' ', '               РАСПИСАНИЕ НА               ', '            СУББОТУ     28.01.23г.         ', '┌────┬──┬──────────────────────────────────┐', '│    │  │                                  │', '│No  │No├──────────────┬───┬───────────────┤', '│гр. │ур│   Предмет    │Ауд│ Преподаватель │', '├────┼──┼──────────────┼───┼───────────────┤', '│245з│ 1│ЭТ с ос.электр│260│Бондарев М.Б.  │', '│    │ 2│ЭТ с ос.электр│260│Бондарев М.Б.  │', '│    │ 3│ЭТ с ос.электр│260│Бондарев М.Б.  │', '│    │ 4│ЭТ с ос.электр│260│Бондарев М.Б.  │', '├────┼──┼──────────────┼───┼───────────────┤', '│145з│ 1│Над. и диагнос│261│Лукьяненко О.В.│', '│    │ 2│Над. и диагнос│261│Лукьяненко О.В.│', '│    │ 3│Инф.технологии│261│Лукьяненко О.В.│', '│    │ 4│Инф.технологии│261│Лукьяненко О.В.│', '│    │ 5│Над. и диагнос│261│Лукьяненко О.В.│', '│    │ 6│Над. и диагнос│261│Лукьяненко О.В.│', '├────┼──┼──────────────┼───┼───────────────┤', '│171з│ 3│Довр.мед.пом. │101│Перская Т.А.   │', '│    │ 4│Довр.мед.пом. │101│Перская Т.А.   │', '│    │ 5│Довр.мед.пом. │101│Перская Т.А.   │', '│    │ 6│Довр.мед.пом. │101│Перская Т.А.   │', '└────┴──┴──────────────┴───┴───────────────┘', ' ', ' ', ' ', '               РАСПИСАНИЕ НА               ', '            ПОНЕДЕЛЬНИК 30.01.23г.         ', '┌────┬──┬──────────────────────────────────┐', '│    │  │                                  │', '│No  │No├──────────────┬───┬───────────────┤', '│гр. │ур│   Предмет    │Ауд│ Преподаватель │', '├────┼──┼──────────────┼───┼───────────────┤', '│211 │ 1│Бел.язык      │205│Шелесная О.Н.  │', '│    │ 2│Бел.язык      │205│Шелесная О.Н.  │', '│    │ 3│Лiтаратура    │205│Шелесная О.Н.  │', '│    │ 4│Лiтаратура    │205│Шелесная О.Н.  │', '│    │ 5│Допуски       │101│Ключник Н.Н.   │', '│    │ 6│Допуски       │101│Ключник Н.Н.   │', '│    │ 7│Химия         │403│Понасенкова С.В│', '│    │ 8│Химия         │403│Понасенкова С.В│', '├────┼──┼──────────────┼───┼───────────────┤', ' ', '               РАСПИСАНИЕ НА               ', '            ПОНЕДЕЛЬНИК 30.01.23г.         ', '┌────┬──┬──────────────────────────────────┐'];


// function sortArr(pL){
//     let sortList = [];
//     for (let i = 0; i < pL.length; i++){
//         if (pL[i][7] === '1' || pL[i][7] === '2' || pL[i][7] === '3' || pL[i][7] === '4' || pL[i][7] === '5' || pL[i][7] === '6' || pL[i][7] === '7' || pL[i][7] === '8' || pL[i][7] === '9'){
//             sortList.push(pL[i]);
//         }
// }
// return(sortList);
// }

// function splitArr(sA){
//     let elem = [];
//     for (let i = 0; i < sA.length; i++) {
//         elem.push(sA[i].split('│'));
//     }
//     return(elem);
// }

// function sortGroups(splA){
//     let group71 = [];
//     let group45 = [];
//     let group61 = [];
//     let group182 = [];
//     let group81 = [];
//     let group245z = [];
//     let group145z = [];
//     let group171z = [];
//     let group211 = [];
//     for (let i = 0; i < splA.length; i++){
//         if(splA[i][1].includes(' 71')){
//             group71.push(splA[i]);
//             for (let j = i + 1; j < splA.length; j++){
//                 if(splA[j][1].includes('    ')){
//                     group71.push(splA[j]);
//                 } else {
//                     break;
//                 }
//             }
//         }
//     }
//     return(group71);
    
// }
// console.log(sortGroups(splitArr(sortArr(parceList))));

const now = new Date('2023-02-08');
// new Date.parce('2023-02-08');

console.log(now.setHours(18));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} милисикунд`);