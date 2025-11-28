//class
class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getDetails() {
        return `Hello${this.name}`
    }
}

const p1 = new Person2("John");
console.log(p1.getDetails());