const Container = document.querySelector("#Container"); // Seleccionar el contenedor donde se van a agregar las tarjetas de país
const url = "https://restcountries.com/v3.1/all";

fetch(url)
    .then(response => response.json()) // Convertir la respuesta en formato JSON
    .then(countries => {
        countries.forEach(country => {
            const countryTemplate = `
            <div class="country">
                <div class="img"><a href="individual.html?country=${country.name.common}">
                    <img src="${country.flags.png}" alt="Bandera de ${country.name.common}">
                    <div class="tit">
                    <h2>${country.name.common}</h2></a>
                </div>
            </div>
                <div class="card">
                    <hr>
                    <p><i class="fa-solid fa-landmark"></i><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                    <p><i class="fa-solid fa-location-dot"></i><strong>Región:</strong> ${country.region}</p>
                    <p><strong>Subregión:</strong> ${country.subregion}</p>
                    <p><i class="fa-solid fa-person"></i><strong>Población:</strong> ${country.population.toLocaleString()}</p>
                </div>
            `;
            Container.innerHTML += countryTemplate; // Agregar cada tarjeta de país al contenedor
        });
    })
