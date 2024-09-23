console.log("Exercise 3");

console.log("Calculate the angles of triangle: ")
let angle1: number = 80;
let angle2: number = 65;

console.log({angle1});
console.log({angle2});
console.log("The angle of triangle is: " + findAngle(angle1, angle2));

function findAngle(a: number, b: number) {
    return 180 - a - b;
}