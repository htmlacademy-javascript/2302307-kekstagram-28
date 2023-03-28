import { IMG_SCALE_CHANGE_STEP, IMG_MIN_SCALE, IMG_MAX_SCALE } from './constants.js';
import { extractNumbers } from './util.js';

const formWrapperNode = document.querySelector('.img-upload__overlay');
const imgDecreaseScaleBtnNode = formWrapperNode.querySelector('.scale__control--smaller');
const imgIncreaseScaleBtnNode = formWrapperNode.querySelector('.scale__control--bigger');
const imgScaleValueNode = formWrapperNode.querySelector('.scale__control--value');
const imgPreviewNode = formWrapperNode.querySelector('.img-upload__preview img');

const resetImgScale = () => {
  imgScaleValueNode.value = `${IMG_MAX_SCALE}%`;
  imgPreviewNode.style.transform = 'scale(1)';
};

const decreaseImgScale = () => {
  const currentScale = extractNumbers(imgScaleValueNode.value);
  if (currentScale === IMG_MIN_SCALE) {
    return;
  }

  const newScaleValue = currentScale - IMG_SCALE_CHANGE_STEP;
  imgPreviewNode.style.transform = `scale(0.${newScaleValue})`;
  imgScaleValueNode.value = `${newScaleValue}%`;
};

const increaseImgScale = () => {
  const currentScale = extractNumbers(imgScaleValueNode.value);

  if (currentScale === IMG_MAX_SCALE) {
    return;
  }

  const newScaleValue = currentScale + IMG_SCALE_CHANGE_STEP;
  imgPreviewNode.style.transform = (newScaleValue === 100) ? 'scale(1)' : `scale(0.${newScaleValue})`;
  imgScaleValueNode.value = `${newScaleValue}%`;
};

imgDecreaseScaleBtnNode.addEventListener('click', () => {
  decreaseImgScale();
});

imgIncreaseScaleBtnNode.addEventListener('click', () => {
  increaseImgScale();
});

export { resetImgScale };
