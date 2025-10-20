import { Console } from '@woowacourse/mission-utils';
import { CACLULATE_MESSAGE } from './Constants.js';
class App {
  async run() {
    try {
      const input = await this.enterInput();

      const splitValues = this.splitInputValue(input);
    } catch (error) {
      throw new Error(error);
    }
  }
  async enterInput() {
    this.input = await Console.readLineAsync(CACLULATE_MESSAGE.START);
  }
  splitInputValue() {
    if (this.input.startsWith('//')) {
      const customSepEndIndex = this.input.indexOf('\\n');
      const customSeparator = this.input.slice(2, customSepEndIndex);
      const toBeValue = this.input.slice(customSepEndIndex + 2);

      return toBeValue.split(customSeparator);
    }
    return this.input.split(/,|:/);
  }
  }
}

export default App;
