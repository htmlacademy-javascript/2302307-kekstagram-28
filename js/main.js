import { drawPhotos } from './thumbnails.js';
import { openModal, closeModal } from './modal.js';
import { insertData } from './modal-data.js';
import { showErrorAlert } from './alert.js';
import { getData } from './api.js';
import { Route } from './constants.js';
import { ErrorText } from './constants.js';

import './user-form.js';

try {
  const photosData = await getData(Route.GET_DATA);
  drawPhotos(photosData);

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

} catch {
  showErrorAlert(ErrorText.GET_DATA);
}


/**
 * СДЕЛАТЬ ПУНКТ 2 ИЗ ОТПРАВКИ ДАННЫХ. СДЕЛАТЬ ПОКАЗ СООБЩЕНИЯ ДЛЯ УСПЕШНОЙ ОТПРАВКИ ДАННЫХ
 */
