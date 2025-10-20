import { Console } from '@woowacourse/mission-utils';
import { CACLULATE_MESSAGE } from './Constants.js';
import {
  validOnlyNumber,
  validInputValueIsNegative,
  InvalidSeparator,
  InvalidCustomSeparator,
  InvalidCustomSepartorDesingnator,
  InvalidOperand,
} from './Validation.js';

class App {
  async run() {
    try {
      const input = await this.enterInput();

      if (input === '') {
        this.printResult(0);
        return;
      }

      const splitValues = this.splitInputValue(input);
      const result = this.calculate(splitValues);
      this.printResult(result);
    } catch (error) {
      throw new Error(error);
    }
  }

  async enterInput() {
    this.input = await Console.readLineAsync(CACLULATE_MESSAGE.START);
  }

  printResult() {
    Console.print(`${CACLULATE_MESSAGE.END} ${this.calculate()}`);
  }

  splitInputValue() {
    if (this.input.startsWith('//')) {
      const customSepEndIndex = this.input.indexOf('\\n');
      InvalidCustomSepartorDesingnator(customSepEndIndex);

      const customSeparator = this.input.slice(2, customSepEndIndex);
      InvalidCustomSeparator(customSeparator);

      const toBeValue = this.input.slice(customSepEndIndex + 2);

      return toBeValue.split(customSeparator);
    }
    InvalidSeparator(this.input);
    return this.input.split(/,|:/);
  }

  calculate() {
    const afterSplitValue = this.splitInputValue();
    InvalidOperand(afterSplitValue);

    const preCheckValue = afterSplitValue.map((ele) => {
      return Number(ele);
    });

    validInputValueIsNegative(preCheckValue);
    validOnlyNumber(preCheckValue);

    const result = preCheckValue.reduce((a, b) => a + b, 0);

    return result;
  }
}

export default App;
