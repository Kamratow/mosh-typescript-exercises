type User = {
  name: string;
  age: number;
  occupation?: string;
  address?: {
    street: string;
  };
};

let users: User[] = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

let myPet: Pet = {
  fly: () => {
    console.log("myPet is flying!");
  },
};

myPet.fly();

type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let currentDayOfWeek: DaysOfWeek = "Thursday";

function getUser(): User {
  return {
    name: "Test",
    age: 28,
  };
}

let user = getUser();
console.log(user?.address?.street);

let foo;

function bar() {
  console.log("bar has been used for x value");
  return 5;
}

let x = foo ?? bar();

let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());
