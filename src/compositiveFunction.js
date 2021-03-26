// 1. Composite function
// Write a function called "rokket" which produces the following output when called:
// console.log(rokket(2)(5)(3)) // this outputs 30
// console.log(rokket(4)(2)(2)) // this outputs 16
// console.log(rokket(8)(2)(1)) // this also outputs 16
// This function must work for any three integer numbers.

export const rokket = (param1) => (param2) => (param3) => (param1*param2)*param3;