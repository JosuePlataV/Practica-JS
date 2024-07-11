const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('country');
const detailsContainer = document.querySelector('#country-details');

const url = `https://restcountries.com/v3.1/name/${countryName}`;

fetch(url)
    .then(response => response.json())
    .then(countries => {
        const country = countries[0]; // Asumiendo que el nombre del país es único
        const detailsTemplate = `
            <h1>${country.name.common}</h1>
            <img src="${country.flags.png}" alt="Bandera de ${country.name.common}">
            <p><strong>Otros nombres:</strong> ${country.altSpellings}</p>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Continentes:</strong> ${country.continents}</p>
            <p><strong>Idiomas:</strong> ${Object.values(country.languages)}</p>
            <p><strong>Google Maps:</strong> <a href="${country.maps.googleMaps}">Ver en Google Maps</a></p>
            <p><strong>OpenStreetMaps:</strong> <a href="${country.maps.openStreetMaps}">Ver en OpenStreetMaps</a></p>
            <p><strong>Zonas Horarias: </strong> ${country.timezones}</p>
            <p><strong>Coordenadas:</strong> Latitud ${country.latlng[0]}, Longitud ${country.latlng[1]}</p>
            <p><strong>Símbolo de la Moneda:</strong> ${Object.values(country.currencies)[0].symbol}</p>
        `;
        detailsContainer.innerHTML = detailsTemplate;
    });