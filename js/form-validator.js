import { validateHashtags, validateDescription } from './form-checks.js';

const imgUploadFormNode = document.querySelector('.img-upload__form');
const hashtagInputNode = imgUploadFormNode.querySelector('.text__hashtags');
const descriptionInputNode = imgUploadFormNode.querySelector('.text__description');

const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'text-help'
};

const pristine = new Pristine(imgUploadFormNode, pristineConfig, false);

pristine.addValidator(
  hashtagInputNode,
  validateHashtags,
  'Хэштег не соответствует правилам именования'
);

pristine.addValidator(
  descriptionInputNode,
  validateDescription,
  'Длина комментария не должна превышать 140 символов'
);

hashtagInputNode.addEventListener('change', () => {
  pristine.validate();
});

descriptionInputNode.addEventListener('change', () => {
  pristine.validate();
});

export { pristine };
