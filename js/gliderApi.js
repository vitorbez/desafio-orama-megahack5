fetch('http://localhost:3333/companies')
   .then(response => response.json())
   .then(showCompanies)

function showCompanies(companies) {
    const featuredGliderContainer = document.querySelector('#featured-glider-container');
    const featuredGliderTrackContainer = featuredGliderContainer.querySelector('.glider-track');

    const sustGliderContainer = document.querySelector('#sust-glider-container');
    const sustGliderTrackContainer = sustGliderContainer.querySelector('.glider-track');

    companies.forEach(company => {
        const card = document.createElement('a');
        const image = document.createElement('img');

        image.setAttribute('src', company.logo);
        card.setAttribute('href', `learn2.html?id=${company.id}`);

        image.classList.add('company-card-item');

        card.appendChild(image);
        card.classList.add('glider-slide');
        card.classList.add('center');

        featuredGliderTrackContainer.appendChild(card);
    });

    companies.reverse().forEach(company => {
        const card = document.createElement('a');
        const image = document.createElement('img');

        image.setAttribute('src', company.logo);
        card.setAttribute('href', `learn2.html?id=${company.id}`);

        image.classList.add('company-card-item');

        card.appendChild(image);
        card.classList.add('glider-slide');
        card.classList.add('center');

        sustGliderTrackContainer.appendChild(card);
    });
}

