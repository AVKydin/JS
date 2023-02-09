// --створити масив з:
//     - з 5 числових значень
const arrNum = [3, 8, 22, 342, 4675];
console.log(arrNum);
// - з 5 стічкових значень
const arrStrings = ['як', 'не', 'крути', 'русні', 'кабздець'];
console.log(arrStrings)
// - з 5 значень стрічкового, числового та булевого типу
const arrMixed = [2, 24, true, 'Hi', false];
console.log(arrMixed);
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arrEmpty = [];
arrEmpty[0] = arrMixed[2];
arrEmpty[1] = arrStrings[4];
arrEmpty[2] = arrMixed[0];
console.log(arrEmpty)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
const arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

{
    let item = 0;
    while (item < arrNumber.length) {
        console.log(arrNumber[item]);
        item++;
    }
}

//     2. перебрати його циклом for
{
    for (let i = 0; i < arrNumber.length; i++) {
        console.log(arrNumber[i]);
    }
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
{
    let item = 1
    while (item < arrNumber.length) {
        console.log(arrNumber[item]);
        item += 2;
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
{
    for (let i = 1; i < arrNumber.length; i += 2) {
        console.log(arrNumber[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
{
    let item = 0;
    while (item < arrNumber.length) {
        console.log(arrNumber[item]);
        item += 2;
    }
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
{
    for (let i = 0; i < arrNumber.length; i += 2) {
        console.log(arrNumber[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
{
    for (let i = 0; i < arrNumber.length; i += 1) {
        if (arrNumber[i] % 3 === 0) {
            arrNumber[i] = "okten";
        }
    }
}
// 8. вивести масив в зворотньому порядку.
{
    let arrNumberReverse = [];
    for (let i = arrNumber.length - 1; i >= 0; i -= 1) {
        let j = (arrNumber.length - 1) - i;
        arrNumberReverse[j] = arrNumber[i];
    }
    console.log(arrNumberReverse)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

{
    const arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    // 1. перебрати його циклом while
    {
        let item = arrNumber.length - 1;
        while (item >= 0) {
            console.log(arrNumber[item]);
            item--;
        }
    }
    //     2. перебрати його циклом for
    {
        for (let i = arrNumber.length - 1; i >= 0; i--) {
            console.log(arrNumber[i]);
        }
    }
    //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
    {
        let item = arrNumber.length - 1;
        while (item >= 0) {
            if (item % 2 !== 0) {
                console.log(arrNumber[item]);
            }
            item -= 1;
        }
    }
    // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    {
        for (let i = arrNumber.length-1; i >=0; i -= 1) {
            if (i % 2 !== 0) {
                console.log(arrNumber[i]);
            }
        }
    }
    // 5. перебрати циклом while та вивести  числа тільки парні  значення
    {
        let item = arrNumber.length-1;
        while (item >=0) {
            if(item%2===0){
            console.log(arrNumber[item]);
            }
            item --;
        }
    }
    // 6. перебрати циклом for та вивести  числа тільки парні  значення
    {
        for (let i = arrNumber.length-1; i >=0; i --) {
            if(i%2===0){
                console.log(arrNumber[i]);
            }
        }
    }
    // 7. замінити кожне число кратне 3 на слово "okten"
    {
        for (let i = arrNumber.length-1; i >=0; i --) {
            if (arrNumber[i] % 3 === 0) {
                arrNumber[i] = "okten";
            }
        }
    }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
{
    const arr = [0,1,2,3,4,5,6,7,8,9,];
    for (const number of arr) {
        console.log(number);
    }
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
{
    const arr = ['asd2','cxx','qwe2','vbnv','hfg4543','ytu','nm,n','ggf','e543656','fgdg'];
    for (const string of arr) {
        console.log(string);
    }
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
{
    const arr = [234, true, null, '15454', Infinity, 4564, undefined, false, 'dzawq', 0];
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
{
    const arr = [234, true, '15454', Infinity, 4564, false, 'dzawq', 0, '', true];
    for (const arrElement of arr) {
        if(typeof arrElement === "boolean"){
            console.log(arrElement);
        }
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
{
    const arr = [234, true, '15454', Infinity, 4564, false, 'dzawq', 0, '', true];
    for (const arrElement of arr) {
        if(typeof arrElement === "number"){
            console.log(arrElement);
        }
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

{
    const arr = [234, true, '15454', Infinity, 4564, false, 'dzawq', 0, ' ', true];
    for (const arrElement of arr) {
        if(typeof arrElement === 'string'){
            console.log(arrElement);
        }
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
{
    const arr = [];
    arr[0] = 54;
    arr[1] = 'dfgdsfg';
    arr[2] = -555;
    arr[3] = 67;
    arr[4] = null;
    arr[5] = 'kva';
    arr[6] = true;
    arr[7] = 'bla';
    arr[8] = 5;
    arr[9] = 4;
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
{
    for (let i = 0; i < 10; i++) {
        console.log('поточний номер кроку -',  i);
        document.write(`<div>поточний номер кроку -  ${i}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
{
    for (let i = 1; i <= 100; i++) {
        console.log('поточний номер кроку -',  i);
        document.write(`<div>поточний номер кроку -  ${i}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
{
    for (let i = 1; i <= 100; i+=2) {
        console.log('поточний номер кроку -',  i);
        document.write(`<div>поточний номер кроку -  ${i}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
{
    for (let i = 1; i <= 100; i++) {
        if(i%2===0){
            console.log('поточний номер кроку -', i);
            document.write(`<div>поточний номер кроку -  ${i}</div>`)
        }
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
{
    for (let i = 1; i <= 100; i++) {
        if(i%2!==0){
            console.log('поточний номер кроку -', i);
            document.write(`<div>поточний номер кроку -  ${i}</div>`)
        }
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
 const arrBooks = [
     {
    title: 'THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING',
    pageCount: 448,
    genre: ['fantasy', 'fdsgdfg'],
    authors: [
        {
            name: 'John Ronald Reuel Tolkien',
            age: 81,
        },
        {
            name: 'John Tolkien',
            age: 81,
        }
    ],
},
 {
    title: 'Марія',
    pageCount: 224,
    genre: ['роман-хроніка', 'sdfsdfsd', 'dfsdfsd', 'dsf'],
    authors: [
        {
            name: 'Улас Самчук',
            age: 82,
        }
    ],
},
{
    title: 'Tомек в країні кенгуру',
    pageCount: 344,
    genre: ['пригоди'],
    authors: [
        {
            name: 'Альфред Шклярський',
            age: 80,
        },
    ],
}
]
// -знайти наібльшу книжку.
    let maxPages = 0;
for (let i=0; i< arrBooks.length; i++) {
    if(arrBooks[i].pageCount>maxPages){
        maxPages = arrBooks[i].pageCount;
    }
}
for (const book of arrBooks) {
    if(book.pageCount===maxPages){
        console.log('найбільша книжка -', book.title)
    }
}
console.log(maxPages)
// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres=0;
for (let i = 0; i < arrBooks.length; i++) {
    if(arrBooks[i].genre.length>maxGenres){
        maxGenres = arrBooks[i].genre.length;
    }
}
for (const book of arrBooks) {
    if(book.genre.length === maxGenres){
        console.log('найбільша кількість жанрів в -', book.title)
    }
}
console.log(maxGenres)
// - знайти книжку/ки з найдовшою назвою
let maxTitle = 0;
for (const book of arrBooks) {
    if(book.title.length>maxTitle){
        maxTitle = book.title.length;
    }
}
for (const book of arrBooks) {
    if(book.title.length === maxTitle){
        console.log('книжка із найдовшою назвою -', book.title)
    }
}
// - знайти книжку/ки які писали 2 автори
// let twoAuthors = 0;
for (const book of arrBooks) {
    if(book.authors.length===2){
        console.log('книжка, написана двома авторами -', book.title)
    }
}
// - знайти книжку/ки які писав 1 автор
let oneAutor = [];

for (const book of arrBooks) {
    if(book.authors.length===1){
        oneAutor[oneAutor.length]=book.title;
        console.log('книжка, написана одним автором -', book.title)
    }
}
console.log(oneAutor)


































