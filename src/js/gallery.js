console.log('Gallery');
import axios from 'axios';
const Gall = document.querySelector('.gallery');
// console.log(Gall);
const btn = document.querySelector('.button-sab');
// console.log(btn);
const forMM = document.querySelector('.forM');
// console.log(forMM);
const btnLoad = document.querySelector('.load-more');
// console.log(btnLoad);

const Url = 'https://pixabay.com/api/';
const API_KEY = '47413156-c8c9abea8f6d88937b7892740';
let page = 1;
let qData;
btnLoad.addEventListener('click', onLoadMore);
forMM.addEventListener('submit', handleSubmit);

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
    .get(`${Url}?key=${API_KEY}`, {
      params: {
        q: `${qData}`,
        page,
        per_page: 15,
        image_type: 'photo',
      },
    })

    .then(responce =>
      Gall.insertAdjacentHTML('afterbegin', createMarkup(responce.data.hits))
    )
    .catch(error => console.log(error));
}
// console.log(getInfo(qData));


function createMarkup(arr) {
  return arr
    .map(
      ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li data-id="${id}" class="gallery-item">
              <a href=${largeImageURL} class="gallery-link">
              <img src=${webformatURL} class="gallery-image" alt=${tags}> 
              <div class="wrap"><h2 class="title-like">Likes <span class="span-text"> ${likes} </span></h2>
               <h2 class="title-views">Views <span class="span-text"> ${views} </span></h2>
               <h2 class="title-comments">Comments <span class="span-text">${comments}</span> </h2>
               <h2 class="title-downloads">Downloads <span class="span-text">${downloads} </span></h2></div>
  </a>
              </li>`
    )
    .join('');
}

function onLoadMore(params) {
  page += 1
console.log(page);
 
}

// getInfo(qData)
// try {resp => console.log(resp);

    
// } catch (error) {
    
// }