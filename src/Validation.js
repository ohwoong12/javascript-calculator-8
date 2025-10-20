import { ERROR_MESSAGE } from './Constants.js';

export function validOnlyNumber(ary) {
  if (ary.includes(NaN)) {
    throw new Error(ERROR_MESSAGE.INVALID_VALUE_ONLY_NUMBER);
  }
}
export function validInputValueIsNegative(ary) {
  if (ary.some((ele) => ele < 0) === true) {
    throw new Error(ERROR_MESSAGE.INVALID_POSITIVE_NUMBER);
  }
}

export function InvalidSeparator(input) {
  if (input.match(/,|:/) === null && input.length > 1) {
    throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);
  }
}

