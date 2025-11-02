// // interface User {
// //   id: number;
// //   name: string;
// //   email: string;
// //   age: number;
// // }

// // function updateUser(id:number, updates:User){

// // }

// // updateUser(1,{id:1,name:"kapil",email:"kpie753@test.com",age:32});

// //with partial -all properties bceome optional
// // function updateUser(id: number, updates: Partial<User>) {}
// // updateUser(1, { name: "kpie" });

// //Required <T></T> make all properties required

// interface Config {
//   url?: string;
//   timeout?: number;
//   retries?: number;
// }
// //make all properties required
// type StrictConfig = Required<Config>;
// // const config3: StrictConfig = {
// //   url: "https://test.com",
// //   timeout: 5000,
// //   retries: 3,
// //   //All three required now
// // };
// //Pick t,k select specific properties
// // interface User {
// //   id: number;
// //   name: string;
// //   email: string;
// //   age: number;
// //   password: string;
// // }
// //Pick only id and name
// type UserPreview = Pick<User, "id" | "name">;
// const preview: UserPreview = {
//   id: 1,
//   name: "Alice",
//   //Only these two properties allowed
// };
// //Great for creating lightweight versions
// type LoginCredentials = Pick<User, "email" | "password">;

// //Omit <T,K>- exclude specific properties
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   createdAt: Date;
// }
// type PublicUser = Omit<User, "password">; //omit password from here
// const publicUser: PublicUser = {
//   id: 1,
//   name: "Kpie",
//   email: "kpie753@test.com",
//   createdAt: new Date(),
// };
// //Record <K,T> create object with specific keys and values
// type UserMap = Record<number, string>;
// const users1: UserMap = {
//   1: "Alice",
//   2: "Bob",
//   3: "Charlie",
// };
// //Map status codes to messages
// type StatusMessages = Record<"success" | "error" | "pending", string>;

// const messages: StatusMessages = {
//   success: "Operation completed",
//   error: "Oparation failed",
//   pending: "processing..",
// };
// type TestUserData = Record<string, { username: string; password: string }>;

// const testData: TestUserData = {
//   admin: { username: "admin", password: "Admin123" },
//   user: { username: "user", password: "User123" },
//   guest: { username: "guest", password: "Guest123" },
// };

// //make all properties readonly
// interface Config {
//   baseUrl: string;
//   timeout1: number;
// }
// type ImmutableConfig = Readonly<Config>;

// const config1: ImmutableConfig = {
//   baseUrl: "https://www.ks.com",
//   timeout1: 5000,
// };

// //config1.baseUrl = "ks.com";

// function getUser() {
//   return {
//     id: 1,
//     name: "Kpie",
//     email: "Kpie753@test.com",
//   };
// }
// //Extratc return type
// type User1 = ReturnType<typeof getUser>;

// const user1: User1 = {
//   id: 2,
//   name: "Bob",
//   email: "bob@test.com",
// };
