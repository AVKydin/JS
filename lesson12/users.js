// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
.then(responce=>responce.json())
.then(users =>{
    const olUsers = document.createElement('ol');
    for (const user of users) {
        const liUser = document.createElement('li');
        const hrefUser = document.createElement('a');
        hrefUser.innerText = `id - ${user.id}, ${user.name}`;
        hrefUser.href = `userInfo.html?info=`+JSON.stringify(user);
        liUser.appendChild(hrefUser);
        olUsers.append(liUser);
    }
    document.body.appendChild(olUsers);
})
