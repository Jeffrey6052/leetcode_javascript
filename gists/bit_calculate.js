
// JS中的位运算

console.log("5 & 1 =", 5 & 1)
// => 5 & 1 = 1   因为二进制下 0101 & 0001 = 0001

console.log("5 | 1 =", 5 | 1)
// => 5 | 1 = 5   因为二进制下 0101 | 0001 = 0101

console.log("5 ^ 1 =", 5 ^ 1)
// => 5 ^ 1 = 4   因为二进制下 0101 ^ 0001 = 0100

console.log("~5 =", ~5)
// => ~5 = 6    因为二进制下 ~0101 = 1010

console.log("5 << 1 =", 5 << 1)
// => 5 << 1 = 10   因为二进制下 0101 << 1 = 01010, 相当于十进制乘上2

console.log("5 << 2 =", 5 << 2)
// => 5 << 1 = 20   因为二进制下 0101 << 2 = 010100

console.log("5 >> 1 =", 5 >> 1)
// => 5 >> 1 = 2    因为二进制下 0101 >> 1 = 010

console.log("5 >> 2 =", 5 >> 2)
// => 5 >> 2 = 1    因为二进制下 0101 >> 2 = 01

console.log("-5 >> 1 =", -5 >> 1)
// => -5 >> 1 = -3

console.log("-5 >> 2 =", -5 >> 2)
// => -5 >> 2 -2

console.log("-5 >>> 1 =", -5 >>> 1)
// => -5 >>> 1 2147483645

console.log("-5 >>> 2 =", -5 >>> 2)
// => -5 >>> 2 1073741822

