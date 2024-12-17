import{S as m,a as d}from"./vendor-DBMDmZZa.js";function u(a){}console.log(89);const g=new m(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"top"}),s=document.querySelector(".gallery");document.querySelector(".button-sab");const h=document.querySelector(".forM"),f=document.querySelector(".load-more");f.addEventListener("click",u);h.addEventListener("submit",x);const y="https://pixabay.com/api/",b="47413156-c8c9abea8f6d88937b7892740";let $=1,t;function x(a){a.preventDefault(),console.log(a.currentTarget.elements.infO.value),t=a.currentTarget.elements.infO.value,L(t),s.innerHTML=""}async function L(a){await d.get(`${y}?key=${b}`,{params:{q:`${a}`,page:$,per_page:15,image_type:"photo"}}).then(e=>s.insertAdjacentHTML("afterbegin",w(e.data.hits))).catch(e=>console.log(e)),g.refresh()}function w(a){return a.map(({id:e,webformatURL:n,largeImageURL:l,tags:o,likes:c,views:i,comments:r,downloads:p})=>`<li data-id="${e}" class="gallery-item">
              <a href=${l} class="gallery-link">
              <img src=${n} class="gallery-image" alt=${o}> 
              <div class="wrap"><h2 class="title-like">Likes <span class="span-text"> ${c} </span></h2>
               <h2 class="title-views">Views <span class="span-text"> ${i} </span></h2>
               <h2 class="title-comments">Comments <span class="span-text">${r}</span> </h2>
               <h2 class="title-downloads">Downloads <span class="span-text">${p} </span></h2></div>
  </a>
              </li>`).join("")}
//# sourceMappingURL=gallery-KtL1sJss.js.map
