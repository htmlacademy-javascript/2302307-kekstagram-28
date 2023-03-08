import { photosData } from './data.js';

const picturesContainerNode = document.querySelector('.pictures');
const pictureTemplateNode = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosFragment = document.createDocumentFragment();

photosData.forEach(({ url, likes, comments }) => {
  const pictureNode = pictureTemplateNode.cloneNode(true);

  pictureNode.querySelector('.picture__img').src = url;
  pictureNode.querySelector('.picture__likes').textContent = likes;
  pictureNode.querySelector('.picture__comments').textContent = comments.length;

  photosFragment.append(pictureNode);
});

const drawPhotos = () => {
  picturesContainerNode.append(photosFragment);
};

export { drawPhotos };
