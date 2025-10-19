// 1. Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// 2. Функция для проверки палиндрома
function isPalindrome(string) {
  const cleanString = string.toLowerCase().replace(/\s/g, '');
  return cleanString === cleanString.split('').reverse().join('');
}

// 3. Функция для извлечения чисел из строки
function extractNumber(input) {
  const string = String(input);
  const digits = string.replace(/\D/g, '');

  if (digits.length === 0) {
    return NaN;
  }

  return parseInt(digits, 10);
}
// Проверка длины строки
checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Проверка палиндрома
isPalindrome('топот'); // true
isPalindrome('Довод'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

// Извлечение чисел
extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('a я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
