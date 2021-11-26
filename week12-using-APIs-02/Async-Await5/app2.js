const shopForBeans = require('./library.js');

function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

// getBeans();
// 1. Heading to the store to buy beans...
// 3. Great! I'm making [object Promise] beans for dinner tonight!
// 2. I bought kidney beans because they were on sale.

async function getBeans2() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans2();
// 1. Heading to the store to buy beans...
// 2. I bought fava beans because they were on sale.
// 3. Great! I'm making fava beans for dinner tonight!