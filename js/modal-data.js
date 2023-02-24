import { photosData } from './data.js';

const modal = document.querySelector('.big-picture');
const commentsList = modal.querySelector('.social__comments');

const commentItemTemplate = `<li class="social__comment">
  <img class="social__picture" src="" alt="" width="35" height="35">
  <p class="social__text"></p>
  </li>`;

const insertPhotoData = (currentPhotoData) => {
  modal.querySelector('.big-picture__img img').src = currentPhotoData.url;
  modal.querySelector('.likes-count').textContent = currentPhotoData.likes;
  modal.querySelector('.social__caption').textContent = currentPhotoData.description;

  // По заданию блок со счётчиком комментариев в этом дз нужно скрыть, поэтому он в окне отображаться не будет
  modal.querySelector('.comments-count').textContent = currentPhotoData.comments.length.toString();
};

const insertCommentsData = (currentPhotoData) => {
  commentsList.innerHTML = '';
  const comments = currentPhotoData.comments;

  comments.forEach((comment) => {
    commentsList.innerHTML += commentItemTemplate;
    const itemImg = commentsList.querySelector('li:last-of-type img');
    const itemParagraph = commentsList.querySelector('li:last-of-type p');

    itemImg.src = comment.avatar;
    itemImg.alt = comment.name;
    itemParagraph.textContent = comment.message;
  });
};

const insertData = (evt) => {
  const targetSrc = evt.target.src;
  const currentPhotoData = photosData.find((photo) => targetSrc.includes(photo.url));

  insertPhotoData(currentPhotoData);
  insertCommentsData(currentPhotoData);
};

export { insertData };
