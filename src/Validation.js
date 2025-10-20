import { ERROR_MESSAGE } from './Constants.js';

export default function validOnlyNumber(ary) {
  if (ary.includes(NaN)) {
    throw new Error(ERROR_MESSAGE.INVALID_VALUE_ONLY_NUMBER);
  }
}
