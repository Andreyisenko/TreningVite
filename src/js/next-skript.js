// export  function onLoadMore(page) {
//   page += 1
//   // console.log(page);
  
// }
// // console.log(89);
// export const listArr = ["d"]

// import {arreE} from './team'
// import {namE} from './team'



export function createMarku(arreE) {
  return arreE
  .map(
      ({
        declaration_year,
        date,
        data: {
          step_0: {
            data: { declaration_type, declaration_period },
          },
          step_1: {
            data: { city, workPlace, workPost },
          },
        },
        id,

        user_declarant_id,
        end_date,
        start_date,
      }) => `<li data-id="${id}" class="gallery-item">
        <h1 class="title-views">Декларант ${namE}</h1>
        <h2 class="title-views">Декларація за ${declaration_year}</h2>
        <p class="title-comments">Дата подання декларації не подав</p>
        <p class="title-comments">Тип декларації ${declaration_type}</p>
        <p class="title-comments">період декларування:  ${declaration_period}</p>
        <p class="title-comments">id ${user_declarant_id}</p>
        <h2 class="title-views">Місце роботи: ${workPlace}</h2>
        <h2 class="title-views">Посада: ${workPost}</h2>
        <hr></hr>
        </li>`
    )
    .join('');
}
