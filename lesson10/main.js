// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.createElement('form');
let inputName = document.createElement('input');
inputName.placeholder = `Введіть своє ім'я`;
let inputSurname = document.createElement('input');
inputSurname.placeholder = `Введіть своє прізвище`;
let inputAge = document.createElement('input');
inputAge.placeholder = `Введіть свій вік`;
let btn = document.createElement('a');
btn.classList = 'btn'
btn.innerText = `Готово`;
let divText = document.createElement('div');

document.body.appendChild(form);
form.append(inputName, inputSurname, inputAge, btn);
document.body.appendChild(divText);

btn.addEventListener('click', function (){
    let h2 = document.createElement('h2');
    h2.innerText = `Вітаю, ${inputSurname.value[0].toUpperCase()}${inputSurname.value.slice(1)} ${inputName.value[0].toUpperCase()}${inputName.value.slice(1)}, ${inputAge.value}р.!`
    divText.appendChild(h2);
    inputSurname.value = '';
    inputName.value = '';
    inputAge.value = '';
})
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let blockNumber = document.createElement('div');
blockNumber.classList = 'divBlock';
let p = document.createElement('p');
let counter = 0;
p.innerText = counter;
    let btnReboot = document.createElement('button');
btnReboot.innerText = 'Перезавантажити сторінку'
document.body.append(blockNumber, btnReboot);
blockNumber.appendChild(p);

btnReboot.addEventListener('click', function (){
    p.innerText = counter;
    counter++
})

// window.onload = function (){
//
//     console.log(counter)
//     counter++
//     p.innerText = counter;
//
//
// }

// Local storage спробувати заюзати


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів