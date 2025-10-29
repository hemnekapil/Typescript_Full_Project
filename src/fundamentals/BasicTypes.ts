//String
let username: string = "Alice";
let email: string = "Alice@test.com";
username = "Kpie";
//username = 123;

//Number

let age: number = 36;
let price: number = 500.5;
//price = "kpie";

//Boolean
let isActive = true;
let isDoing = false;
isActive = false;
//isActive = "Kpie";

//Array of strings
let tags: string[] = ["Javascript", "Typescript", "Java"];
tags.push("Python");
//tags.push(123);

//Array of numbers
let numbers: number[] = [3, 5, 7, 8];
numbers.push(14);
//numbers.push("sweta");
console.log(numbers);

//Types Infersnce
let city = "New York";
//city = 123;
let count = 20;
count = 30;
//count = "Fourty";
function greet(name: string) {
  return `Hello ${name}`;
}
greet("Kpie");
//greet(123);

//Any vs unknown
let data: any = "hello";
data = 123;
data = true;
//data.toUpperCase();

//unknown
let value: unknown = "hello";
value = 123;
//value.touppercase();

//must check type before using
if (typeof value == "string") {
  console.log(value.toUpperCase());
}

//function types
function add(a: number, b: number) {
  return a + b;
}
//console.log(add("5", 3));// error

function logMessage(message: string): void {
  console.log(message);
}

//Optional parameters
function greet1(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, Your age is ${age}`;
  }
  return `Hello ${name}`;
}
greet1("Kpie");
greet1("Kpie", 31);

let testUsername = "student";
let testPassword = "Password123";
//testUsername = 23;

let testUsers: string[] = ["alice", "bob", "charlie"];
//testUsers.push(23);

function login(username: string, password: string): boolean {
  if (username === "student" && password === "Password123") {
    return true;
  }
  return false;
}
let isLoggedIn = login("student", "Password123");
function getTestData(userId: number): string {
  return `User ${userId} data`;
}
console.log(getTestData(1));

let scores: number[] = [95, 87, 92, 88];
function calculateAvarage(scores: number[]): number {
  let num = 0;
  for (let avg = 0; avg <= scores.length - 1; avg++) {
    num = num + scores[avg];
  }
  let avgNumber = num / scores.length;
  return avgNumber;
}

console.log(calculateAvarage(scores));
