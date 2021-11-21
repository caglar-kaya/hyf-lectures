console.log("This is the first line of code.");

const usingSTO = () => {
  console.log("timeout 1");
}
setTimeout(usingSTO, 1500);

console.log("This is the last line of code.");
