{
    // Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    // Вивести кожну змінну за допомогою: console.log

    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';
    let one = 1;
    let ten = 10;
    let num1 = -999;
    let num2 = 123;
    let num3 = 3.14;
    let num4 = 2.7;
    let num5 = 16;
    let t = true;
    let f = false;

    console.log(hello);
    console.log(owu);
    console.log(com);
    console.log(ua);
    console.log(one);
    console.log(ten);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);
    console.log(t);
    console.log(f);
}
console.log('**************************************');

{

    // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
    // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    let firstName = 'Anatoliy';

    let middleName = 'Volodimirovich';
    let lastName = 'Kudin';

    let person = `${firstName} ${middleName} ${lastName}`

    console.log(person);
}
console.log('**************************************');
{

    // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    // let a = 100; let b = '100'; let c = true;

    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
console.log('**************************************');
{
//     Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

    let firstName = prompt(`Введіть Ваше ім'я`);
    let middleName = prompt(`Введіть Ваше по батькові`);
    let age = +prompt(`Введіть Ваш вік`);

    let person = `${firstName} ${middleName} ${age}`

    console.log(person);
}

































