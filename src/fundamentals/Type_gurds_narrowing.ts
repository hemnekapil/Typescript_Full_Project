//Type guards & Narrowing
// function processValue(value: string | number) {
//   if (typeof value === "string") {
//     //Typescript knows value is string here
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// //instanceof Types Guards
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Product {
//   price: number;
//   constructor(price: number) {
//     this.price = price;
//   }
// }
// function process(item: User | Product) {
//   if (item instanceof User) {
//     console.log(item.name);
//   } else {
//     console.log(item.price);
//   }
// }
// process(new User("kpie"));

//custome types gurds
interface User {
  type: "user";
  username: string;
}
interface Admin {
  type: "admin";
  username: string;
  permissions: string[];
}
//custome type guard function
function isAdmin(user: User | Admin): user is Admin {
  return user.type === "admin";
}
function processUser(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(user.permissions);
  } else {
    console.log(user.username);
  }
}

processUser({ type: "user", username: "kpie" });
