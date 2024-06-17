import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function h(e){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44324365-be3070df1c049607fe38536c0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(a).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log("Error fetching photos:",s))}function m(e){return e.map(f).join("")}function f(e){return`<li class="gallery-item">
  <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
  /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${e.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${e.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${e.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const p="/goit-js-hw-11/assets/close-06de2d57.svg",c=document.querySelector(".search-form"),g=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:350});c.addEventListener("submit",L);function L(e){e.preventDefault();const r=e.target.elements.searchField.value.trim();if(r===""){n("You forgot enter data for search","#ffa000");return}l.classList.remove("visually-hidden"),h(r).then(a=>{if(a.hits.length===0)n("Sorry, there are no images matching your search query. Please try again!","#EF4040");else{const s=m(a.hits);g.innerHTML=s,y.refresh()}l.classList.add("visually-hidden")}).catch(a=>{n("An error occurred while fetching photos. Please try again later.","#EF4040"),l.classList.add("visually-hidden")}),c.reset()}function n(e,r){u.show({message:e,position:"topRight",backgroundColor:r,iconUrl:p,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}
//# sourceMappingURL=commonHelpers.js.map
