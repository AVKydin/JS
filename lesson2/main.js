// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [10, true, -55, 'string', false, 'infinity', "стоп'ятсот", ' ', {}, []];

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING',
    pageCount: 448,
    genre: 'fantasy'
}
let book2 = {
    title: 'Марія',
    pageCount: 224,
    genre: 'роман-хроніка'
}
let book3 = {
    title: 'Tомек в країні кенгуру',
    pageCount: 344,
    genre: 'пригоди'
}

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING',
    pageCount: 448,
    genre: 'fantasy',
    authors: ['John Ronald Reuel Tolkien', 81],
}
let book5 = {
    title: 'Марія',
    pageCount: 224,
    genre: 'роман-хроніка',
    authors: ['Улас Самчук', 82],
}
let book6 = {
    title: 'Tомек в країні кенгуру',
    pageCount: 344,
    genre: 'пригоди',
    authors: ['Альфред Шклярський', 80],
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUser = [
    {
        name: 'petro',
        username: 'petrik',
        password: '123qaz'
    },
    {
        name: 'ivan',
        username: 'vania',
        password: '1111'
    },
    {
        name: 'vitaliy',
        username: 'vetal',
        password: 'Vtal'
    },
    {
        name: 'vova',
        username: 'VV',
        password: 'V666V'
    },
    {
        name: 'gnat',
        username: 'gnatIK',
        password: 'KItang'
    },
    {
        name: 'oleksandr',
        username: 'ksandr',
        password: 'hz_password'
    },
    {
        name: 'andriy',
        username: 'dron',
        password: 'kamikadze'
    },
    {
        name: 'valeriy',
        username: 'varenik',
        password: 'okrip'
    },
    {
        name: 'leonid',
        username: 'leon',
        password: 'IDLeon'
    },
    {
        name: 'bayraktar',
        username: 'turok',
        password: 'rus-ni--peace-da'
    }
]

console.log(arrUser[0]['password']);
console.log(arrUser[1].password);
console.log(arrUser[2]['password']);
console.log(arrUser[3].password);
console.log(arrUser[4]['password']);
console.log(arrUser[5].password);
console.log(arrUser[6]['password']);
console.log(arrUser[7].password);
console.log(arrUser[8]['password']);
console.log(arrUser[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('введіть довільне число');
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')

}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = +prompt('введіть число від 0 до 59');
if (time >= 0 && time < 15) {
    console.log('перша чверть години')
} else if (time >= 15 && time < 30) {
    console.log('друга чверть години')
} else if (time >= 30 && time < 45) {
    console.log('третя чверть години')
} else if (time>=45 && time<60){
    console.log('четверта чверть години')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('введіть число від 1 до 31');
if (day >= 1 && day < 11) {
    console.log('перша декада місяця')
} else if (day >= 11 && day < 21) {
    console.log('друга декада місяця')
} else if (day >= 21 && day < 32) {
    console.log('третя декада місяця')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numDay = parseInt(prompt('введіть порядковий номер дня тижня (від 0 до 6)'));
switch(numDay) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('На цій планеті всього сім днів у тижні');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Введіть перше число');
let num2 = parseInt(prompt('Введіть друге число'));
if(num1>num2){
    console.log(num1)
} else if(num1<num2){
    console.log(num2)
}else {
    console.log('числа рівні')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let X = prompt('Введіть що-небудь');
if (X === '0' || X === null || X === undefined || X === NaN || X === '') {
    X = "default";
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if(coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[1]['monthDuration'] > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[3]['monthDuration'] > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер");
}
if(coursesAndDurationArray[5]['monthDuration'] > 5){
    console.log("Супер");
}
























