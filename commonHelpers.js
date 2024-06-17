(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function l(e){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44324365-be3070df1c049607fe38536c0",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(a).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log(o))}function n(e){return e.map(c).join("")}function c(e){return`<li class="gallery-item">
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
</li>`}const u=document.querySelector(".search-form"),m=document.querySelector(".gallery");u.addEventListener("submit",p);function p(e){e.preventDefault();const s=e.target.elements.searchField.value.trim();s!==""&&l(s).then(a=>{a.hits.length===0&&console.log("Sorry, there are no images matching your search query. Please try again!");const o=n(a.hits);m.innerHTML=o})}
//# sourceMappingURL=commonHelpers.js.map
