import { getRandomNumber } from './util.js';
import { COMMENTS, COMMENTATORS } from './data.js';

const idRepeats = [];

const checkIdRepeat = function(currentNum) {
  while (idRepeats.includes(currentNum)) {
    currentNum = getRandomNumber(1, 25);
  }
  idRepeats.push(currentNum);
  return currentNum;
};

export const createComment = function() {
  return {
    id: checkIdRepeat(getRandomNumber(1, 25)),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
    name: COMMENTATORS[getRandomNumber(0, COMMENTATORS.length - 1)],
  };
};
