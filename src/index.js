/**
 *
 * @param {any[]} arr - a sequence of elements (can be integers, strings, or other types)
 * @param {any} n - a number or a target element (based on problem context)
 * @returns {} - the output based on the problem logic
 *
 * This function will be called by our system.
 * So fill in your code inside this function.
 *
 */
function handle(arr, n) {
  // WRITE YOUR CODE HERE....
  return arr; // Modify this return based on your problem's requirements.
}

/*
 * **************************************************************************************
 *                          DO NOT EDIT THE CODE BELOW.
 * ***************************************************************************************
 * This code is used to boostrap your solution to be checked for correctness by our system.
 */
function main() {
  const input = process.argv.slice(2);

  const arr = JSON.parse(input[0]);
  const n = parseInt(input[1]);

  const output = handle(arr, n);
  console.log(JSON.stringify(output));
}

main();
