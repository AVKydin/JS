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
const list = (arg)=>{
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${arg} ${i+1}</li>`);

    }
    document.write('</ul>')
}

list('item')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250