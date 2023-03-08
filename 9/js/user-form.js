import { isEscapeKey } from './util.js';

import './form-validator.js';
import './img-scale-control.js';
import './filter-intensity-slider.js';

const fileInputNode = document.querySelector('#upload-file');
const formWrapperNode = document.querySelector('.img-upload__overlay');
const hashtagInputNode = formWrapperNode.querySelector('.text__hashtags');
const descriptionInputNode = formWrapperNode.querySelector('.text__description');
const closeFormBtnNode = formWrapperNode.querySelector('#upload-cancel');

const clearInputs = () => {
  fileInputNode.value = '';
  hashtagInputNode.value = '';
  descriptionInputNode.value = '';
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const targetNode = evt.target;
    if (targetNode.classList.contains('text__hashtags') || targetNode.classList.contains('text__description')) {
      return;
    }
    closeFormModal();
    clearInputs();
  }
};

function openFormModal() {
  formWrapperNode.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeFormModal() {
  formWrapperNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

fileInputNode.addEventListener('change', () => {
  openFormModal();
});

closeFormBtnNode.addEventListener('click', () => {
  closeFormModal();
  clearInputs();
});
