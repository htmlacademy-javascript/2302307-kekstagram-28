import { enableSubmitBtn } from './user-form.js';
import { isEscapeKey } from './util.js';

const successModalTemplateNode = document.querySelector('#success')
  .content
  .querySelector('.success');

const successModalNode = successModalTemplateNode.cloneNode(true);
document.body.append(successModalNode);
successModalNode.classList.add('hidden');
const closeSuccessModalBtn = document.querySelector('.success__button');


const closeSuccessModal = () => {
  successModalNode.classList.add('hidden');
  enableSubmitBtn();
};

closeSuccessModalBtn.addEventListener('click', () => {
  closeSuccessModal();
});

const onSuccessModalDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessModal();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('success')) {
    closeSuccessModal();
  }
});

const openSuccessModal = () => {
  successModalNode.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessModalDocumentKeydown);
};

export { openSuccessModal, closeSuccessModal };
