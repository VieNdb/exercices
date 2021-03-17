const identityForm = (reader) => {
  // Code here
  reader.question("What is your first name ? ", firstName => {

    reader.question("What is your last name ? ", lastName => {
  
      reader.question("What is your age ? ", age => {
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
