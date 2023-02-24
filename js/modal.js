import { isEscapeKey } from './util.js';
import { insertData } from './modal-data.js';

const modal = document.querySelector('.big-picture');
const modalCloseButton = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

function openModal() {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  // Временно скрываю блоки счётчика комментариев и загрузки новых комментариев
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

const addPictureHandlers = (pictures) => {
  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      openModal();
      insertData(evt);
    });
  });
};

modalCloseButton.addEventListener('click', () => {
  closeModal();
});

export { addPictureHandlers };
