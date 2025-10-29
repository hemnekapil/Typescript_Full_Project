import { createUser, User } from "./models/user";
import { ApiService } from "./services/api";

console.log("\n user managmant");

const user1: User = createUser("John Doe", "john@example.com");
const user2: User = createUser("Jane smith", "Jane@exmaple.com");

const apiService = new ApiService();
apiService.addUser(user1);
apiService.addUser(user2);

console.log("All users:", apiService.getAllUsers());
