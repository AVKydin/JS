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
    const sortCoursesAndDurationArray = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
    console.log(sortCoursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    const filterCoursesAndDurationArray = coursesAndDurationArray.filter(cours => cours.monthDuration > 5);
    console.log(filterCoursesAndDurationArray)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
    const mapCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
        return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
    })
    console.log(mapCoursesAndDurationArray)
}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
{
    const deckOfCards = [
        {cardSuit: 'spade', value: 6, color: 'black'},
        {cardSuit: 'diamond', value: 6, color: 'black'},
        {cardSuit: 'heart', value: 6, color: 'red'},
        {cardSuit: 'clubs', value: 6, color: 'red'},
        {cardSuit: 'spade', value: 7, color: 'black'},
        {cardSuit: 'diamond', value: 7, color: 'black'},
        {cardSuit: 'heart', value: 7, color: 'red'},
        {cardSuit: 'clubs', value: 7, color: 'red'},
        {cardSuit: 'spade', value: 8, color: 'black'},
        {cardSuit: 'diamond', value: 8, color: 'black'},
        {cardSuit: 'heart', value: 8, color: 'red'},
        {cardSuit: 'clubs', value: 8, color: 'red'},
        {cardSuit: 'spade', value: 9, color: 'black'},
        {cardSuit: 'diamond', value: 9, color: 'black'},
        {cardSuit: 'heart', value: 9, color: 'red'},
        {cardSuit: 'clubs', value: 9, color: 'red'},
        {cardSuit: 'spade', value: 10, color: 'black'},
        {cardSuit: 'diamond', value: 10, color: 'black'},
        {cardSuit: 'heart', value: 10, color: 'red'},
        {cardSuit: 'clubs', value: 10, color: 'red'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'diamond', value: 'jack', color: 'black'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'clubs', value: 'jack', color: 'red'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'diamond', value: 'queen', color: 'black'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'clubs', value: 'queen', color: 'red'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'diamond', value: 'king', color: 'black'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'clubs', value: 'king', color: 'red'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'diamond', value: 'ace', color: 'black'},
        {cardSuit: 'heart', value: 'ace', color: 'red'},
        {cardSuit: 'clubs', value: 'ace', color: 'red'},
    ]

// - знайти піковий туз
    const aceOfSpades = deckOfCards.filter(cours => {
        if (cours.cardSuit === 'spade' && cours.value === 'ace') {
            return cours;
        }
    })
    console.log(aceOfSpades);
// - всі шістки
    const allSixes = deckOfCards.filter(cours => {
        if (cours.value == '6') {
            return cours;
        }
    })
    console.log(allSixes);
// - всі червоні карти
    const allRed = deckOfCards.filter(cours => {
        if (cours.color === 'red') {
            return cours;
        }
    })
    console.log(allRed);
// - всі буби
    const allDiamond = deckOfCards.filter(cours => {
        if (cours.cardSuit === 'diamond') {
            return cours;
        }
    })
    console.log(allDiamond);
// - всі трефи від 9 та більше
    const allClubsGreterNine = deckOfCards.filter(cours =>{
        if (cours.cardSuit === 'clubs' && (cours.value>=9 || typeof cours.value==='string')){
            return cours;
        }
    })
    console.log(allClubsGreterNine);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

    const packaging = deckOfCards.reduce((acc, value)=>{
        if(value.cardSuit === 'spade'){
            acc.spade.push(value);
        }
        if(value.cardSuit === 'diamond'){
            acc.diamond.push(value);
        }
        if(value.cardSuit === 'heart'){
            acc.heart.push(value);
        }
        if(value.cardSuit === 'clubs'){
            acc.clubs.push(value);
        }
        return acc;
    },{spade:[], diamond:[], heart:[], clubs:[]})

    console.log(packaging);
}
// =========================
{//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
    const findSass = coursesArray.filter(modul=>{
        if(modul.modules.includes('sass')){
            return modul;
        }
    })

    console.log(findSass);
// --написати пошук всіх об'єктів, в який в modules є docker
    const findDocker = coursesArray.filter(modul=>{
        if(modul.modules.includes('docker')){
            return modul;
        }
    })
    console.log(findDocker);

}





























