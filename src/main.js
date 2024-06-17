import { fetchPhotos } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from './img/close.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// смс не пуста відповідь
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

searchForm.addEventListener('submit', onSearchBtnSubmit);

function onSearchBtnSubmit(event) {
  event.preventDefault();
  //   const valueToSearch = searchForm.searchField.value.trim();
  const valueToSearch = event.target.elements.searchField.value.trim();
  if (valueToSearch === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot enter data for search',
      position: 'topRight',
      backgroundColor: '#ffa000',
      messageColor: '#fff',
      theme: 'dark',
      maxWidth: '350px',
    });
    return;
  }
  loader.classList.remove('visually-hidden');
  fetchPhotos(valueToSearch).then(data => {
    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        position: 'topRight',
        iconUrl: closeIcon,
        messageColor: '#fff',
        theme: 'dark',
        maxWidth: '350px',
      });
    }
    loader.classList.add('visually-hidden');
    const markup = galleryTemplate(data.hits);
    gallery.innerHTML = markup;
    lightbox.refresh();
  });
  searchForm.reset();
}
