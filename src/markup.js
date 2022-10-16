function createListOfCountries(countries) {
  return countries
    .map(({ name, flags }) => {
      return `<li class="countries-item">
                    <img src="${flags.svg}" alt="Flag of ${name}" class="countries-item_img">
                    <p class="countries-item_text">${name}</p>
                </li>`;
    })
    .join('');
}

function createCountry(countries) {
  return countries
    .map(({ name, flags, capital, population, languages }) => {
      const langName = languages.map(language => language.name).join(', ');
      return `<div class="info-box">
                    <img src="${flags.svg}" alt="Flag of ${name}" class="info-img">
                    <h2 class="info-title">${name}</h2>
                </div>
                <ul class="info-list">
                    <li class="info-list_property">Capital:<span class="info-list_variable">${capital}</span></li>
                    <li class="info-list_property">Population:<span class="info-list_variable">${population}</span></li>
                    <li class="info-list_property">Languages:<span class="info-list_variable">${langName}</span></li>
                </ul>
`;
    })
    .join('');
}
export { createListOfCountries, createCountry };
