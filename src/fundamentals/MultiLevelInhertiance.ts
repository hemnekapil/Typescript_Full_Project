// class Vehicle {
//   brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   start() {
//     console.log(`${this.brand} is starting...`);
//   }
// }
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

// class ElectricalCar extends Car {
//   batteryLevel: number;
//   constructor(brand: string, model: string, batteryLevel: number) {
//     super(brand, model);
//     this.batteryLevel = batteryLevel;
//   }
//   override start(): void {
//     super.start();
//     console.log(`Battery at ${this.batteryLevel}%. Ready to drive silently`);
//   }
// }
// //Test
// const myCar = new ElectricalCar("Tesla", "Model 3", 82);
// myCar.start();
