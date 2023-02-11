// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    const areaOfTheRectangle = (a,b) => a*b;

console.log(areaOfTheRectangle(2, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle2 = (r) => 3.14 * r * r;
console.log(areaCircle2(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCylinder2 = (h, r) => 2 * 3.14 * r * (r + h);
console.log(areaCylinder2(3, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
const lookItem = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}

lookItem(coursesTitleArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraph = (text) => document.write(`<p>${text}</p>`);

paragraph("Hello guys")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = (text) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text} ${i + 1}</li>`);

    }
    document.write('</ul>')
}

list('item')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
const list2 = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list2('hello', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

const listArr = (arg) => {
    document.write(`<ul>`)
    for (const argument of arg) {
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`)
}

listArr(listOfItems);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
];

const writeArrObj = (arr) => {
    for (const argument of arr) {
        document.write(`<div>`)
            document.write(`<h3>${argument.name}</h3>`)
            document.write(`<ul>`)
            for (const argumentKey in argument) {
                document.write(`<li>${argumentKey} - ${argument[argumentKey]}</li>`)
            }
            document.write(`</ul>`)
        document.write(`</div>`)
    }
}

writeArrObj(users);
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250






















