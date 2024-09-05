// Day 1: Variables, Data Types, and Operators
// Variable
// 1. Variable declaration
// Using let
const firstName = "Endris";
const lastName = "Mussa";
// using var
var age = 40;
//using let
let city = "Addis Ababa";
console.log(
  "Name:",
  firstName,
  " ",
  lastName,
  "\n",
  "Age:",
  age,
  "\n",
  "City:",
  city
);
// Data Types
// string
const name = "Abebe Kebde";
var aa = "Hello World";
let Address = "Addis Ababa, Ethiopia";

// Number
let num1 = 20;
let num2 = 100;
console.log(num1 + num2);
//Boolean
let isStudent = true;
console.log(isStudent);
// Null
var user = null;
console.log(user);
// Undefined
var user2;
console.log(user2);
// Oprators
// Arithmetic operations
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num2 % num1);
// Assignment operators
let x = 5;
x += 2;
console.log(x);
x -= 10;
console.log(x);
//Object
let person = {
  name: "Endris",
  age: 30,
  city: "Harar",
  favoriteFood: ["Enjera", "Macaroni", "Rice"],
  //Method (function inside an object)

  getFullName: function () {
    return this.name + " " + this.age + " " + this.city;
  },
};
// Accessing object properties
console.log(person.name);
console.log(person.city);
// Accessing method
console.log(person.getFullName());
// Updating a property
person.age = 50;
console.log(person.age);
// Adding a new property
person.job = "Engineer";
console.log(person.job);
console.log(person.favoriteFood);
console.log(person.favoriteFood[0]);
