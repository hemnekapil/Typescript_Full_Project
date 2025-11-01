function getById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item) => item.id === id);
}

interface TestUser {
  id: number;
  username: string;
  email: string;
}
interface TestProduct {
  id: number;
  name: string;
  price: number;
}

const users: TestUser[] = [
  { id: 1, username: "kpie", email: "kpie753@test.com" },
  { id: 2, username: "rancho", email: "rancho753@test.com" },
  { id: 3, username: "kapil", email: "kapil753@test.com" },
];

const products: TestProduct[] = [
  { id: 101, name: "Laptop", price: 25000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "TV", price: 250000 },
];
const foundUser = getById(users, 2);
//console.log(foundUser);
const findProduct = getById(products, 103);
//console.log(findProduct);

interface TestResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
function createSuccessResponse<T>(data: T): TestResponse<T> {
  return { success: true, data: data };
}
function createErrorResponse<T>(errorMessage: string): TestResponse<T> {
  return { success: false, data: null as unknown as T, error: errorMessage };
}
const userReponse = createSuccessResponse<TestUser[]>(users);
console.log("Users Array response:", userReponse);
const errorReponse = createErrorResponse("User not found");
console.log(errorReponse);
//
function mapToIds<T extends { id: number }>(items: T[]): number[] {
  return items.map((item) => item.id);
}
const userDataWithId = mapToIds(users);
console.log(userDataWithId);
const productDataWithId = mapToIds(products);
console.log(productDataWithId);
