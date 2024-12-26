import{S as p,a as r}from"./vendor-DBMDmZZa.js";function u(e){}console.log(89);const g=new p(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"top"}),s=document.querySelector(".gallery");document.querySelector(".button-sab");const m=document.querySelector(".forM"),d=document.querySelector(".load-more");d.addEventListener("click",u);m.addEventListener("submit",f);let h=1,a;function f(e){e.preventDefault(),console.log(e.currentTarget.elements.infO.value),a=e.currentTarget.elements.infO.value,n(a),s.innerHTML=""}async function n(e){await r.get(`https://public-api.nazk.gov.ua/v2/documents/list?query=${e}&declaration_year=2023`,{params:{query:`${e}`,page:h,per_page:15}}).then(t=>{console.log(t.data.data),s.insertAdjacentHTML("afterbegin",$(t.data.data))}).catch(t=>console.log(t)),g.refresh()}console.log(n(a));function $(e){return e.map(({declaration_year:t,date:l,id:o,declaration_type:c,user_declarant_id:i})=>`<li data-id="${o}" class="gallery-item">
      <p>Декларація за ${t} рік</p>
      <p>Дата подання декларації ${l} </p>
      <p>Тип декларації ${c} </p>
      <p>id ${i} </p>
              <a href=${t} class="gallery-link">
              <img src=${t} class="gallery-image" alt=${t}> 
              <div class="wrap"><h2 class="title-like">Likes <span class="span-text"> ${t} </span></h2>
               <h2 class="title-views">Views <span class="span-text"> ${t} </span></h2>
               <h2 class="title-comments">Comments <span class="span-text">${t}</span> </h2>
               <h2 class="title-downloads">Downloads <span class="span-text">${t} </span></h2></div>
  </a>
              </li>`).join("")}
//# sourceMappingURL=gallery-CPojMDmc.js.map
