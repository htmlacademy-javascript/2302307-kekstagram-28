import { drawPhotos } from './thumbnails.js';
import { addPictureHandlers } from './modal.js';

drawPhotos();

const pictures = document.querySelectorAll('.pictures a');
addPictureHandlers(pictures);
