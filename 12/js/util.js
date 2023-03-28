export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const extractNumbers = (param) => {
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

export const toggleClass = (node, nodeClass, collection) => {
  for (const item of collection) {
    if (item.classList.contains(nodeClass)) {
      item.classList.remove(nodeClass);
    }
  }
  node.classList.add(nodeClass);
};

export const getRandomIntArray = (min, max, count) => {
  const nums = new Set();
  while(nums.size !== count) {
    nums.add(Math.floor(getRandomInt(min, max)));
  }
  return [...nums];
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const checkFileSuffix = (file, validSuffixes) => {
  const fileName = file.name.toLowerCase();
  const matches = validSuffixes.some((suffix) => fileName.endsWith(suffix));
  return matches;
};
