function isRoughlyEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

// Tests for isRoughlyEqual()
console.log(isRoughlyEqual(0.1 + 0.2, 0.3));           // true - the classic case
console.log(isRoughlyEqual(1.0000000000000001, 1));    // true — within EPSILON
console.log(isRoughlyEqual(1.0000001, 1));             // false — beyond EPSILON
console.log(isRoughlyEqual(0.0000000000000001, 0));    // true — very small difference
console.log(isRoughlyEqual(1000.0001, 1000));          // false — difference too large
console.log(isRoughlyEqual(1000000.0000001, 1000000)); // false — difference still too large
