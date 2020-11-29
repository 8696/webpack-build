export default class PersonClass {
  public username: string

  constructor(username) {
    this.username = username
  }

  sleep(time: number = 1000): object {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
}