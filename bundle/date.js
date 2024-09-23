"use strict";
console.log("Exercise 4");
console.log("Calculate the difference of two days: ");
const date1 = new Date(2024, 3, 19);
const date2 = new Date(2024, 3, 21);
const diff = new Date(date2.getTime() - date1.getTime());
console.log({ date1 });
console.log({ date2 });
console.log("The difference is: " + (diff.getUTCDate() - 1).toString);
