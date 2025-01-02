import{a as u}from"./vendor-N5iQpiFS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery");document.querySelector(".button-sab");const f=document.querySelector(".forM");document.querySelector(".load-more");document.querySelector(".gallery");let m,n;const p=[];JSON.stringify(p);const y=["Бочарова Ольга Станіславівна","Винокуров Станіслав Володимирович","Адіян Карен Артурович","Косс Олена Юріївна","Ісенко Андрій Володимирович","Філіпов Владислав Володимирович"];f.addEventListener("submit",h);function h(c){c.preventDefault();function o(s=1e3){(async()=>{for(const e of y){console.log(e),n=e;try{const t=await u.get("https://public-api.nazk.gov.ua/v2/documents/list/",{params:{API_KEY:m,query:e,declaration_year:2023}});console.log(t),console.log(t.data),console.log(t.data.data),d.insertAdjacentHTML("beforeend",g(t.data.data)),console.log(`Response for ${e}:`,t.data)}catch(t){console.error(`Error fetching data for ${e}:`,t),await new Promise(r=>setTimeout(r,s))}}})()}o(1e3)}function g(c){return c.map(({user_declarant_id:o,declaration_year:s,id:a,date:e,data:{step_0:{data:{declaration_type:t,declaration_period:r}},step_1:{data:{city:v,workPlace:l,workPost:i}}},end_date:$,start_date:b})=>`<li class="gallery-item">
      <h1 class="title-views">Декларант ${n}</h1>
      <h2 class="title-views">Декларація за ${s}</h2>
      <p class="title-comments">Дата подання декларації ${e}</p>
      <p class="title-comments">Тип декларації ${t}</p>
      <p class="title-comments">період декларування:  ${r}</p>
      <p class="title-comments">id ${o}</p>
      <h2 class="title-views">Місце роботи: ${l}</h2>
      <h2 class="title-views">Посада: ${i}</h2>
      <p class="title-views">Посилання id: ${a}</p>
      <hr></hr>
      </li>`).join("")}
//# sourceMappingURL=team-CvZdJMsF.js.map
