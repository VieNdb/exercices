let numberOfsecond: number;

class Bird {
  // Write your code here.
  age: number;
  constructor(age: number) {
    this.age = age;
  }
  sing(): void {
    console.log("Cui cui");
  }
  fly(numberOfsecond: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else {

      if ((this.age > 1) && (this.age <=3)) {
        console.log(`The bird flew ${numberOfsecond} meters in ${numberOfsecond} seconds`);
      } else if (this.age > 3) {
        console.log(`The bird flew ${numberOfsecond *2} meters in ${numberOfsecond} seconds`);
      }
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };

