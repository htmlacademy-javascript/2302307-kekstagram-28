const formWrapperNode = document.querySelector('.img-upload__overlay');
const imgPreviewNode = formWrapperNode.querySelector('.img-upload__preview');
const filterIntensityInputNode = formWrapperNode.querySelector('.effect-level__value');
const sliderNode = formWrapperNode.querySelector('.effect-level__slider');
const defaultFilterRadioNode = formWrapperNode.querySelector('#effect-none');

let lastFilterClass = '';

const clearLastFilter = () => {
  if (lastFilterClass !== '') {
    imgPreviewNode.classList.remove(lastFilterClass);
    imgPreviewNode.style.filter = null;
  }
};

const resetFilter = () => {
  clearLastFilter();
  defaultFilterRadioNode.checked = true;
};

const applyFilter = (currentFilter) => {
  const filterClass = `effects__preview--${currentFilter}`;
  imgPreviewNode.classList.add(filterClass);
  lastFilterClass = filterClass;

  sliderNode.noUiSlider.on('update', () => {
    const currentSliderValue = sliderNode.noUiSlider.get();
    filterIntensityInputNode.value = currentSliderValue;

    switch (currentFilter) {
      case 'chrome':
        imgPreviewNode.style.filter = `grayscale(${currentSliderValue})`;
        break;
      case 'sepia':
        imgPreviewNode.style.filter = `sepia(${currentSliderValue})`;
        break;
      case 'marvin':
        imgPreviewNode.style.filter = `invert(${currentSliderValue}%)`;
        break;
      case 'phobos':
        imgPreviewNode.style.filter = `blur(${currentSliderValue}px)`;
        break;
      case 'heat':
        imgPreviewNode.style.filter = `brightness(${currentSliderValue})`;
    }
  });
};

export { clearLastFilter, applyFilter, resetFilter };
