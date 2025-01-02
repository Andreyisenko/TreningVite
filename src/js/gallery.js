// import axios from 'axios';
// import * as next from './next-skript';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
//   captionPosition: 'top',
// });
// const Gall = document.querySelector('.gallery');
// // console.log(Gall);
// const btn = document.querySelector('.button-sab');
// // console.log(btn);
// const forMM = document.querySelector('.forM');
// // console.log(forMM);
// const btnLoad = document.querySelector('.load-more');
// // console.log(btnLoad);
// btnLoad.addEventListener('click', next.onLoadMore);
// forMM.addEventListener('submit', handleSubmit);
// const item = document.querySelector('.gallery');
// console.log(item.children[0]);
// console.log(item.children[1]);

// const Url = 'https://public-api.nazk.gov.ua/v2/documents/';
// const API_KEY = '210f5cfe-d5e9-4af8-8b6c-226b2eba6819';
// let page = 1;
// let qData;
// const arrey = ['Ісенко Андрій Володимирович', 'Винокуров Станіслав Володимирович'];
// console.log(arrey);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.elements.infO.value);
//   qData = event.currentTarget.elements.infO.value;
//   // createMarkup(qData)
//   getInfo(qData);
//   Gall.innerHTML = '';
// }

// async function getInfo(qData) {
//   if (!qData) {
//     alert('ok');
//     return;
//   }
//   const tot = await axios

//     .get(`https://public-api.nazk.gov.ua/v2/documents/list?query=${qData}`, {
//       params: {
//         // query: `${qData}`,
//         // user_declarant_id: qData,
//         page,
//         // per_page: 15,
//         // image_type: 'photo',
//       },
//     })

//     .then(responce => {
//       console.log(responce.data.data);

//       Gall.insertAdjacentHTML('afterbegin', createMarkup(responce.data.data));
//     })
//     .catch(error => console.log(error));
//   lightbox.refresh();
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         declaration_year,
//         date,
//         data: {

//           step_0: { data: { declaration_type, declaration_period } },
//           step_1: {
//             data: { city, workPlace, workPost },
//           },

//         },
//         id,
       
//         user_declarant_id,
//         end_date,
//         start_date,
//       }) => `<li data-id="${id}" class="gallery-item">
//       <h1 class="title-views">Декларант ${qData}</h1>
//       <h2 class="title-views">Декларація за ${declaration_year}</h2>
//       <h3 class="title-comments">Дата подання декларації ${date}</h3>
//       <h3 class="title-comments">Тип декларації ${declaration_type}</h3>
//       <h3 class="title-comments">період декларування:  ${declaration_period}</h3>
//       <h3 class="title-comments">id ${user_declarant_id}</h3>
//       <h2 class="title-views">Місце роботи: ${workPlace}</h2>
//       <h2 class="title-views">Посада: ${workPost}</h2>
//       <hr></hr>
//       </li>`
//     )
//     .join('');
// }

// // getInfo(qData)
// // try {resp => console.log(resp);

// // } catch (error) {

// // }
