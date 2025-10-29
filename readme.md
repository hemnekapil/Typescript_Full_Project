type TestConfig = {
baseUrl: string;
username: string;
password: string;
retries: number;
headless: boolean;
};
const config: TestConfig = {
baseUrl: "https://practicetestautomation.com/",
username: "Kpie",
password: "Kpie123",
retries: 12,
headless: true,
};

console.log(`Running tests on: ${config.baseUrl}`);

//basic variable types

let testName: string = "login test";
let maxTimeout: number = 5000;
let isPassed: boolean = true;

console.log(`Test name: ${testName}`);
console.log(`Max Timeout: ${maxTimeout}`);
console.log(`Passed: ${isPassed}`);

type UserLogin = {
username: string;
password: string;
rememberMe: boolean;
};
const user: UserLogin = {
username: "student",
password: "Kpie123",
rememberMe: true,
};

console.log(`Username:${user.username} | Remember Me:${user.rememberMe}`);
//Tuples and Arrays
//Arrays (Typed Lists)

//List of test URls
let testUrls: string[] = [
"https://practicetestautomation.com/",
"https://playwright.dev/",
"https://github.com/",
];
//List of responses times

let responseTimes: number[] = [120, 250, 310];

//Access and modify
console.log(`First URL:${testUrls[0]}`);
responseTimes.push(400);
console.log(`Updated response times: ${responseTimes}`);
//Tuples
let testResult: [string, boolean, number] = ["Login Test", true, 2500];
console.log(
`Test Name:${testResult[0]} | Passed:${testResult[1]} | Time: ${testResult[2]}`
);
//basic types

import { createUser, User } from "./models/user";
import { ApiService } from "./services/api";

console.log("\n user managmant");

const user1: User = createUser("John Doe", "john@example.com");
const user2: User = createUser("Jane smith", "Jane@exmaple.com");

const apiService = new ApiService();
apiService.addUser(user1);
apiService.addUser(user2);

console.log("All users:", apiService.getAllUsers());
