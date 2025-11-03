// class BankAccount {
//   public accountNumber: string;
//   private balance: number;
//   protected owner: string;

//   constructor(accountNumber: string, owner: string) {
//     this.accountNumber = accountNumber;
//     this.balance = 0;
//     this.owner = owner;
//   }
//   public deposit(amount: number): void {
//     this.balance += amount;
//   }
//   public getBalance(): number {
//     return this.balance;
//   }
// }

// // const account = new BankAccount("12345", "Kpie");
// // account.deposit(500);
// // console.log(account.getBalance());
// // //console.log(account.balance);
// // //shortand construcotr parameter properties
// // // class User1{
// // //   id:number;
// // //   name:string;
// // //   constructor(id:number, name:string){
// // //     this.id = id;
// // //     this.name = name;
// // //   }
// // // }
// // //short way
// // class User1 {
// //   constructor(public id: number, public name: string) {}
// // }
// // const user1 = new User1(123, "kpie");

// // // console.log(user1.id, user1.name);

// // //Inheritance
// // class Animal {
// //   constructor(public name: string) {}
// //   move(distance: number): void {
// //     console.log(`${this.name} moved ${distance}m`);
// //   }
// // }
// // class Dog extends Animal {
// //   bark(): void {
// //     console.log("Woof");
// //   }
// // }
// // const dog = new Dog("Buddy");
// // dog.move(10);
// // dog.bark();

// //Abstratc claases
// abstract class BasePage {
//   constructor(protected url: string) {}
//   abstract navigate(): Promise<void>; //must be implemented by subsclass
//   async getTitle(): Promise<string> {
//     return document.title;
//   }
// }
// class LoginPage extends BasePage {
//   constructor() {
//     super("/login");
//   }
//   async navigate(): Promise<void> {
//     // await page.goto(this.url)
//   }
// }
