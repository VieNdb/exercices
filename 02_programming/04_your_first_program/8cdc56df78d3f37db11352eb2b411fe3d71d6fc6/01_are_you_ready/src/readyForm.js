const readyForm = (reader) => {
  // Code here
  reader.question("Are you ready for today ? ", (name) => {
    console.log(`Hello ${name}!`);
  
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
