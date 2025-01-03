// import * as next from './next-skript';
import axios from 'axios';
// import uuid from 'uuid';
// import  uuid from 'uuid';
// console.log(next.listArr);
import { list } from './gallery';

import { createMarku, } from './next-skript';
// console.log(createMarkup);

const Gall = document.querySelector('.gallery');

const btn = document.querySelector('.button-sab');
const forMM = document.querySelector('.forM');
const btnLoad = document.querySelector('.load-more');
const item = document.querySelector('.gallery');

const Url = 'https://public-api.nazk.gov.ua/v2/documents/';
let API_KEY;
let page = 1;
let qData;

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
      for (const arreE of list) {
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
                declaration_year: 2024,
              },
            }
          );
          console.log(Gall.children);
          console.log();
          
          if (response.data.count === 0) {
            // alert("ok")
            Gall.insertAdjacentHTML(
              'beforeend',
              createMarku(arreE)
            );
          }
          
          console.log(response.data);
          console.log(response.data.count);
          console.log(response.data.data);
          Gall.insertAdjacentHTML(
            'beforeend',
            createMarkup(response.data.data)
          );
          
          console.log(`Response for ${arreE}:`, response.data);
        } catch (error) {
          console.error(`Error fetching data for ${arreE}:`, error);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    };
    fetchUsers();
  }
  makeRequestWithDelay(100);
}

function createMarkup(arreE) {
  return arreE
  .map(
    ({
      user_declarant_id,
      declaration_year,
      id,
      date,
      declaration_type,
      
      data: {
        step_0: {
          data: {  declaration_period },
        },
        step_1: {
          data: { workPlaceEdrpou,
            city, workPlace, workPost },
          },
        },
        
        end_date,
        start_date,
      }) => `<li class="list-item">
      <h1 class="title-views" >Декларант: ${namE}</h1>
      <a class="link" target="blank" href='https://public.nazk.gov.ua/documents/${id}'> Посилання: ${id} </a>
      
      <h2 class="title">Декларація за ${declaration_year}</h2>
      <p class="title-comments">Дата подання декларації ${date}</p>
      <p class="title-comments">Тип декларації ${declaration_type}</p>
      <p class="title-comments">Період декларування:  ${declaration_period}</p>
      <p class="title-comments">ЄДРПОУ:  ${workPlaceEdrpou}</p>
      <p class="title-comments">id ${user_declarant_id}</p>
      <p class="title-comments">Місце роботи: ${workPlace}</p>
      <p  class="title-comments">Посада: ${workPost}</p>
      
      </li>`
    )
    .join('');
  }
  