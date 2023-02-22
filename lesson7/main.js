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

let [lord, maria, tomek] = arrBooks;
console.log(lord);
console.log(maria);
console.log(tomek);

let[{title, authors:[{name: authorLord, age}], genre}] = arrBooks
console.log(title);
console.log(authorLord);
console.log(genre);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let [{name, age:age2, status}, user3] = users;
// console.log(user3);

let  users2=[...users];
console.log(users2[0]===users[0])
console.log(users2)

let user = {
    name: 'vasya',
    skills: ['html', 'js'],
    greeting: function () {
        console.log('fdgdsfg')
    }
}

let userCloneStr = JSON.stringify(user);
let userClonePar= JSON.parse(userCloneStr);

console.log(userClonePar)


















