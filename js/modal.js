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

export { openModal, closeModal };
