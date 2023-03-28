const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const extractNumbers = (param) => {
  const str = param.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const current = parseInt(str[i], 10);
    if (!isNaN(current)) {
      result += current;
    }
  }
  return (result === '') ? NaN : Number(result);
};

const toggleClass = (node, nodeClass, collection) => {
  for (const item of collection) {
    if (item.classList.contains(nodeClass)) {
      item.classList.remove(nodeClass);
    }
  }
  node.classList.add(nodeClass);
};

const getRandomIntArray = (min, max, count) => {
  const nums = new Set();
  while(nums.size !== count) {
    nums.add(Math.floor(getRandomInt(min, max)));
  }
  return [...nums];
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomInt, getRandomArrayElement, isEscapeKey, extractNumbers, toggleClass, getRandomIntArray, debounce };
