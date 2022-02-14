class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// new ArrayOfAnything<string>(["a", "b", "c"]);

// type inference:
const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions:

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// printAnything<string>(["a", "b", "c"]);

printAnything(["a", "b", "c"]);

// generic constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

/* function  printHousesOrCars<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print(); // Property 'print' does not exist on type 'T'
  }
} */

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print(); // no error
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
