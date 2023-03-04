let url = new URL(location.href);
let info = JSON.parse(url.searchParams.get('info'));
let id = info.id;
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

        userDiv.append(userId, userNS, userAddress, userPhone, userEmail, userWebsite, userCompany)
    })





























