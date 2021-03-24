const readline = require("readline");
const eCommerce = require("./eCommerce/index");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

eCommerce(reader);
