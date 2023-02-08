// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
{
    const arr = [];
    for (let i = 0; i < (arr.length = 50); i++) {
        if (i % 2 === 0) {
            arr[i] = i;
        } else {
            arr[i] = i + 51;
        }
    }
    console.log(arr)
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
{
    const arr = [];
    for (let i = 0; i < 50; i += 1) {
        if (i % 2 !== 0) {
            arr[i] = i;
        } else {
            arr[i] = i + 53;
        }
    }
    console.log(arr)
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
{
    const arr = [];
    for (let i = 0; i < 20; i += 1) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    console.log(arr)
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

const arr = [];
for (let i = 0; i < 20; i += 1) {
    arr[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i])
}
console.log('----------------------')
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}
console.log('----------------------')

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrNew = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        arrNew[arrNew.length] = arr[i];
    }
}
console.log(arrNew)
console.log('----------------------')

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log('----------------------')

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const arrSale = [100,250,50,168,120,345,188];
let sumSale=0;
for (const sale of arrSale) {
    sumSale+=sale;
}
let midleSale = sumSale/arrSale.length;
console.log(midleSale)

console.log('----------------------')

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
{
    const arr = [];
    const arrAnother =[];
    for (let i = 0; i < 20; i += 1) {
        arr[i] = Math.floor(Math.random() * 100);
        arrAnother[i]=arr[i]*5;
    }

    console.log(arr);
    console.log(arrAnother);
}
console.log('----------------------')

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
{
    const arrAnother =[];
    const arr = [234, true, null, '15454', Infinity, 4564, undefined, false, 'dzawq', 0];
    for (const arrElement of arr) {
        if(typeof arrElement == "number"){
            arrAnother[arrAnother.length] = arrElement;
        }
    }
    console.log(arrAnother)
}

//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
    const arrayNew = [];

for (const city of citiesWithId) {
    for (const user of usersWithId) {
        if (city.user_id===user.id){
            user.address = city;
            arrayNew[user.id-1] =user;
        }
    }
}
console.log(usersWithId)


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
{
    const arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (const number of arrNumber) {
        if(number%2===0){
            console.log(number)
        }
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
{
    const arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    const arrNew = [];
    for (const arrElement of arrNumber) {
        arrNew[arrNew.length] = arrElement;
    }
    console.log(arrNumber);
    console.log(arrNew)
}

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
{
    const arr = [ 'a', 'b', 'c'];
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string+=arr[i];
    }
    console.log(string);
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
{
    const arr = [ 'a', 'b', 'c'];
    let string = '';
    let i = 0;
    while (i<arr.length){
        string+=arr[i];
        i++;
    }
    console.log(string)
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
{
    const arr = [ 'a', 'b', 'c'];
    let string = '';
    for (const element of arr) {
        string+=element;
    }
    console.log(string)
}

