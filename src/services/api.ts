import { User } from "../models/user";

export class ApiService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User ${user.name} added successfully!`);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
