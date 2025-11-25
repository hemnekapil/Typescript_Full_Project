//interface
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genere?: string;
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genere: "self help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
const resultTitle = deepWork.printTitle("This is awesomebook");
console.log(resultTitle);
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 101,
  brand: "lenovo",
  ram: 16,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(20));

console.log(laptop);
interface Person {
  name: string;
  getDetails(): string;
}

interface Person {
  age: number;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name:${this.name}, Age:${this.age}`;
  },
};

interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: "jane",
  employeeId: 123,
  age: 30,
  getDetails() {
    return `Name:${this.name}, Age:${this.age}, Employeed ID:${this.employeeId}`;
  },
};

console.log(employee.getDetails());

interface Manager1 extends Person, DogOwner {
  managePeople(): void;
}

const manager1: Manager1 = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name:${this.name}, Age:${this.age}`;
  },
  getDogDetails() {
    return `Name:${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people");
  },
};
manager1.managePeople();
