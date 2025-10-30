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

//Interface
interface User {
id: number;
name: string;
email: string;
age: number;
}

//Create objects that match the interafce
const user1: User = {
id: 1,
name: "Kpie",
email: "Kpie753@test.com",
age: 25,
};
//Error:wrong type
// const user2:User = {
// id:"1",
// name:"Kpie",
// email:"Kpie753@test.com",
// age:25
// }
function displayUser(user: User): void {
console.log(`${user.name} (${user.email})`);
}
//displayUser(user1);

//optional properties
interface LoginCredentilas {
username: string;
password: string;
rememberMe?: boolean; //optinal property means (? means optional)
}
//valid - rembmber me is optinal
const creds1: LoginCredentilas = {
username: "rancho",
password: "Kpie123",
rememberMe: true,
};

function login1(credentials: LoginCredentilas): boolean {
console.log(`Logging in: ${credentials.username}`);
//check if optional property exits
if (credentials.rememberMe) {
console.log("Remember me enabled");
}
return credentials.username === "student";
}
login1(creds1);
//Readonly Properties
interface TestConfig {
readonly baseUrl: string;
readonly timeout: number;
browserType: string; //can be changed
}

const config: TestConfig = {
baseUrl: "https://test.com",
timeout: 5000,
browserType: "chrome",
};
config.browserType = "firefox";
//config.baseUrl = "www.ks.com";
//config.timeout = 6000;

//nested interface and arrays
interface Address {
street: string;
city: string;
country: string;
}
interface UserProfile {
id: number;
name: string;
email: string;
address: Address;
roles: string[];
isActive: boolean;
}
const profile: UserProfile = {
id: 1,
name: "KPie Rancho",
email: "Kpie753@gmail.com",
address: {
street: "123 main st.",
city: "Gondia",
country: "India",
},
roles: ["admin", "tester"],
isActive: true,
};
//Access the nested properties
//console.log(profile.address.city);
//console.log(profile.roles[1]);
//Extending interfce

//base interfce
interface Person {
name: string;
age: number;
}
//Extended interface(inherites from person)
interface Employee extends Person {
employeeId: string;
depratment: string;
}
//must have all properties from person and employee
const employee: Employee = {
name: "Kpie",
age: 30,
employeeId: "Emp010",
depratment: "Engineering",
};
//Extend multiple interface
interface ContactInfo {
email: string;
phone: string;
}
interface FullEmployee extends Person, ContactInfo {
employeeId: string;
}
const fullEmployee: FullEmployee = {
name: "Kpie",
age: 30,
email: "Kpie753@test.com",
phone: "+919923568978",
employeeId: "U123",
};

//real world Playwright use cases

//page Object Model interfces
interface LoginPage {
userInput: string;
passwordInput: string;
submitButton: string;
errorMessage: string;
}
interface TestUser {
username: string;
password: string;
role: "admin" | "user" | "guest";
}
interface TestResult {
testName: string;
status: "passed" | "failed";
duration: number;
screenshot?: string;
}
//use in test
const adminUser: TestUser = {
username: "admin",
password: "Admin123",
role: "admin",
};
const testResult: TestResult = {
testName: "Login test",
status: "passed",
duration: 5000,
};
excercise:
interface TestCredentials {
username: string;
password: string;
rememberMe?: boolean;
}
interface UserData {
id: number;
name: string;
email: string;
age: number;
isActive: boolean;
}
interface Address {
street: string;
city: string;
country: string;
}
interface FullUserProfile extends UserData {
address: Address;
roles: string[];
}
interface Apiresponse {
status: number;
message: string;
data: UserData;
}
interface TestConfig {
readonly baseUrl: string;
readonly timeout: number;
headless: boolean;
}
function performLogin(credentials: TestCredentials): Apiresponse {
return {
status: 123,
message: "passed",
data: {
id: 1,
name: "Kpie",
email: "Kpie753@test.gmail.com",
age: 30,
isActive: true,
},
};
}
const validUser: TestCredentials = {
username: "student",
password: "Password123",
};
const testUser: FullUserProfile = {
id: 101,
name: "Kpie Rancho",
email: "Kpie753@gmail.com",
age: 28,
isActive: true,
address: { street: "123 Main", city: "Mumbai", country: "India" },
roles: ["admin", "tester"],
};
const config: TestConfig = {
baseUrl: "https://practicetestautomation.com",
timeout: 5000,
headless: false,
};
//config.baseUrl = "www.ks.com";
config.headless = true;
const result = performLogin(validUser);
console.log(result.data.name);
console.log(testUser.address.city);
