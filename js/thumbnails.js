import { createPhotos } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = createPhotos();
const photosFragment = document.createDocumentFragment();

photos.forEach(({ url, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  photosFragment.append(picture);
});

const drawPhotos = () => {
  picturesContainer.append(photosFragment);
};

export { drawPhotos };
