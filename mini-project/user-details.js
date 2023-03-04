// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = JSON.parse(url.searchParams.get('info'));

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(responce => responce.json())
    .then(userInfo => {
        const id = userInfo.id;
        const name = userInfo.name;
        const username = userInfo.username;
        const addressStreet = userInfo.address.street;
        const addressSuite = userInfo.address.suite;
        const addressCity = userInfo.address.city;
        const addressZipcode = userInfo.address.zipcode;
        const addressGeoLat = userInfo.address.geo.lat;
        const addressGeoLng = userInfo.address.geo.lng;
        const phone = userInfo.phone;
        const email = userInfo.email;
        const website = userInfo.website;
        const companyName = userInfo.company.name;
        const companyCatchPhrase = userInfo.company.catchPhrase;
        const companyBs = userInfo.company.bs;

        const userDiv = document.createElement('div');
        userDiv.classList.add('userDiv')
        document.body.appendChild(userDiv);
        const userId = document.createElement('p');
        userId.innerText = `id - ${id}`;
        const userNS = document.createElement('h3');
        userNS.innerText = `${name} ${username}`;
        const userAddress = document.createElement('p');
        userAddress.innerText = `Street - ${addressStreet}, Suite -  ${addressSuite}, City - ${addressCity}, Zipcode - ${addressZipcode}, Lat - ${addressGeoLat}, Lng - ${addressGeoLng}`;
        const userPhone = document.createElement('h4');
        userPhone.innerText = `phone - ${phone}`;
        const userEmail = document.createElement('p');
        userEmail.innerText = `email - ${email}`;
        const userWebsite = document.createElement('p');
        userWebsite.innerText = `website - ${website}`;
        const userCompany = document.createElement('p');
        userCompany.innerHTML = `company - <b>${companyName}</b>, company catch phrase - <b>${companyCatchPhrase}</b>, bs - <b>${companyBs}</b>`

        const btn = document.createElement('button');
        btn.innerText = 'post of current user'
        btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(responce => responce.json())
                .then(userPosts => {
                    console.log(userPosts);
                            const postsBlock = document.createElement('div');
                            postsBlock.classList.add('postsBlock');
                            document.body.appendChild(postsBlock);
                        for (const post of userPosts) {
                            const postBlock = document.createElement('div');
                            postBlock.classList.add('postBlock');
                            const title = post.title;
                            const titleBlock = document.createElement('h4');
                            titleBlock.innerText = title;
                            postsBlock.appendChild(postBlock);
                                const button = document.createElement('button');
                                button.innerHTML = 'More info post'
                                const a = document.createElement('a');
                                a.href = `post-details.html?info=` + JSON.stringify(post.id);
                                a.style.display = 'block'
                                a.appendChild(button);
                            postBlock.append(titleBlock,a);
                                // titleBlock.appendChild(a)
                        }
                })
        }

        userDiv.append(userId, userNS, userAddress, userPhone, userEmail, userWebsite, userCompany, btn)
    })