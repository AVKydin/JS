
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
{
    let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
    if (friends.length >= 3) {
        // alert('це великий масив, в якому  3 і більше елементи')
    } else {
        // alert('це маленький масив, в якому менше 3-х елементів')
    }
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
{

}
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
{
    let result;
    // (a + b < 4)?result = 'Мало':result = 'Багато';
}

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
{
    let num = 0;
    // num > 0 ? alert('позитивне') : num < 0 ? alert('негативне') :alert('нуль')
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
{
    // let test = true;
    // if (test) {
    //     console.log('Вірно');
    // } else {
    //     console.log('Неправильно');
    // }
    // test ? console.log('Вірно') : console.log('Неправильно');
}
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// {   let question = prompt('Яка «офіційна» назва JavaScript?')
//     if(question === 'ECMAScript'){
//         alert('Правильно')
//     } else {
//         alert('Не знаєте? ECMAScript!')
//     }
// }
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
{
    // let apartment = parseInt(prompt('Введіть номер квартири'));
    // if (apartment > 0 && apartment < 21) {
    //     alert('Квартира у першому під\'їзді');
    // } else if (apartment > 20 && apartment < 49) {
    //     alert('Квартира у другому під\'їзді');
    // } else if (apartment > 48 && apartment < 91) {
    //     alert('Квартира у третьому під\'їзді');
    // } else {
    //     alert('Такої квартири у цьому будунку не існує');
    // }
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

{
    // let number = 10;
    // switch (number){
    //     case 10:
    //         console.log('вірно');
    //         break;
    //     default:
    //         console.log('не вірно')
    // }
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
{
    // let temperature = 30;
    // if(temperature>9 && temperature<23){
    //     console.log('ми йдемо ВЧИТИСЯ!!!');
    // } else {
    //     console.log('сидимо вдома і вчимося ОНЛАЙН')
    // }
}



// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
{
    // const number = parseInt(prompt('Введіть число від 1 до 5'));
    // switch (number){
    //     case 1:
    //         console.log('авто');
    //         break;
    //     case 2:
    //         console.log('мото');
    //         break;
    //     case 3:
    //         console.log('телефон');
    //         break;
    //     case 4:
    //         console.log('чорнослив');
    //         break;
    //     case 5:
    //         console.log('зубочистка');
    //         break
    //     default:
    //         console.log('спробуй ще');
    // }
}























