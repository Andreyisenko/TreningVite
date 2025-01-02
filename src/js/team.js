// import * as next from './next-skript';
import axios from 'axios';
// import uuid from 'uuid';
// import  uuid from 'uuid';
// console.log(next.listArr);

// import { createMarku, createMarkup } from './next-skript';
// console.log(createMarkup);

const Gall = document.querySelector('.gallery');
const btn = document.querySelector('.button-sab');
const forMM = document.querySelector('.forM');
const btnLoad = document.querySelector('.load-more');
const item = document.querySelector('.gallery');

const Url = 'https://public-api.nazk.gov.ua/v2/documents/';
let API_KEY;
let page = 1;
let  qData;

// export let arreE;
export let namE;
const total = [];
const totStr = JSON.stringify(total);

const arre = [
  'Бочарова Ольга Станіславівна',
  'Винокуров Станіслав Володимирович',
  'Адіян Карен Артурович',
  'Косс Олена Юріївна',
  'Ісенко Андрій Володимирович',
  'Філіпов Владислав Володимирович',
];

forMM.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  function makeRequestWithDelay(delay = 1000) {
    const fetchUsers = async () => {
      for (const arreE of arre) {
        console.log(arreE);
        namE = arreE;
        
        try {
          // console.log(`Processing: ${arreE}`);
          
          const response = await axios.get(
            `https://public-api.nazk.gov.ua/v2/documents/list/`,
            {
              params: {
                API_KEY,
                // user_declarant_id: 236750,
                query: arreE,
                declaration_year: 2023,
              },
            }
          );
          console.log(response);
          console.log(response.data);
          console.log(response.data.data);
          Gall.insertAdjacentHTML('beforeend', createMarkup(response.data.data));
          
          console.log(`Response for ${arreE}:`, response.data);
        } catch (error) {
          console.error(`Error fetching data for ${arreE}:`, error);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
      
    };
    fetchUsers();
  }
  makeRequestWithDelay(1000);
}



 function  createMarkup(arreE) {
  return arreE
    .map(
      ({
        user_declarant_id,
        declaration_year,
        id,
        date,


        data: {
          step_0: {
            data: { declaration_type, declaration_period},
          },
          step_1: {
            data: { city, workPlace, workPost },
          },
        },
        

        end_date,
        start_date,
      }) => `<li class="gallery-item">
      <h1 class="title-views">Декларант ${namE}</h1>
      <h2 class="title-views">Декларація за ${declaration_year}</h2>
      <p class="title-comments">Дата подання декларації ${date}</p>
      <p class="title-comments">Тип декларації ${declaration_type}</p>
      <p class="title-comments">період декларування:  ${declaration_period}</p>
      <p class="title-comments">id ${user_declarant_id}</p>
      <h2 class="title-views">Місце роботи: ${workPlace}</h2>
      <h2 class="title-views">Посада: ${workPost}</h2>
      <p class="title-views">Посилання id: ${id}</p>
      <hr></hr>
      </li>`
    )
    .join('');
}