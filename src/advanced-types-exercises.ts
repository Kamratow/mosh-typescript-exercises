type User = {
  name: string;
  age: number;
  occupation?: string;
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

type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let currentDayOfWeek: DaysOfWeek = "Thursday";
