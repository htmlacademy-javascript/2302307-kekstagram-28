import { insertData } from './modal-data.js';
import { isEscapeKey } from './util.js';

const modalNode = document.querySelector('.big-picture');

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

const setThumbnailsClick = (photosData) => {
  const pictureNodes = document.querySelectorAll('.pictures a');
  const modalCloseBtnNode = document.querySelector('#picture-cancel');

  pictureNodes.forEach((pictureNode) => {
    pictureNode.addEventListener('click', (evt) => {
      openModal();
      insertData(evt, photosData);
    });
  });

  modalCloseBtnNode.addEventListener('click', () => {
    closeModal();
  });
};

export { setThumbnailsClick };
