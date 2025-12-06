// // class Vehicle {
// //   brand: string;
// //   constructor(brand: string) {
// //     this.brand = brand;
// //   }
// //   start() {
// //     console.log(`${this.brand} is starting...`);
// //   }
// // }
// // const v1 = new Vehicle("Generic");
// // v1.start();
// class Vehicle {
//   brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   start() {
//     console.log(`${this.brand} is starting...`);
//   }
// }
// const v1 = new Vehicle("Generic");
// v1.start();
// class Car extends Vehicle {
//   model: string;
//   constructor(brand: string, model: string) {
//     super(brand);
//     this.model = model;
//   }
//   //explicite override
//   override start(): void {
//     super.start(); //call parent method
//     console.log(`${this.brand} ${this.model} is ready to go`);
//   }
// }
// const myCar = new Car("Toyota", "Corolla");
// myCar.start();
