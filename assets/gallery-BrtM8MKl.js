import{a as d}from"./vendor-N5iQpiFS.js";console.log("Gallery");const n=document.querySelector(".gallery");document.querySelector(".button-sab");const u=document.querySelector(".forM"),g=document.querySelector(".load-more"),h="https://pixabay.com/api/",f="47413156-c8c9abea8f6d88937b7892740";let t=1,s;g.addEventListener("click",L);u.addEventListener("submit",y);function y(e){e.preventDefault(),console.log(e.currentTarget.elements.infO.value),s=e.currentTarget.elements.infO.value,$(s),n.innerHTML=""}async function $(e){await d.get(`${h}?key=${f}`,{params:{q:`${e}`,page:t,per_page:15,image_type:"photo"}}).then(a=>n.insertAdjacentHTML("afterbegin",b(a.data.hits))).catch(a=>console.log(a))}function b(e){return e.map(({id:a,webformatURL:l,largeImageURL:o,tags:c,likes:r,views:i,comments:p,downloads:m})=>`<li data-id="${a}" class="gallery-item">
              <a href=${o} class="gallery-link">
              <img src=${l} class="gallery-image" alt=${c}> 
              <div class="wrap"><h2 class="title-like">Likes <span class="span-text"> ${r} </span></h2>
               <h2 class="title-views">Views <span class="span-text"> ${i} </span></h2>
               <h2 class="title-comments">Comments <span class="span-text">${p}</span> </h2>
               <h2 class="title-downloads">Downloads <span class="span-text">${m} </span></h2></div>
  </a>
              </li>`).join("")}function L(e){t+=1,console.log(t)}
//# sourceMappingURL=gallery-BrtM8MKl.js.map
