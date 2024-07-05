class Logger {
  constructor(public logFileName: string) {}

  logMessage(message: string) {}
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
