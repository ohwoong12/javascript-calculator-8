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

export function InvalidCustomSepartorDesingnator(customSepEndIndex) {
  if (customSepEndIndex === -1) {
    throw new Error(ERROR_MESSAGE.INVALID_CORRECT_CUSTOMSEPARATOR);
  }
}

export function InvalidCustomSeparator(customSeparator) {
  if (Number.isNaN(customSeparator) || customSeparator === '') {
    throw new Error(ERROR_MESSAGE.INVALID_CORRECT_CUSTOMSEPARATOR);
  }
}

export function InvalidOperand(operand) {
  const checkEmptyOperand = operand.indexOf('', 1);
  if (checkEmptyOperand !== -1) {
    throw new Error(ERROR_MESSAGE.INVALID_OPERAND);
  }
}
