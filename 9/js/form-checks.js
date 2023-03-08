import { MIN_HASHTAG_LENGTH, MAX_HASHTAG_LENGTH, MAX_HASHTAGS_COUNT, MAX_DESCRIPTION_LENGTH } from './constants.js';

const checkHashtagValidity = (hashtag) => {
  const min = MIN_HASHTAG_LENGTH - 1;
  const max = MAX_HASHTAG_LENGTH - 1;
  const regex = new RegExp(`^#[a-zа-я0-9]{${min},${max}}$`, 'i');
  return regex.test(hashtag);
};

const checkHashtagRepeats = (hashtags) => {
  const hashtagsLowerArray = hashtags.map((hashtag) => hashtag.toLowerCase());
  const hashtagsSet = new Set(hashtagsLowerArray);
  return hashtagsSet.size === hashtagsLowerArray.length;
};

const checkHashtagsCount = (hashtags) => hashtags.length <= MAX_HASHTAGS_COUNT;

const validateHashtags = (value) => {
  if (value === '') {
    return true;
  }

  const hashtags = (value.split(' ').length === 0) ? [value] : value.split(' ');
  if (!checkHashtagRepeats(hashtags) || !checkHashtagsCount(hashtags)) {
    return false;
  }
  for (const hashtag of hashtags) {
    if (!checkHashtagValidity(hashtag)) {
      return false;
    }
  }
  return true;
};


const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

export { validateHashtags, validateDescription };
