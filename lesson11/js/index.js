//#region Town Info API Request
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {return response.json();}).then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {
    
            let towncontainer = document.createElement('div');
            towncontainer.classList.add('town-container');
            let town = document.createElement('section');
            town.classList.add('town-data');
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            let q = document.createElement('q');
            let paragraphs = document.createElement('section');
            paragraphs.classList.add('paragraph-block');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let imagesection = document.createElement('section');
            imagesection.classList.add('town-img');
            let img = document.createElement('img');

            if (towns[i].name === "Preston") {
                a.setAttribute('href', "preston.html");
            } else if (towns[i].name === "Fish Haven") {
                a.setAttribute('href', "fishhaven.html");
            } else if (towns[i].name === "Soda Springs") {
                a.setAttribute('href', "sodasprings.html");
            } else {
                a.setAttribute('href', "index.html");
            }

            a.textContent = towns[i].name;
            q.textContent = towns[i].motto;
            p1.textContent = `Year Founded: ${towns[i].yearFounded}`;
            p2.textContent = `Population: ${towns[i].currentPopulation}`;
            p3.textContent = `Annual Rainfall: ${towns[i].averageRainfall}`;
            img.setAttribute('src', 'images/placeholder350.jpg');
            img.setAttribute('data-src', `images/${towns[i].photo}`);
            img.setAttribute('alt', towns[i].name);
            img.setAttribute('loading', 'lazy');

            h2.appendChild(a);
            town.appendChild(h2);
            town.appendChild(q);
            paragraphs.appendChild(p1);
            paragraphs.appendChild(p2);
            paragraphs.appendChild(p3);
            town.appendChild(paragraphs);
            imagesection.appendChild(img);
            towncontainer.appendChild(town);
            towncontainer.appendChild(imagesection);

            document.querySelector('div.home-grid').appendChild(towncontainer);
        }
    }
});
//#endregion