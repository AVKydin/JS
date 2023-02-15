// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    const hello = 'hello world';
    const lorem = 'lorem ipsum';
    const js = 'javascript is cool';
    console.log(hello.length);
    console.log(lorem.length);
    console.log(js.length)
}
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    const hello = 'hello world';
    const lorem = 'lorem ipsum';
    const js = 'javascript is cool';
    console.log(hello.toUpperCase());
    console.log(lorem.toUpperCase());
    console.log(js.toUpperCase())
}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    const hello = 'HELLO WORLD';
    const lorem = 'LOREM IPSUM';
    const js = 'JAVASCRIPT IS COOL';
    console.log(hello.toLowerCase());
    console.log(lorem.toLowerCase());
    console.log(js.toLowerCase())
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let str = ' dirty string   ';
    console.log(str.trim());
}
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    let str = 'Ревуть воли як ясла повні';
    const stringToArray = (str) => str.split(' ');
    console.log(stringToArray(str))
}
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    const arrStr = arr.map(x => x + "");
    console.log(arrStr);
}
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    let nums = [11, 21, 3, Infinity, 555, 1, 202, -Infinity];

    console.log(nums);
    const sortNums = (arr, direction) => {
        if (direction === 'ascending') {
            return arr.sort(foo);
        } else if (direction === 'descending') {
            return arr.sort(foo2);
        }
    }
    const foo = (a, b) => a - b;
    const foo2 = (a, b) => b - a;
    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));
}
// ==========================
{// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortCoursesAndDurationArray = (coursesAndDurationArray)=>{

}
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker