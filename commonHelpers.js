import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function u(e){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"44324365-be3070df1c049607fe38536c0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log(s))}function d(e){return e.map(f).join("")}function f(e){return`<li class="gallery-item">
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
</li>`}const p="/goit-js-hw-11/assets/close-06de2d57.svg",c=document.querySelector(".search-form"),h=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:350});c.addEventListener("submit",y);function y(e){e.preventDefault();const a=e.target.elements.searchField.value.trim();if(a===""){l.warning({title:"Caution",message:"You forgot enter data for search",position:"topRight",backgroundColor:"#ffa000",messageColor:"#fff",theme:"dark",maxWidth:"350px"});return}n.classList.remove("visually-hidden"),u(a).then(r=>{r.hits.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",iconUrl:p,messageColor:"#fff",theme:"dark",maxWidth:"350px"}),n.classList.add("visually-hidden");const s=d(r.hits);h.innerHTML=s,g.refresh()}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
