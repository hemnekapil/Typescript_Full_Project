// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserKeys = keyof User;
// //type-safty property getter
// interface TestUser {
//   id: number;
//   username: string;
//   email: string;
//   role: "admin" | "user";
// }
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// const user1: TestUser = {
//   id: 1,
//   username: "admin",
//   email: "admin@test.com",
//   role: "admin",
// };
// const username1 = getProperty(user1, "username");
// console.log(username1);
// const id = getProperty(user1, "id");
// console.log(id);
// //const invalid = getProperty(user1,"age");

//type safe test data filter
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}
//Filter array by any property
function filterBy<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
  return items.filter((item) => item[key] === value);
}
const products1: Product[] = [
  { id: 1, name: "Laptop", price: 10000, inStock: true },
  { id: 2, name: "Mobile", price: 1000, inStock: true },
  { id: 3, name: "Tablet", price: 1500, inStock: true },
];
//type safe filtering
const inStockProducts = filterBy(products1, "inStock", true);
const laptops = filterBy(products1, "name", "Laptop");
//const invalid = filterBy(products1,"color","red");
console.log(inStockProducts);
