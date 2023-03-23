import { enableSubmitBtn } from './user-form.js';
import { isEscapeKey } from './util.js';
import { onFormDocumentKeydown } from './user-form.js';

const errorModalTemplateNode = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorModalNode = errorModalTemplateNode.cloneNode(true);
document.body.append(errorModalNode);
errorModalNode.classList.add('hidden');
const closeErrorModalBtn = document.querySelector('.error__button');


const closeErrorModal = () => {
  errorModalNode.classList.add('hidden');
  enableSubmitBtn();
  document.addEventListener('keydown', onFormDocumentKeydown);
};

closeErrorModalBtn.addEventListener('click', () => {
  closeErrorModal();
});

const onErrorModalDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorModal();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorModal();
  }
});

const openErrorModal = () => {
  document.removeEventListener('keydown', onFormDocumentKeydown);
  errorModalNode.classList.remove('hidden');
  document.addEventListener('keydown', onErrorModalDocumentKeydown);
};

export { openErrorModal, closeErrorModal };
