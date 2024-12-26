import axios from 'axios';
import * as next from './next-skript';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'top',
});
const Gall = document.querySelector('.gallery');
// console.log(Gall);
const btn = document.querySelector('.button-sab');
// console.log(btn);
const forMM = document.querySelector('.forM');
// console.log(forMM);
const btnLoad = document.querySelector('.load-more');
// console.log(btnLoad);
btnLoad.addEventListener('click', next.onLoadMore);
forMM.addEventListener('submit', handleSubmit);

const Url = 'https://public-api.nazk.gov.ua/v2/documents/';
const API_KEY = '210f5cfe-d5e9-4af8-8b6c-226b2eba6819';
let page = 1;
let qData;
const arrey = []
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements.infO.value);
  qData = event.currentTarget.elements.infO.value;
  // createMarkup(qData)
  getInfo(qData);
  Gall.innerHTML = '';
}

async function getInfo(qData) {
  const tot = await axios
    .get(`https://public-api.nazk.gov.ua/v2/documents/list?query=${qData}&declaration_year=2023`, {
      params: {
        query: `${qData}`,
        page,
        per_page: 15,
        // image_type: 'photo',
      },
    })

    .then(responce => {
      console.log(responce.data.data);

      Gall.insertAdjacentHTML('afterbegin', createMarkup(responce.data.data));
    })
    .catch(error => console.log(error));
  lightbox.refresh();
}
console.log(getInfo(qData));

function createMarkup(arr) {
  return arr
    .map(
      ({
        declaration_year,
        date,
        id,
        declaration_type,
        user_declarant_id,

        // webformatURL,
        // largeImageURL,
        // tags,
        // likes,
        // views,
        // comments,
        // downloads,
      }) => `<li data-id="${id}" class="gallery-item">
      <p>Декларація за ${declaration_year} рік</p>
      <p>Дата подання декларації ${date} </p>
      <p>Тип декларації ${declaration_type} </p>
      <p>id ${user_declarant_id} </p>
              <a href=${declaration_year} class="gallery-link">
              <img src=${declaration_year} class="gallery-image" alt=${declaration_year}> 
              <div class="wrap"><h2 class="title-like">Likes <span class="span-text"> ${declaration_year} </span></h2>
               <h2 class="title-views">Views <span class="span-text"> ${declaration_year} </span></h2>
               <h2 class="title-comments">Comments <span class="span-text">${declaration_year}</span> </h2>
               <h2 class="title-downloads">Downloads <span class="span-text">${declaration_year} </span></h2></div>
  </a>
              </li>`
    )
    .join('');
}

// getInfo(qData)
// try {resp => console.log(resp);

// } catch (error) {

// }
