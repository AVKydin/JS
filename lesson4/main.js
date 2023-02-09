// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfTheRectangle(a, b) {
    return a * b;
}

console.log(areaOfTheRectangle(5, 4));

let areaOfTheRectangle2 = (a, b) => a * b;
console.log(areaOfTheRectangle2(6, 3));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return 3.14 * r * r;
}

console.log(areaCircle(5));
const areaCircle2 = (r) => 3.14 * r * r;
console.log(areaCircle2(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * 3.14 * r * (r + h);
}

console.log(areaCylinder(3, 2));

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

const lookItem = function (arr) {
    for (const item of arr) {
        console.log(item);
    }
}
lookItem(coursesTitleArray);

const lookItem2 = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}

lookItem2(coursesTitleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraph = (arg) => {
    document.write(`<p>${arg}</p>`)
}

paragraph("Hello guys")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = (arg) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${arg} ${i + 1}</li>`);

    }
    document.write('</ul>')
}

list('item')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

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
        document.write(`<h3>${argument.name}</h3>`)
        document.write(`<ul>`)
        for (const argumentKey in argument) {
            document.write(`<li>${argumentKey} - ${argument[argumentKey]}</li>`)
        }
        document.write(`</ul>`)

    }
}

writeArrObj(users);

// - створити функцію яка повертає найменьше число з масиву
const arrNumbers = [155, 55, 34, 78, 100500, 0, 21, -7, 555, -500, -Infinity];
const minNunber = (arr) => {
    let min = arr[0];
    for (const i of arr) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}

console.log(minNunber(arrNumbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr)=>{
    let sum = 0;
    for (const i of arr) {
        sum += i
    }
    return sum;
}

console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 3, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const element of currencyValues) {
            for (const elementKey in element) {
                if(typeof element[elementKey] === "string") {
                    if (exchangeCurrency === element[elementKey]) {
                        return sumUAH / element.value;
                    }
                }
            }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 49}], 'GBP'));

















