// //Enum
// //string enums
// enum TestStatus {
//   Passed = "PASSED",
//   Failed = "FAILED",
//   Skipped = "SKIPPED",
// }
// function logTestResult(status: TestStatus) {
//   console.log(`Test status:${status}`);
// }
// logTestResult(TestStatus.Passed);
// //Numeric Enums
// enum Priority {
//   Low = 1,
//   Medium = 2,
//   High = 3,
//   Critical = 4,
// }
// function assignTask(priority: Priority) {
//   if (priority >= Priority.High) {
//     console.log("Urgent task!");
//   }
// }
// assignTask(Priority.Critical);
// //Real world Use case
// enum UserRole {
//   Admin = "ADMIN",
//   Tester = "TESTER",
//   Developer = "DEVELOPER",
//   Guest = "GUEST",
// }

// enum BrowserType {
//   Chrome = "chromium",
//   Firefox = "firefox",
//   Safari = "webkit",
// }
// interface TestConfig {
//   browser: BrowserType;
//   userRole: UserRole;
// }
// const config: TestConfig = {
//   browser: BrowserType.Chrome,
//   userRole: UserRole.Tester,
// };
