// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const arrUsers = [];
arrUsers.push(new User(22, 'vasia', 'vasilkiv', 'vv@i.com', 380546546545));
arrUsers.push(new User(17, 'petya', 'petrov', 'pp@ukr.net', 5464215646542));
arrUsers.push(new User(51, 'kolya', 'azizov', 'kaz@gmail.com', 5321654215));
arrUsers.push(new User(5, 'olya', 'poliakova', 'op@gmail.com', 5165456456));
arrUsers.push(new User(77, 'max', 'kozuhar', 'mk@i.com', 564212255888));
arrUsers.push(new User(3, 'anya', 'adamson', 'aa@ukr.net', 1545454121));
arrUsers.push(new User(28, 'oleg', 'ustin', 'oa@i.com', 8785745485));
arrUsers.push(new User(63, 'andrey', 'baldwin', 'ab@gmail.com', 32564154545));
arrUsers.push(new User(23, 'masha', 'campbell', 'mc@i.com', 9564545645645));
arrUsers.push(new User(13, 'max', 'bishop', 'mb@gmail.com', 4651684651));

console.log(arrUsers);
console.log('*********************************************')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filterPairedId = arrUsers.filter(item => item.id % 2 === 0);
console.log(filterPairedId);
console.log('*********************************************')
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortUsersId = arrUsers.sort((a, b) => a.id - b.id);
console.log(sortUsersId);
console.log('*********************************************')

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client
const arrClients = [];

arrClients.push(new Client(22, 'vasia', 'vasilkiv', 'vv@i.com', 380546546545, ['банан']));
arrClients.push(new Client(17, 'petya', 'petrov', 'pp@ukr.net', 5464215646542, ['банан', 'фарш', 'яйця перепелинні']));
arrClients.push(new Client(51, 'kolya', 'azizov', 'kaz@gmail.com', 5321654215, ['сухарі', 'пиво', 'вуха свинячі копчені', 'м\'ясо', 'яйця курячі']));
arrClients.push(new Client(5, 'olya', 'poliakova', 'op@gmail.com', 5165456456, ['яблука', 'сьомга', 'хліб чорний', 'масло']));
arrClients.push(new Client(77, 'max', 'kozuhar', 'mk@i.com', 564212255888, ['булка з маком', 'йогурт', 'товар ххх', 'вода', 'морозиво', 'піца']));
arrClients.push(new Client(3, 'anya', 'adamson', 'aa@ukr.net', 1545454121, ['морква', 'оливи', 'ковбаса']));
arrClients.push(new Client(28, 'oleg', 'ustin', 'oa@i.com', 8785745485, ['шоколадка', 'паста томатна']));
arrClients.push(new Client(63, 'andrey', 'baldwin', 'ab@gmail.com', 32564154545, ['огірок', 'кефір']));
arrClients.push(new Client(23, 'masha', 'campbell', 'mc@i.com', 9564545645645, ['гриби', 'цибуля', 'перець чорний мелений, ']));
arrClients.push(new Client(13, 'max', 'bishop', 'mb@gmail.com', 4651684651, ['пиво', 'свинина', 'приправа для шашлику', 'ще пиво', 'горішки', 'снеки', 'ще трохи пива']));

console.log(arrClients)
console.log('*********************************************')
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortArrClients = arrClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortArrClients);
console.log('*********************************************')
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        return `їдемо зі швидкістю ${maxSpeed} на годину`;
    };
    this.info = function () {
        return `model - ${model}, manufacturer - ${manufacturer}, yearOfManufacture - ${yearOfManufacture}, maxSpeed - ${maxSpeed}, engineVolume - ${engineVolume}`
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const carQWEQW = new Car('dsf', 'sdfsdfsdfsdf', 1995, 150, 3);
console.log(carQWEQW);
console.log(carQWEQW.drive());
console.log(carQWEQW.info());
carQWEQW.increaseMaxSpeed(50);
carQWEQW.changeYear(2000);
carQWEQW.addDriver('ivan ivanov');
console.log(carQWEQW);
console.log(carQWEQW.driver)
console.log('*********************************************')
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Carr {

    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    };

    info() {
        return `model - ${this.model}, manufacturer - ${this.manufacturer}, yearOfManufacture - ${this.yearOfManufacture}, maxSpeed - ${this.maxSpeed}, engineVolume - ${this.engineVolume}`
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const carr = new Carr('dsf', 'sdfsdfsdfsdf', 1995, 150, 3);
console.log(carr)
console.log(carr.drive());
console.log(carr.info());
carr.increaseMaxSpeed(50);
carr.changeYear(2000);
carr.addDriver('ivan ivanov');
console.log(carr.driver)
console.log(carr);
console.log('*********************************************')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const arrCinderellas = [];
arrCinderellas.push(new Cinderella('Cinderella', 12, 15));
arrCinderellas.push(new Cinderella('Cinderella', 13, 16));
arrCinderellas.push(new Cinderella('Cinderella', 14, 16));
arrCinderellas.push(new Cinderella('Cinderella', 15, 18));
arrCinderellas.push(new Cinderella('Cinderella', 16, 19));
arrCinderellas.push(new Cinderella('Cinderella', 17, 23));
arrCinderellas.push(new Cinderella('Cinderella', 18, 17));
arrCinderellas.push(new Cinderella('Cinderella', 54, 45));
arrCinderellas.push(new Cinderella('Cinderella', 72, 22));
arrCinderellas.push(new Cinderella('Cinderella', 91, 21));
console.log(arrCinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, shoeHeFound) {
    this.name = name;
    this.age = age;
    this.shoeHeFound = shoeHeFound;

    this.find = function (shoeHeFound) {
        return arrCinderellas.find((cinderella) => shoeHeFound === cinderella.footSize);
    }

}

const prince = new Prince('Prince Charming', 19, 17)
const prince2 = new Prince('Prince Charming777', 91, 22)
console.log(prince.find(prince.shoeHeFound));
console.log(prince2.find(prince2.shoeHeFound));

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCinderella (shoeHeFound) {
    for (const cinderella of arrCinderellas) {
        if (shoeHeFound === cinderella.footSize) {
            console.log(`він її знайшов!!! це ${cinderella.name},вік - ${cinderella.age} років, ${cinderella.footSize} розмір ноги`)
        }
    }
}
findCinderella(prince.shoeHeFound);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
























