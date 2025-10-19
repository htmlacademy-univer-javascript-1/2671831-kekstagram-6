import { getRandomNumber } from './util.js';
import { createComment } from './comment-generator.js';

const UrlRepeats = [];

const checkUrlRepeat = function(currentNum) {
  while (UrlRepeats.includes(currentNum)) {
    currentNum = getRandomNumber(1, 25);
  }
  UrlRepeats.push(currentNum);
  return currentNum;
};

export const createRandomPerson = function() {
  return {
    id: getRandomNumber(1, 25),
    url: `photos/${checkUrlRepeat(getRandomNumber(1, 25))}.jpg`,
    description: 'Крутяк короче блин да',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 30)}, createComment)
  };
};

export const createPost = Array.from({length: 25}, createRandomPerson);
