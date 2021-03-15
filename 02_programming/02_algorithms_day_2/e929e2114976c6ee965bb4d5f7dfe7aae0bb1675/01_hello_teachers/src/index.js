function sayHelloToTeachers(teachers) {
  // Code the function here.
  const affichage = `Hello ${teachers} !`;
  console.log(affichage);
}

// Do not remove last lines, it is for tests
const spartaTeachers = ["Clément", "Fenn", "Nicolas", "Martin", "Louis"];
sayHelloToTeachers(spartaTeachers);
spartaTeachers.forEach(sayHelloToTeachers);