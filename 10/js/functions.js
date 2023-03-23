const checkStringLength = (str, length) => str.length <= length;

const isPalindrome = (str) => {
  const formattedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedStr += formattedStr[i];
  }
  return formattedStr === reversedStr;
};

const fillString = (str, length, insertionStr) => {
  if (str.length >= length) {
    return str;
  }

  let result = '';
  let counter = 0;
  const insertionLength = length - str.length;
  for (let i = 0; i < insertionLength; i++) {
    if (counter === insertionStr.length) {
      counter = 0;
    }

    result += insertionStr[counter];
    counter++;
  }
  result += str;
  return result;
};

export { checkStringLength, isPalindrome, fillString };
