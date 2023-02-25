//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let blockDiv = document.createElement('div');
blockDiv.classList = 'wrap collapse alpha beta';
document.body.appendChild(blockDiv);
let cloneBlockDiv = blockDiv.cloneNode();
document.body.appendChild(cloneBlockDiv);

// - Є масив:
const arr = ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const cours of coursesAndDurationArray) {
    let month;
    if (cours.monthDuration === 4) {
        month = 'місяці';
    } else {
        month = 'місяців';
    }
    let div = document.createElement('div');
    div.innerText = `курс ${cours.title} тривалістю ${cours.monthDuration} ${month}`;
    document.body.appendChild(div);
}


//
// =========================
//
//     - Є той самий масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const cours of coursesAndDurationArray) {
    let month;
    if (cours.monthDuration === 4) {
        month = 'місяці';
    } else {
        month = 'місяців';
    }
    let div = document.createElement('div');
    div.classList = 'item';
    let h1 = document.createElement('h1');
    h1.classList = 'heading';
    h1.innerText = `курс ${cours.title}`;
    let p = document.createElement('p');
    p.classList = 'description'
    p.innerText = ` тривалістю ${cours.monthDuration} ${month}`;
    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList = 'member';
    let img = document.createElement('img');
    img.src = simpson.photo;
    let h3 = document.createElement('h3');
    h3.innerText = `${simpson.name} ${simpson.surname}`
    let h4 = document.createElement('h4');
    h4.innerText = `Кількість років - ${simpson.age}`
    let p = document.createElement('p');
    p.innerText = `${simpson.info}`
    document.body.appendChild(div);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(p);

}


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
for (const cours of coursesArray) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = cours.title;
    let spanMD = document.createElement('span');
    spanMD.innerHTML = `кількість місяців - <b>${cours.monthDuration}</b>! `;
    let spanHD = document.createElement('span');
    spanHD.innerHTML = `кількість годин - <b>${cours.hourDuration}</b>!`;
    let divUl = document.createElement('div')
    let ul = document.createElement('ul');
    document.body.appendChild(div);
    div.appendChild(h2);
    div.appendChild(spanMD);
    div.appendChild(spanHD);
    div.appendChild(divUl);
    divUl.appendChild(ul);
    ul.innerHTML = `<b><i>модулі курсу:</i></b>`
    for (const module of cours.modules) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = module;
    }
}
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let divContainer = document.createElement('div')
let arbitraryElement = document.createElement('div');
arbitraryElement.classList = 'disappears';
arbitraryElement.id = 'text'
let btn = document.createElement('button');
btn.innerText = 'Click'
document.body.appendChild(divContainer);
divContainer.append(btn, arbitraryElement)


btn.addEventListener('click', function () {
    let text = document.querySelector('#text');
    if (!!text) {
        text.remove();
    } else {
        divContainer.appendChild(arbitraryElement);
    }

    // arbitraryElement.classList.toggle('disappears')
})


//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let input = document.createElement('input');
input.classList = 'inputAge'
document.body.appendChild(input);
let btnAge = document.createElement('button');
btnAge.innerText = 'verify age'
document.body.appendChild(btnAge);

btnAge.addEventListener('click', function () {
    if (input.value >= 18) {
        alert('Заходь')
    } else {
        alert('Треба підрости ще')
    }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let divTable = document.createElement('div')
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btnTable = document.createElement('button');
btnTable.innerText = 'Create table';
document.body.appendChild(divTable);
divTable.append(input1, input2, input3, btnTable);
btnTable.addEventListener('click', function () {
        let table = document.createElement('table');
        table.id = 'table'
        let isTable = document.querySelector('#table')
        if (!!isTable) {
            isTable.remove();
        }
    if (input1.value > 50 || input2.value > 50) {
        alert('Забагато комірок вийде');
    } else {
        divTable.appendChild(table);
        for (let i = 0; i < input1.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 0; j < input2.value; j++) {
                let td = document.createElement('td');
                td.innerText = input3.value;
                td.classList = 'td'
                tr.appendChild(td);
            }
        }
    }
    input1.value = '';
    input2.value = '';
    input3.value = '';
})















