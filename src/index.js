const handle = require('./solution');

/*
 * **************************************************************************************
 *                          DO NOT EDIT THE CODE BELOW.
 * ***************************************************************************************
 * This code is used to boostrap your solution to be checked for correctness by our system.
 */
function main() {
  const input = process.argv.slice(2);
  const [arrStr, nStr] = input[0].split(" | ");
  const arr = arrStr.split(", ").map((num) => parseInt(num.trim()));
  const n = parseInt(nStr.trim());
  const output = handle(arr, n);
  console.log(JSON.stringify(output));
}

main();
