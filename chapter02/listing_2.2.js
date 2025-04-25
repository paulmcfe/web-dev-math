const previousMax = BigInt(Number.MAX_SAFE_INTEGER);
const noLongerUnsafe1 = previousMax + 1n;
const noLongerUnsafe2 = previousMax + 2n;
console.log(`The old maximum safe integer: ${previousMax}`);
console.log(`The old maximum plus 1 equals ${noLongerUnsafe1}`);
console.log(`The old maximum plus 2 equals ${noLongerUnsafe2}`);
