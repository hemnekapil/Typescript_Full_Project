// abstract class Vehicle {
//   constructor(protected brand: string) {}
//   showBrand(): void {
//     console.log(`Brand:${this.brand}`);
//   }
//   abstract start(): void;
// }
// //car subclass uses that astarct base
// class Car extends Vehicle {
//   constructor(brand: string, public model: string) {
//     super(brand);
//   }
//   override start(): void {
//     console.log(`${this.brand} ${this.model} is starting...`);
//   }
// }

// const car = new Car("Toyota", "Corolla");
// car.showBrand();
// car.start();

// class Bike extends Vehicle {
//   constructor(brand: string, public cc: number) {
//     super(brand);
//   }
//   override start(): void {
//     console.log(`${this.brand} bike with ${this.cc}cc is starting`);
//   }
// }
// const bike = new Bike("Yamaha", 150);
// bike.showBrand();
// bike.start();
// //Polymorship helper
// function runStartup(v: Vehicle) {
//   v.showBrand();
//   v.start();
// }
// runStartup(car);
// runStartup(bike);
interface Drivable {
  start(): void;
  stop(): void;
}

class Car implements Drivable {
  constructor(public brand: string, public model: string) {}
  start(): void {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} has stopped..`);
  }
}

class Bike implements Drivable {
  constructor(public brand: string, public cc: number) {}
  start(): void {
    console.log(`${this.brand} bike with ${this.cc} is starting...`);
  }
  stop(): void {
    console.log(`${this.brand} bike with ${this.cc}cc has stopped..`);
  }
}
const car = new Car("Tata", "Range Rover");
car.start();
car.stop();
const bike = new Bike("BMW", 576);
bike.start();
bike.stop();

function testDrive(v: Drivable): void {
  v.start();
  v.stop();
}

testDrive(car);
testDrive(bike);
