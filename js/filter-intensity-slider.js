import { sliderConfig } from './slider-config.js';
import { clearLastFilter, applyFilter } from './filter.js';

const formWrapperNode = document.querySelector('.img-upload__overlay');
const sliderWrapperNode = formWrapperNode.querySelector('.img-upload__effect-level');
const sliderNode = sliderWrapperNode.querySelector('.effect-level__slider');
const filterBtnNodes = formWrapperNode.querySelectorAll('.effects__list input');

sliderWrapperNode.classList.add('hidden');

let slider = null;

const createSlider = (currentFilter) => {
  sliderWrapperNode.classList.remove('hidden');

  if (slider === null) {
    slider = noUiSlider.create(sliderNode, sliderConfig[currentFilter]);
  } else {
    slider.destroy();
    slider = noUiSlider.create(sliderNode, sliderConfig[currentFilter]);
  }
};

filterBtnNodes.forEach((filterBtnNode) => {
  filterBtnNode.addEventListener('click', (evt) => {
    const currentFilter = evt.target.id.split('-')[1];

    if (currentFilter === 'none') {
      slider.destroy();
      sliderWrapperNode.classList.add('hidden');
      clearLastFilter();
      return;
    }

    createSlider(currentFilter);
    clearLastFilter();
    applyFilter(currentFilter);
  });
});
