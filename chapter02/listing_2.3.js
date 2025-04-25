const a = 20000000000000000n;
const b = 30000000000000000n;

console.log(a + b);  // 50000000000000000n
console.log(b - a);  // 10000000000000000n
console.log(b * 2n); // 60000000000000000n
console.log(b / a);  // 1n (truncated because integer!)
console.log(b % a);  // 10000000000000000n
console.log(a ** 2n) // 400000000000000000000000000000000n
console.log(a < 10); // false
console.log(b > Number.MAX_SAFE_INTEGER); // true