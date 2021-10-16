const logName = (yourName = '\"No name!\"') => {
  console.log(`Your name is ${yourName}.`);
};

logName('Caglar'); // Your name is Caglar.

logName(); // Your name is "No name!".
