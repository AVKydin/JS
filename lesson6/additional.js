// - Напишіть функцію cutString(str, n), яка ділить стрічку на підстрічки, що складається з n символів.
// document.writeln(cutString('насолода',3)) // [нас,оло,да]
{
    const cutString = function (str, n) {
        let newStr = '';
        for (let i = 0; i < str.length; i += n) {
            if (str.length < i + n) {
                newStr += str.substring(i, i + n);
            } else {
                newStr += str.substring(i, i + n) + ',';

            }
        }
        return newStr

    }
    document.write(cutString('насолода', 3))
    document.write(`<br>`)
}
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Кожен мисливець бажає знати';
// document.writeln(delete_characters(str, 7)); // Кожен
{
    let str = 'Кожен мисливець бажає знати';
    const delete_characters = (str, length) => str.substring(0, length);

    document.write(delete_characters(str, 5));
    document.write(`<br>`);
}
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
{
    let str = "HTML JavaScript PHP";
    const insert_dash = function (str) {
        return str.toUpperCase().split(' ').join('-')
    }
    document.writeln(insert_dash(str));
    document.write(`<br>`);

}
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
{
    let str = "html javaScript php";
    const fStr = i => i[0].toUpperCase() + i.substring(1);

    document.writeln(fStr(str));
    document.write(`<br>`);

}
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
{
const validName = function (name){
    let validName;
    if(name.includes('.')){
        let splitName = name.split('.');
        validName = splitName[0] + " " + splitName[splitName.length-1]

    } else if(name.includes('-')){
        let splitName = name.split('-');
         validName = splitName[0] + " " + splitName[splitName.length-1]
    } else if(name.includes('_')){
        let splitName = name.split('_');
        validName = splitName[0] + " " + splitName[splitName.length-1]
    }

    return validName;

}
    let n1 = 'Harry........Potter';
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
    console.log(validName(n1));
    console.log(validName(n2));
    console.log(validName(n3));
}
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
{
    const randomNumber = (n)=>{
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random()*100));
        }
        return arr;
    }
    console.log(randomNumber(5));
    console.log(randomNumber(15));
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
{
    const randomNumber = (n)=>{
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random()*100));
        }
        return arr;
    }
    console.log(randomNumber(5).sort((a,b)=>a-b));

}
console.log('********************************************')
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
{
    const randomNumber = (n)=>{
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random()*100));
        }
        return arr;
    }
   const rN = randomNumber(5)
    console.log(rN)
    console.log(rN.filter((i)=> {
        if (i % 2 === 0 && !i.toString().includes(0)){
            return i;
        }

    }))
}
console.log('********************************************')

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
{
    let str = 'Кожен мисливець бажає знати'
    const capitalize = str=> str.split(' ').map(item => item[0].toUpperCase()+item.slice(1));

    console.log(capitalize(str))
}
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
console.log('********************************************')

{

    const validEmail = function (email) {
        let validEmail = email.toUpperCase();
        let startsWith = validEmail.startsWith('@');
        let includes = validEmail.includes('@');
        let indexSnail = validEmail.indexOf('@');
        let indexPoint = validEmail.indexOf('.');
            if(startsWith === false && includes && indexPoint-indexSnail>1){
                return 'OK!'
            } else {
                return 'Не OK!'
            }
    }

    console.log(validEmail('someemail@gmail.com'));
    console.log(validEmail('someeMAIL@gmail.com'));
    console.log(validEmail('someeMAIL@i.ua'));
    console.log(validEmail('some.email@gmail.com'));
}
console.log('********************************************')

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
//- є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
console.log('********************************************')

//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb))
{
    let symb = "а", str = 'Кожен мисливець бажає знати';
    const count = function (str, stringsearch){
        let counter = 0;
        for (const strElement of str) {
            if (strElement===stringsearch){
                counter++
            }
        }
        return counter;
}
console.log(count(str, symb));

console.log('********************************************')
}

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
{
    let symb = "2", str = 'Кожен мисливець бажає знати';
    const cutString = (str, n)=> {
        let split = str.split(' ');
        split.splice(n);
        return split.join(' ')
    };

    console.log(cutString(str, symb))
}
console.log('********************************************')
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
{
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

// - вісортувати книжки по кількості сторінок по зростанню

    const sortBooks = (arr)=> arr.sort((a,b)=>a.pageCount-b.pageCount)

    console.log(sortBooks(arrBooks))
}