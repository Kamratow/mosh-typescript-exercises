class Logger {
  constructor(public logFileName: string) {}

  logMessage(message: string) {
    console.log(message);
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private _salary: number) {
    super(firstName, lastName);
  }

  get salary() {
    return this._salary;
  }
}

let newEmployee = new Employee("John", "Test", 700);
console.log(newEmployee.fullName, newEmployee.salary);
