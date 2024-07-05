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

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface IEmployee {
  name: string;
  salary: number;
  address: Address;
}

let employee: IEmployee = {
  name: "John Smith",
  salary: 50_000,
  address: { street: "Flinders st", city: "Melbourne", zipCode: 3144 },
};
