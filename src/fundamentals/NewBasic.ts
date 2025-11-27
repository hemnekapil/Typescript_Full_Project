let employee = {
    name: "kapil",
    age: 25,
    salary: 50000,
    job: "Enginner",
    getDetails: () => {
        return `${employee.name} is ${employee.job} and his salary is ${employee.salary}`
    }
}

employee.job = "Manager";

console.log(employee.getDetails());

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "kapil",
    age: 25,
    grade: "A",
    getSummary: () => {
        return `${student.name} is ${student.grade}`
    }
}

type Product1 = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
    getSummary: () => string
}

//then use it for multiple objects
let book1: Product1 = {
    name: "book1",
    price: 100,
    quantity: 2,
    getSummary: () => {
        return `${book1.name} is ${book1.price}`
    }
}

console.log(book1.getSummary());


class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old`
    }
}

let person1 = new Person("kapil", 25);
let person2 = new Person("Kpie", 26);
console.log(person1.getDetails());
console.log(person2.getDetails());