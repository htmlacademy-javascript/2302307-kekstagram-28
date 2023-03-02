import { DISPLAY_COMMENTS_STEP } from './constants.js';

const modalNode = document.querySelector('.big-picture');
const loadCommentsBtnNode = modalNode.querySelector('.comments-loader');

const updateCommentsCounter = () => {
  const displayedCommentsCount = modalNode.querySelectorAll('li[class="social__comment"]').length;
  modalNode.querySelector('.comments-displayed').textContent = displayedCommentsCount.toString();
};

const checkLoadCommentsBtn = () => {
  const totalCommentsCount = modalNode.querySelectorAll('.social__comment').length;

  if (totalCommentsCount <= DISPLAY_COMMENTS_STEP) {
    loadCommentsBtnNode.classList.add('hidden');
  } else {
    loadCommentsBtnNode.classList.remove('hidden');
  }
};

const hideExcessComments = () => {
  const displayedCommentNodes = modalNode.querySelectorAll('li[class="social__comment"]');
  const displayedCommentsCount = displayedCommentNodes.length;
  const displayedNow = (displayedCommentsCount <= DISPLAY_COMMENTS_STEP) ? displayedCommentsCount : DISPLAY_COMMENTS_STEP;

  for (let i = 0; i < displayedCommentsCount; i++) {
    if (i >= displayedNow) {
      displayedCommentNodes[i].classList.add('hidden');
    }
  }
};

const showMoreComments = () => {
  const hiddenCommentNodes = modalNode.querySelectorAll('.social__comment.hidden');
  if (hiddenCommentNodes.length <= DISPLAY_COMMENTS_STEP) {
    for (let i = 0; i < hiddenCommentNodes.length; i++) {
      hiddenCommentNodes[i].classList.remove('hidden');
    }
    loadCommentsBtnNode.classList.add('hidden');
  } else {
    for (let i = 0; i < DISPLAY_COMMENTS_STEP; i++) {
      hiddenCommentNodes[i].classList.remove('hidden');
    }
  }
};

loadCommentsBtnNode.addEventListener('click', () => {
  showMoreComments();
  updateCommentsCounter();
});

export { hideExcessComments, updateCommentsCounter, checkLoadCommentsBtn };
