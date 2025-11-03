enum BrowserType {
  Chrome = "chromium",
  Firefox = "firefox",
  Safari = "webkit",
}
enum TestStatus {
  Passed = "PASSED",
  Failed = "FAILED",
  Skipped = "SKIPPED",
}
interface PageConfig {
  url: string;
  timeout: number;
  browser: BrowserType;
}

abstract class BasePage {
  protected url: string;
  protected timeout: number;
  constructor(url: string, timeout: number) {
    this.url = url;
    this.timeout = timeout;
  }
  abstract navigate(): Promise<void>;
  getUrl(): string {
    return this.url;
  }
  async waitFor(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

class LoginPage extends BasePage {
  private usernameSelector: string = "#username";
  private passwordSelector: string = "#password";
  private submitSelector: string = "#submit";
  constructor() {
    super("/login", 5000);
  }
  async navigate(): Promise<void> {
    console.log(`Navigating to ${this.url}`);
    await this.waitFor(1000);
    console.log("Login page loaded");
  }
  async login(username: string, password: string): Promise<TestStatus> {
    console.log(`Filling username: ${username}`);
    console.log("Filling password:****");
    console.log("Clicking submit button");
    await this.waitFor(500);
    if (username === "admin" && password === "Admin123") {
      return TestStatus.Passed;
    } else {
      return TestStatus.Failed;
    }
  }
}

class Dashboardpage extends BasePage {
  private welcomeMessageSelector: string;
  constructor(username: string) {
    super("/dashboard", 3000);
    this.welcomeMessageSelector = ".welcome-message";
  }
  async navigate(): Promise<void> {
    console.log("navigating to dashboard");
    await this.waitFor(800);
    console.log("Dashboard loaded");
  }
  async getWelcomeMessage(username: string): Promise<string> {
    await this.waitFor(300);
    return `Welcome, ${username}!`;
  }
}
class TestRunner {
  private currentPage: BasePage | null;
  constructor() {
    this.currentPage = null;
  }
  setPage(page: BasePage): void {
    this.currentPage = page;
  }
  async runTest(): Promise<TestStatus> {
    if (this.currentPage === null) {
      return TestStatus.Skipped;
    }
    await this.currentPage.navigate();
    console.log("Test completed successfully");
    return TestStatus.Passed;
  }
}
interface TestResult {
  pageName: string;
  status: TestStatus;
  duration: number;
  url: string;
}
class TestReporter {
  private results: TestResult[] = [];
  addResult(result: TestResult): void {
    this.results.push(result);
  }
  getPassedTests(): TestResult[] {
    return this.results.filter((result) => result.status === TestStatus.Passed);
  }
  printSummary(): void {
    const total = this.results.length;
    const passed = this.getPassedTests().length;
    const failed = total - passed;
    console.log(`Total tests: ${total}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
  }
}

async function simulateTest() {
  const loginPage = new LoginPage();
  const testRunner = new TestRunner();
  testRunner.setPage(loginPage);
  await testRunner.runTest();
  const loginResult = await loginPage.login("admin", "Admin123");
  console.log(loginResult);
}
async function runFullTest(): Promise<void> {
  const reporter = new TestReporter();
  const loginPage = new LoginPage();
  await loginPage.navigate();
  const loginResult = await loginPage.login("admin", "Admin123");
  reporter.addResult({
    pageName: "LoginPage",
    status: loginResult,
    duration: 2000,
    url: loginPage.getUrl(),
  });
  const dashboardPage = new Dashboardpage("admin");
  dashboardPage.navigate();
  dashboardPage.getWelcomeMessage("admin");
  reporter.addResult({
    pageName: "DashboardPage",
    status: TestStatus.Passed,
    duration: 1500,
    url: dashboardPage.getUrl(),
  });
  reporter.printSummary();
}

const config: PageConfig = {
  url: "https://test.com",
  timeout: 5000,
  browser: BrowserType.Chrome,
};
simulateTest();
runFullTest();
