//closures - a cousere when function remebers and can access variables from this outer scope, event after the outer  function has finished executing
// function makeGreeting(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }
// const sayHello = makeGreeting("Hello");
// const sayHii = makeGreeting("Hii");

// sayHello("Dia");
// sayHii("Kpie");

// function createBankAccount(initalBalance) {
//   let balance = initalBalance;
//   return {
//     deposit: function (amount) {
//       balance += amount;
//       console.log(`Deposited amount:${amount} and balance: ${balance}`);
//     },
//     withDraw: function (amount) {
//       if (amount > balance) {
//         console.log("Insufficiante funds");
//       } else {
//         balance -= amount;
//         console.log(`Withdraw amount:${amount} and New balance:${balance}`);
//       }
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }
// const myAccount = createBankAccount(15000);
// myAccount.deposit(5000);
// myAccount.withDraw(7000);
// console.log(myAccount.getBalance());

// console.log(myAccount.balance); //undefine it's private
// function createTestReporter() {
//   let passedTests = 0;
//   let failedTests = 0;
//   let testResults = [];
//   return {
//     recordPass: function (testName) {
//       passedTests++;
//       testResults.push({ name: testName, status: "Pass" });
//       console.log(`${testName} - Passed`);
//     },
//     recordFail: function (testName, error) {
//       failedTests++;
//       testResults.push({ name: testName, status: "Fail", error });
//       console.log(`${testName} - Failed: ${error}`);
//     },
//     getSummary: function () {
//       return {
//         total: passedTests + failedTests,
//         passed: passedTests,
//         failed: failedTests,
//         results: testResults,
//       };
//     },
//   };
// }
// //usage in tests
// const reporter = createTestReporter();
// reporter.recordPass("Login tests");
// reporter.recordFail("Dashboard tests", "admin issue");
// reporter.recordPass("Payemnt test");

// console.log(reporter.getSummary());

for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
