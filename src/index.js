import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { createListOfCountries, createCountry } from './markup';
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  Notify.init({
    timeout: 1500,
    position: 'center-top',
    backOverlay: true,
  });
  clearValue();
  const name = evt.target.value.trim().toLowerCase();
  if (name === '') {
    return;
  }
  fetchCountries(name)
    .then(data => {
      if (data.length === 1) {
        refs.info.insertAdjacentHTML('beforeend', createCountry(data));
      } else if (data.length > 10) {
        info();
      } else if (2 <= data.length < 10) {
        refs.list.innerHTML = createListOfCountries(data);
      }
    })
    .catch(error);
}

function clearValue() {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
}
function error() {
  return Notify.failure('Oops, there is no country with that name');
}
function info() {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
