import { fetchPhotos } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
// смс пустий пошук
// смс пуста відповідь
// смс не пуста відповідь
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
searchForm.addEventListener('submit', onSearchBtnSubmit);

function onSearchBtnSubmit(event) {
  event.preventDefault();
  //   const valueToSearch = searchForm.searchField.value.trim();
  const valueToSearch = event.target.elements.searchField.value.trim();
  if (valueToSearch === '') {
    // console.log('empty value');
    return;
  }
  fetchPhotos(valueToSearch).then(data => {
    if (data.hits.length === 0) {
      console.log(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    const markup = galleryTemplate(data.hits);
    gallery.innerHTML = markup;
  });
}
