import Person from './person.class'
import {includes} from './utils'

export default class Main extends Person {
  constructor(username) {
    super(username);
  }

  echoName() {
    console.log(includes([1, 2, 3], 3))
    console.log(this.username)
  }


  async testSleep() {
    for (let i = 0; i < 10; i++) {
      await this.sleep(1000)
      console.log(i)
    }
  }

}