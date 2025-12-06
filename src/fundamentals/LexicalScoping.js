//Lexical scoping - what is it
//lexical scoping means that function can access variable from its parent scope
//based on where the function is written in the code(not where its caleed from)
//Basci scoping
// const globalVar = "I'm global";
// function outerFunction() {
//   const outerVar = "I'm outer variable";
//   function innerFunction() {
//     const innerVar = "I'm inner variable";
//     console.log(innerVar);
//     console.log(outerVar);
//     console.log(globalVar);
//   }
//   innerFunction();
//   //console.log(innerVar);
// }
// outerFunction();
function createTestSuite(baseURL) {
  function loginTest() {
    const loginUrl = baseURL + "/login";
    console.log(`Testing: ${loginUrl}`);
  }
  function dashboardTest() {
    const dashBoardUrl = baseURL + "/dashboard";
    console.log(`Testing:${dashBoardUrl}`);
  }
  return { loginTest, dashboardTest };
}
const tests = createTestSuite("https://pravika.com");
tests.loginTest();
tests.dashboardTest();
