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
