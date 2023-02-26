import { drawPhotos } from './thumbnails.js';
import { addPictureHandlers } from './modal.js';

drawPhotos();

const pictureNodes = document.querySelectorAll('.pictures a');
addPictureHandlers(pictureNodes);
