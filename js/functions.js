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
const checkTime = function(dayStart, dayEnd, meetingStart, meetingDuration){
  let dayStartInMin = 0;
  let dayEndInMin = 0;
  let meetingStartInMin = 0;

  dayStart = dayStart.split(':');
  dayStartInMin += Number(dayStart[0]) * 60 + Number(dayStart[1]);

  dayEnd = dayEnd.split(':');
  dayEndInMin += Number(dayEnd[0]) * 60 + Number(dayEnd[1]);

  meetingStart = meetingStart.split(':');
  meetingStartInMin += Number(meetingStart[0]) * 60 + Number(meetingStart[1]);

  if (dayStartInMin <= meetingStartInMin && meetingStartInMin <= dayEndInMin && ((dayEndInMin - meetingStartInMin) >= meetingDuration)){
    return true;
  }
  return false;
};

checkTime('8:0', '10:0', '8:0', 120);
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
