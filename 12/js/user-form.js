import { isEscapeKey, checkFileSuffix } from './util.js';
import { resetImgScale } from './img-scale-control.js';
import { resetSlider } from './filter-intensity-slider.js';
import { resetFilter } from './filter.js';
import { pristine } from './form-validator.js';
import { sendData } from './api.js';
import { Route } from './constants.js';
import { SubmitButtonText } from './constants.js';
import { openErrorModal } from './sending-data-error-modal.js';
import { openSuccessModal } from './sending-data-success-modal.js';
import { showErrorAlert } from './alert.js';
import { FILE_TYPES, ErrorText } from './constants.js';

import './img-scale-control.js';
import './filter-intensity-slider.js';

const fileInputNode = document.querySelector('#upload-file');
const formWrapperNode = document.querySelector('.img-upload__overlay');
const imgUploadFormNode = document.querySelector('.img-upload__form');
const hashtagInputNode = formWrapperNode.querySelector('.text__hashtags');
const descriptionInputNode = formWrapperNode.querySelector('.text__description');
const closeFormBtnNode = formWrapperNode.querySelector('#upload-cancel');
const submitBtnNode = formWrapperNode.querySelector('#upload-submit');
const imgPreviewNode = formWrapperNode.querySelector('.img-upload__preview img');
let imgObjectURL = null;

const clearControls = () => {
  resetImgScale();
  resetSlider();
  resetFilter();
};

const clearInputs = () => {
  fileInputNode.value = '';
  hashtagInputNode.value = '';
  descriptionInputNode.value = '';
};

const clearHelpText = () => {
  const helpTextNodes = formWrapperNode.querySelectorAll('.pristine-error');
  if (helpTextNodes) {
    helpTextNodes.forEach((helpTextNode) => {
      helpTextNode.textContent = '';
    });
  }
};

const clearForm = () => {
  clearInputs();
  clearControls();
  clearHelpText();
};

const onFormDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const targetNode = evt.target;
    if (targetNode.classList.contains('text__hashtags') || targetNode.classList.contains('text__description')) {
      return;
    }
    closeFormModal();
  }
};

const disableSubmitBtn = () => {
  submitBtnNode.disabled = true;
  submitBtnNode.textContent = SubmitButtonText.SENDING;
};

const enableSubmitBtn = () => {
  submitBtnNode.disabled = false;
  submitBtnNode.textContent = SubmitButtonText.IDLE;
};

const openFormModal = () => {
  const file = fileInputNode.files[0];
  if (!checkFileSuffix(file, FILE_TYPES)) {
    showErrorAlert(ErrorText.UPLOAD_FILE);
    fileInputNode.value = '';
    return;
  }

  imgObjectURL = URL.createObjectURL(file);
  imgPreviewNode.src = imgObjectURL;
  clearControls();
  formWrapperNode.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormDocumentKeydown);
};

function closeFormModal() {
  formWrapperNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearForm();
  enableSubmitBtn();
  URL.revokeObjectURL(imgObjectURL);
}

fileInputNode.addEventListener('change', () => {
  openFormModal();
});

closeFormBtnNode.addEventListener('click', () => {
  closeFormModal();
});

const setUserFormSubmit = (onSuccess) => {
  imgUploadFormNode.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isFormValid = pristine.validate();
    if (isFormValid) {
      disableSubmitBtn();
      const formData = new FormData(evt.target);
      try {
        await sendData(Route.SEND_DATA, formData);
        onSuccess();
      } catch {
        openErrorModal();
      }
    }
  });
};

setUserFormSubmit(() => {
  openSuccessModal();
  closeFormModal();
});

export { enableSubmitBtn, disableSubmitBtn, onFormDocumentKeydown };
