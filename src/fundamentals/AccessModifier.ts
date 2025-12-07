// class Vehicle {
//   protected brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   protected start() {
//     console.log(`${this.brand} is starting...`);
//   }
// }
// class Car extends Vehicle {
//   model: string;
//   constructor(brand: string, model: string) {
//     super(brand);
//     this.model = model;
//   }
//   public showDetails(): void {
//     console.log(`Brand: ${this.brand}, Model:${this.model}`);
//     this.start();
//   }
// }

// const car = new Car("Toyota", "Corolla");
// car.showDetails();
// //car.start();
// //
// class Vehicle {
//   private enginNo: string;
//   constructor(enginNo: string) {
//     this.enginNo = enginNo;
//   }
//   private showEnginNo(): void {
//     console.log(`Engine no: ${this.enginNo}`);
//   }
//   public displayInfo(): void {
//     this.showEnginNo();
//   }
// }
// class Car extends Vehicle {
//   constructor(engineNo: string) {
//     super(engineNo);
//   }
//   public tryAccess(): void {}
// }

// const c = new Car("ENG1245");
// c.displayInfo();
