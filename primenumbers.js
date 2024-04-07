// Definition:
// A number is said to be prime if it is divisible only by 1 and itself.
// eg : 3%1==0 and 3%3==0,3 is said to be prime because it has no other factors than 1 and 3.

// naive solution:
// function prime(n) {
//   if (n === 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }
// console.log(prime(6))

// optimal solution:

function isPrime(n) {
  debugger
  if (n === 1)
    return false;
  if (n == 2 || n == 3)
    return true;
  if (n % 2 === 0 || n % 3 === 0)
    return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0)
      return false;
  }
  return true;
}
console.log(isPrime(5))