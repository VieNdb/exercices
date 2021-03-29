import { Tree } from "./Tree";

// Code your class here.

class OrangeTree extends Tree {
  oranges: [];
  constructor(age: number, height: number, alive: boolean, oranges: []) {
    super(age);
    this.oranges = oranges;
  }
}  
// Leave the line below for tests to work properly.
export { OrangeTree };