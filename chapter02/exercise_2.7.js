function isSafeInt(value) {

    if (typeof value === "number") {
        return Number.isSafeInteger(value);
    }

    if (typeof value === "bigint") {
        return value >= BigInt(Number.MIN_SAFE_INTEGER) &&
               value <= BigInt(Number.MAX_SAFE_INTEGER);
    }

    return false;
}

// Tests for isSafeInt()
console.log(isSafeInt(123));                         // true
console.log(isSafeInt(1.5));                         // false
console.log(isSafeInt(Number.MAX_SAFE_INTEGER));     // true
console.log(isSafeInt(Number.MAX_SAFE_INTEGER + 1)); // false
console.log(isSafeInt(BigInt("9007199254740991")));  // true
console.log(isSafeInt(BigInt("9007199254740992")));  // false
console.log(isSafeInt("100"));                       // false (string, not a number or bigint)
