import { hideExcessComments, updateCommentsCounter, checkLoadCommentsBtn } from './comments.js';

const modalNode = document.querySelector('.big-picture');
const commentsListNode = modalNode.querySelector('.social__comments');

const commentItemTemplate = `<li class="social__comment">
  <img class="social__picture" src="" alt="" width="35" height="35">
  <p class="social__text"></p>
  </li>`;

const insertPhotoData = (currentPhotoData) => {
  modalNode.querySelector('.big-picture__img img').src = currentPhotoData.url;
  modalNode.querySelector('.likes-count').textContent = currentPhotoData.likes;
  modalNode.querySelector('.social__caption').textContent = currentPhotoData.description;
  modalNode.querySelector('.comments-count').textContent = currentPhotoData.comments.length.toString();
};

const insertCommentsData = (currentPhotoData) => {
  commentsListNode.innerHTML = '';
  const comments = currentPhotoData.comments;

  comments.forEach((comment) => {
    commentsListNode.innerHTML += commentItemTemplate;
    const itemImgNode = commentsListNode.querySelector('li:last-of-type img');

    itemImgNode.src = comment.avatar;
    itemImgNode.alt = comment.name;
    commentsListNode.querySelector('li:last-of-type p').textContent = comment.message;
  });

  hideExcessComments();
  updateCommentsCounter();
  checkLoadCommentsBtn();
};

const insertData = (evt, photosData) => {
  const targetSrc = evt.target.src;
  const currentPhotoData = photosData.find((photo) => targetSrc.includes(photo.url));

  insertPhotoData(currentPhotoData);
  insertCommentsData(currentPhotoData);
};

export { insertData };
