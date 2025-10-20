import { ERROR_MESSAGE } from './Constants.js';

export default function validOnlyNumber(ary) {
  if (ary.includes(NaN)) {
    throw new Error(ERROR_MESSAGE.INVALID_VALUE_ONLY_NUMBER);
  }
}
export function validInputValueIsNegative(ary) {
  if (ary.some((ele) => ele < 0) === true) {
    throw new Error(ERROR_MESSAGE.INVALID_POSITIVE_NUMBER);
  }
}
