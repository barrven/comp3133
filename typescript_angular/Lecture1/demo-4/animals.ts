export class Animal {
  constructor() {
    console.log("Animal");
  }
}

export class Penguin extends Animal {
  constructor() {
    super();

    var speak = () => {
      console.log("Penguin");
    };
  }
}
