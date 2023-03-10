{// Завдання 1. Ви просите користувача запровадити суму його зарплати. Потім розраховуєте:
//
//     Добавку у вигляді премії у сумі 15% від зарплати.
//     Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
//     Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".
//     При вирішенні використовуйте арифметичні оператори присвоєння, наприклад, res -=100 або res /=2, де res - це змінна,
//     в яку ви записуєте всі дії з розрахунку сум.
//
//     Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

    // let salary = +prompt('Введіть суму зарплати');

    function remainderSalary(salary) {
        let salaryWithBonus = salary * 1.15;
        let netSalary = salaryWithBonus * 0.9;
        let spending = +prompt('На яку суму скупилися в магазині?');
        return (netSalary - spending) / 2;
    }

    // console.log(remainderSalary(salary));

}

{
    // Завдання 2. Потрібно попросити користувача задумати число. Потім він повинен помножити це число на 2 і додати
    // до отриманого результату 7. Те, що сталося в результаті, потрібно ввести у діалоговому вікні prompt().
    // Ви повинні видати користувачеві, скільки він задумав.

    // let number = +prompt('Введіть число');
    const riddledNumber = function (number) {
        return (number - 7) / 2;
    }
    // console.log(riddledNumber(number));
}


{
    // Завдання 3. Попросіть користувача ввести 3 імені та прізвища, наприклад студентів. Виведіть введені дані в тіло документа
    // методом document.write() у вигляді абзаців та нумерованого списку.
    // Використовуйте при виведенні інформації подвійні, одинарні та зворотні лапки.


    // let studentName1 = prompt('Введіть ім\'я та прізвище першого студента');
    // let studentName2 = prompt('Введіть ім\'я та прізвище другого студента');
    // let studentName3 = prompt('Введіть ім\'я та прізвище трєтього студента');

    const allStudents = function (...arr) {
        document.write(`<div>`);
        document.write(`<ul>`);
        for (const arrElement of arr) {
            document.write(`<li>${arrElement}</li>`);
        }
        document.write(`</ul>`);
        document.write(`</div>`);
    }
    // allStudents(studentName1, studentName2, studentName3);
}

{
    // Завдання 4. Розв'яжіть просте математичне завдання: 3 особи пішли за покупками. Кожен наступний витратив у 5 разів
    // більше за попередній. Скільки витратив кожен, якщо усі разом заплатили 24 грн 80 коп? 186 грн? 319 грн 30 коп?
    // Запишіть рішення як функції. Викличте цю функцію з різними параметрами. Виводьте інформацію в консоль або за допомогою document.write().
    // Спробуйте повертати з функції об'єкт із трьома значеннями.

    const costs = function (sum) {
        let first = sum / 31;
        let second = 5 * first;
        let third = 5 * second;
        return [first, second, third]
    }
    console.log(costs(24.80));
    console.log(costs(186));
    console.log(costs(319.30));

}


{
//    a) Завдання 5.За допомогою методу prompt() отримайте спочатку ім'я користувача, потім рік його народження та збережіть у 2 змінні.' +
// ' Обчисліть вік користувача та виведіть його в абзаці за допомогою document.write() у такому форматі "Антон: 24".
    let currentYear = 2023;
    // let name = prompt('Введіть ім\'я');
    // let yearOfBirth = +prompt('Введіть рік народження');
    const calculateAge = function (name, yearOfBirth) {
        let age = currentYear - yearOfBirth;
        document.write(`<div>
                            "${name}: ${age}"  
                        </div>`)
    }
    // calculateAge(name, yearOfBirth);
}
{    // b) Визначте залишок від розподілу кількості років на 10. Залежно від цього виведіть в абзаці "Антон: 21 рік"
    // або "Антон: 24 роки" або "Антон: 25 років". Тобто. всім чисел з першого в кінці має бути "_1 рік",
    // для чисел з 2,3,4 наприкінці - "_3 року", а всіх інших - "_7 років". Для цього можна використовувати умовні конструкції if...else або switch...case.
    let currentYear = 2023;
    // let name = prompt('Введіть ім\'я');
    // let yearOfBirth = +prompt('Введіть рік народження');
    const calculateAge = function (name, yearOfBirth) {
        let age = currentYear - yearOfBirth;
        if (age % 10 === 1) {
            document.write(`<div>
                            "${name}: ${age} рік"  
                        </div>`)
        } else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {

            document.write(`<div>
                            "${name}: ${age} роки"  
                        </div>`)
        } else {

            document.write(`<div>
                            "${name}: ${age} років"  
                        </div>`)
        }
    }
    // calculateAge(name, yearOfBirth);
}
// c) Розв'яжіть це завдання за допомогою тернарного оператора
    let currentYear = 2023;
    // let name = prompt('Введіть ім\'я');
    // let yearOfBirth = +prompt('Введіть рік народження');
    const calculateAge = function (name, yearOfBirth) {
        let age = currentYear - yearOfBirth;

        age % 10 === 1
            ? document.write(`<div>"${name}: ${age} рік"</div>`)
            :age % 10 === 2 || age % 10 === 3 || age % 10 === 4
            ? document.write(`<div>"${name}: ${age} роки"</div>`)
            : document.write(`<div>"${name}: ${age} років"</div>`)

    }
    // calculateAge(name, yearOfBirth);

{// d) При розрахунку віку використовуйте об'єкт Date та його метод getFullYear() для отримання року зараз, а не просто число.
    let currentYear = new Date().getFullYear();
    // let name = prompt('Введіть ім\'я');
    // let yearOfBirth = +prompt('Введіть рік народження');
    const calculateAge = function (name, yearOfBirth) {
        let age = currentYear - yearOfBirth;

        age % 10 === 1
            ? document.write(`<div>"${name}: ${age} рік"</div>`)
            : age % 10 === 2 || age % 10 === 3 || age % 10 === 4
                ? document.write(`<div>"${name}: ${age} роки"</div>`)
                : document.write(`<div>"${name}: ${age} років"</div>`)

    }
    // calculateAge(name, yearOfBirth);
}
{
    // Завдання 6.Компанія з транспортування меблів заносить будь-які меблі на 1-й поверх безкоштовно, з 2-го по 4-й включно - по 20грн.,
    // з 5-го по 7-й включно - по 30грн., а з 8-го і вище - по 40 грн. Дізнайтеся у користувача, на який поверх потрібно занести меблі,
    // та розрахуйте вартість транспортування.
    // const floor = parseInt(prompt('Вкажіть поверх'));
    let cost = 0;
    const shippingCost = ()=>{
        if (floor === 1){
            alert('Доставимо безкоштовно');
        } else if (floor > 1 && floor <5 ){
            cost = floor*20-20;
            alert(`Доставимо за ${cost} грн`);
        } else  if (floor>4 && floor <8) {
            cost = floor*30-60;
            alert(`Доставимо за ${cost} грн`);
        } else if (floor >7) {
            cost = floor*40-130;
            alert(`Доставимо за ${cost} грн`);
        } else {
            alert(`Доставимо за 100000000000000000000000000000000 грн або ж Ви помилися поверхом`);
        }
    }

    // shippingCost(floor);
}

{
    // Завдання 7. Вгадай число. За допомогою prompt() пропонуєте ввести число від 1 до 10 включно і записуєте в змінну.
    // Другий змінної привласнюєте випадкове число в тому ж діапазоні за допомогою Math.random(), округливши його до цілого значення.
    // У випадку, якщо випадкове число та число, введене користувачем збіглися, виводьте в консоль "Ви щасливчик! Ваше число ...",
    // якщо не збіглися - "Не вгадали! Ваше число ..., а випало число ..." (замість точок мають бути значення відповідних змінних.

    // const num = parseInt(prompt('Введіть число від 1 до 10 включно'));
    // let numRandom = Math.floor(Math.random()*(11-1) + 1);
    // if (num===numRandom){
    //     console.log(`Ви щасливчик! Ваше число ${num}`)
    // } else {
    //     console.log(`Не вгадали! Ваше число ${num}, а випало число ${numRandom}`)
    // }
}

{
    // Завдання 8. Парне-непарне. Сума та добуток чисел. Користувач вводить через prompt() чотиризначне число. Вам потрібно вивести в консоль,
    // чи є число парним чи непарним, а також знайти добуток його цифр, якщо число парне, або суму його цифр, якщо число непарне.
    // Якщо введено рядок, то виведіть повідомлення про це (використовуйте для перевірки функцію isNaN()).
    // Якщо було введено число, виведіть, які цифри воно ділиться без залишку (від 2 до 10) . Кожне повідомлення має бути
    // на новому рядку, але в тому самому вікні alert().

    const num = prompt('Введіть число чотиризначне число');
    if (isNaN(num)){
        alert('не число');
    } else if (Number(num)){
        alert('dfsgdfsg')
        const numbers =[];
        for (let i = 2; i < 11; i++) {
            if (num%i===0){
                numbers.push(i);
            }
        }
        console.log(numbers);
        for (const number of numbers) {
            
        }
        let string = num + '';
        let multiplication = string[0]*string[1]*string[2]*string[3];
        console.log(`Число парне. Добуток його цифр = ${multiplication}`)
    } else if (num%2!==0){
        let string = num + '';
        let multiplication = +string[0]+(+string[1])+(+string[2])+(+string[3]);
        console.log(`Число непарне. Сума його цифр = ${multiplication}`)
        alert(`fsdfsdfsd
        dsfsdfsd
        dsfsdfsfsd`)
    }

}

{
    // Завдання 9. Декілька умов. Сходи if...else Попросіть користувача ввести розмір зарплати. Розрахуйте, яку суму він має
    // перерахувати на податок та яку суму він отримає на руки, якщо податки нараховуються таким чином:
    // Зарплата до 6000 включно – 10%; Зарплата до 10 000 включно – 15%; Зарплата до 15 000 включно – 17.5%; Зарплата понад 15 000 – 20%.
    // Використовуйте множинні умови для перевірки діапазону введених користувачем даних.
}

{
    // Завдання 10. Вивести за допомогою циклу 8-10 подібних зображень (квіти, автомобілі, футболісти, іграшки, чашки), наприклад:
}

{
    // Завдання 11. Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу for, while та do...while. Підказка: у результаті має вийти 55.
}
















