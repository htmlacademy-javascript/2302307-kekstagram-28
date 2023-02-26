import { isEscapeKey } from './util.js';
import { insertData } from './modal-data.js';

const modalNode = document.querySelector('.big-picture');
const modalCloseBtnNode = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

function openModal() {
  modalNode.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  modalNode.classList.add('hidden');
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

modalCloseBtnNode.addEventListener('click', () => {
  closeModal();
});

export { addPictureHandlers };
