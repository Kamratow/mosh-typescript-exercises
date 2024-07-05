function echo<T>(arg: T): T {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

class Entity<T> {
  constructor(private _id: T) {}

  get id() {
    return this._id;
  }
}
