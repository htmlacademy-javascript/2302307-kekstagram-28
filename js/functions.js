function checkStringLength(str, length) {
  return str.length <= length;
}

function isPalindrome(str) {
  const formattedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedStr += formattedStr[i];
  }
  return formattedStr === reversedStr;
}

function extractNumbers(param) {
  const str = param.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      result += str[i];
    }
  }
  return (result === '') ? NaN : Number(result);
}

function fillString(str, length, insertionStr) {
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
}


checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);

fillString('1', 2, '0');
fillString('1', 4, '0');
fillString('q', 4, 'werty');
fillString('qwerty', 4, '0');

// Добавочные символы использованы полтора раза
// В задании указан результат 'wweq', но мне кажется тут скорее должно быть 'wewq'. Т.к. we * 1.5 = we + w
fillString('q', 4, 'we');

