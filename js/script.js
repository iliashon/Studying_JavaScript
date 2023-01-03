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

function fib(amount){
    let fibonache = '';
    let fibonacheNum = 0;
    if (typeof(amount) !== 'number' && amount < 1){
        return("");
    } else {
        fibonache += '0 1';
        for (let i = 0; i < amount; i++){
            if(fibonache[i] !== ' ' && fibonache[i + 2] !== ' '){
                fibonacheNum = fibonache[i] + fibonache[i + 2];
                fibonache += fibonacheNum;
            } else{
                continue;
            }
        }
    }
    return(fibonache);


    
}

console.log(fib(4));

// let temperature = [8, 5, 3, 10, 12, 6, 5, -4, -7, -2, -7, -10];
// let timesOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i < 12; i++){
//     if (temperature[i] < 0){
//         console.log(temperature[i] + ' ' + timesOfDay[i]);
//         break;
//     }
// }