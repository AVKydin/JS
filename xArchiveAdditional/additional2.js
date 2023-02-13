// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
{
    const arrNum = [4,78,3,876,2];
    const arrStr = ['js', 'html', 'css', 'java', 'php'];
    const arrMixed = [true, 'html', 5454, false, 54564];
    console.log(arrNum);
    console.log(arrStr);
    console.log(arrMixed);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
{
    const arr =[];
    arr[arr.length] = 5;
    arr[arr.length] = 2;
    arr[arr.length] = true;
    arr[arr.length] = 'fdgfg';
    console.log(arr);
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    let i = 0
    while (i<arr.length){
        console.log(arr[i]);
        i++
    }
}
//     2. перебрати його циклом for
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
{
    const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = 0
    while (i < arr.length) {
        if(i%2!==0)
        console.log(arr[i]);
        i++
    }
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i < arr.length; i++) {
        if(i%2!==0){
            console.log(arr[i]);
        }
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
{
    const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    let i = 0
    while (i < arr.length) {
        if(i%2===0)
            console.log(arr[i]);
        i++
    }
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i < arr.length; i++) {
        if(i%2===0){
            console.log(arr[i]);
        }
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%3===0){
            arr[i] = 'octen';
        }
    }
            console.log(arr);
}
// 8. вивести масив в зворотньому порядку.
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    const arrReverse =[]
    for (let i = arr.length-1; i >=0 ; i--) {
        arrReverse[arrReverse.length] = arr[i];
    }
    console.log(arr.reverse());
    console.log(arrReverse);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{
    const arr =[2,17,13,6,22,31,45,66,100,-18];
    for (let i = arr.length-1; i >=0 ; i--) {
        if(i%2===0){
            console.log(arr[i]);
        }
    }
}
