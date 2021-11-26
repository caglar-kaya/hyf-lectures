let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

// Write your code below:
async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

  const vegetable = foodArray[0];
  const starch = foodArray[1];
  const protein = foodArray[2];
  const side = foodArray[3];

  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain();