import { drawPhotos } from './thumbnails.js';
import { openModal, closeModal } from './modal.js';
import { insertData } from './modal-data.js';

import './user-form.js';

drawPhotos();

const pictureNodes = document.querySelectorAll('.pictures a');
const modalCloseBtnNode = document.querySelector('#picture-cancel');

pictureNodes.forEach((pictureNode) => {
  pictureNode.addEventListener('click', (evt) => {
    openModal();
    insertData(evt);
  });
});

modalCloseBtnNode.addEventListener('click', () => {
  closeModal();
});
