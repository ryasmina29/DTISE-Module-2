"use strict";
console.log("Exercise 2");
console.log("Find diameter, circumfence and area of circle with radius of 5: ");
console.log("Diameter: " + getDiameter(5));
console.log("Circumfence: " + getCircumfence(5));
console.log("Area: " + getAreacirc(5));
function getDiameter(radius) {
    return radius * 2;
}
function getCircumfence(radius) {
    return 2 * Math.PI * radius;
}
function getAreacirc(radius) {
    return Math.PI * radius * radius;
}
