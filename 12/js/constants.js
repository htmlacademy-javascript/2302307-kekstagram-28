export const DISPLAY_COMMENTS_STEP = 5;

export const MAX_HASHTAGS_COUNT = 5;
export const MIN_HASHTAG_LENGTH = 2;
export const MAX_HASHTAG_LENGTH = 20;

export const MAX_DESCRIPTION_LENGTH = 140;

export const IMG_SCALE_CHANGE_STEP = 25;
export const IMG_MIN_SCALE = 25;
export const IMG_MAX_SCALE = 100;

export const ALERT_SHOW_TIME = 5000;

export const RANDOM_PHOTOS_COUNT = 10;

export const RENDERER_DELAY = 500;

export const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

export const Method = {
  GET: 'GET',
  POST: 'POST'
};

export const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  UPLOAD_FILE: 'Неверный формат файла. Поддерживаемые типы файлов: .JPG, .JPEG, .PNG'
};

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};
