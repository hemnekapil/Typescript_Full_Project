//classes with typescript
//Basic class with types
class User {
  //Properties with types
  id: number;
  name: string;
  email: string;
  //contructor
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  //method with return type
  getDisplayName(): string {
    return `${this.name} (${this.email})`;
  }
}
const user = new User(1, "Kpie", "kpie753@test.com");
console.log(user.getDisplayName());
