const RestorantButtonElement = document.querySelector('#restaurant');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
    
RestorantButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});
    
mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});

fetch('./data/DATA.json')
    .then(response => {
        return response.json();
    })
    .then(responseJson =>{
        const restorantList = document.querySelector('.restorant-list');
        responseJson.restaurants.forEach(dataRestorant => {
            const card = document.createElement ('div');

            const nameRestorant= document.createElement ('h3');
            nameRestorant.classList.add('nama-restorant');
            nameRestorant.textContent=dataRestorant.name;

            const descRestorant= document.createElement ('p');
            

            descRestorant.textContent=`Description : ${dataRestorant.description}`;

            const pictRestorant = document.createElement ('img');

            pictRestorant.src = dataRestorant.pictureId;
            pictRestorant.alt = dataRestorant.name;

            const cityRestorant = document.createElement ('p');

            cityRestorant.textContent= `City : ${dataRestorant.city}`;

            const ratRestorant = document.createElement ('p');

            ratRestorant.classList.add('ratting')

            ratRestorant.textContent=dataRestorant.rating;

            const starIcon = document.createElement('i');
            starIcon.classList.add('fas', 'fa-star');

            restorantList.appendChild(card);
            card.appendChild(pictRestorant);
            card.appendChild(nameRestorant);
            card.appendChild(ratRestorant);
            card.appendChild(cityRestorant);
            card.appendChild(descRestorant);
            ratRestorant.appendChild(starIcon);

        });
    })
    .catch(error => {
        console.error(error); 
    });