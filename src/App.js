import { Console } from '@woowacourse/mission-utils';
import { CACLULATE_MESSAGE } from './Constants.js';
class App {
  async run() {
    try {
      const input = await this.enterInput();
    } catch (error) {
      throw new Error(error);
    }
  }
  async enterInput() {
    this.input = await Console.readLineAsync(CACLULATE_MESSAGE.START);
  }
}

export default App;
