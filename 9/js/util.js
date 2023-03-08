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

export { getRandomInt, getRandomArrayElement, isEscapeKey, extractNumbers };
