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
