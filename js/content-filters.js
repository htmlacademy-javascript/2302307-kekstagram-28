import { toggleClass, getRandomIntArray } from './util.js';
import { RANDOM_PHOTOS_COUNT } from './constants.js';
import { setThumbnailsClick } from './modal.js';
import { drawPhotos } from './thumbnails.js';

const filtersSectionNode = document.querySelector('.img-filters');
const filtersFormNode = filtersSectionNode.querySelector('.img-filters__form');
const filterBtnNodes = filtersFormNode.children;

const removeThumbnails = () => {
  const thumbnailNodes = document.querySelectorAll('.picture');
  if (thumbnailNodes) {
    thumbnailNodes.forEach((thumbnailNode) => {
      thumbnailNode.remove();
    });
  }
};

const showFiltersSection = () => {
  filtersSectionNode.classList.remove('img-filters--inactive');
  filtersSectionNode.classList.add('img-filters--active');
};

const getRandomPhotosData = (photosData) => {
  const randomPhotosData = [];
  const randomIntArray = getRandomIntArray(0, photosData.length - 1, RANDOM_PHOTOS_COUNT);
  randomIntArray.forEach((num) => {
    randomPhotosData.push(photosData[num]);
  });
  return randomPhotosData;
};

const getDiscussedPhotosData = (photosData) => {
  const discussedPhotosData = photosData.slice().sort((
    photoData1, photoData2) => photoData2.comments.length - photoData1.comments.length
  );
  return discussedPhotosData;
};

const setClick = (callback) => {
  for (const btnNode of filterBtnNodes) {
    btnNode.addEventListener('click', () => {
      toggleClass(btnNode, 'img-filters__button--active', filterBtnNodes);
      callback(btnNode);
    });
  }
};

const reRenderThumbnails = (photosData, btnNode) => {
  if (btnNode.id === 'filter-random') {
    photosData = getRandomPhotosData(photosData);
  }
  if (btnNode.id === 'filter-discussed') {
    photosData = getDiscussedPhotosData(photosData);
  }

  removeThumbnails();
  drawPhotos(photosData);
  setThumbnailsClick(photosData);
};

export { showFiltersSection, setClick, reRenderThumbnails };
