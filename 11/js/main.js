import { drawPhotos } from './thumbnails.js';
import { showErrorAlert } from './alert.js';
import { getData } from './api.js';
import { RENDERER_DELAY, Route } from './constants.js';
import { ErrorText } from './constants.js';
import { showFiltersSection, setClick, reRenderThumbnails } from './content-filters.js';
import { debounce } from './util.js';

import './user-form.js';

try {
  const photosData = await getData(Route.GET_DATA);
  drawPhotos(photosData);
  showFiltersSection();
  setClick(debounce((btnNode) => {
    reRenderThumbnails(photosData, btnNode);
  }, RENDERER_DELAY));

} catch {
  showErrorAlert(ErrorText.GET_DATA);
}
