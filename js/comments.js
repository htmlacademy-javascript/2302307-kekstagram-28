import { DISPLAY_COMMENTS_STEP } from './constants.js';

const modal = document.querySelector('.big-picture');
const loadCommentsBtn = modal.querySelector('.comments-loader');

const updateCommentsCounter = () => {
  const displayedCommentsCount = modal.querySelectorAll('li[class="social__comment"]').length;
  modal.querySelector('.comments-displayed').textContent = displayedCommentsCount.toString();
};

const checkLoadCommentsBtn = () => {
  const totalCommentsCount = modal.querySelectorAll('.social__comment').length;

  if (totalCommentsCount <= DISPLAY_COMMENTS_STEP) {
    loadCommentsBtn.classList.add('hidden');
  } else {
    loadCommentsBtn.classList.remove('hidden');
  }
};

const hideExcessComments = () => {
  const displayedComments = modal.querySelectorAll('li[class="social__comment"]');
  const displayedCommentsCount = displayedComments.length;
  const displayedNow = (displayedCommentsCount <= DISPLAY_COMMENTS_STEP) ? displayedCommentsCount : DISPLAY_COMMENTS_STEP;

  for (let i = 0; i < displayedCommentsCount; i++) {
    if (i >= displayedNow) {
      displayedComments[i].classList.add('hidden');
    }
  }
};

const showMoreComments = () => {
  const hiddenComments = modal.querySelectorAll('.social__comment.hidden');
  if (hiddenComments.length <= DISPLAY_COMMENTS_STEP) {
    for (let i = 0; i < hiddenComments.length; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
    loadCommentsBtn.classList.add('hidden');
  } else {
    for (let i = 0; i < DISPLAY_COMMENTS_STEP; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
  }
};

loadCommentsBtn.addEventListener('click', () => {
  showMoreComments();
  updateCommentsCounter();
});

export { hideExcessComments, updateCommentsCounter, checkLoadCommentsBtn };
