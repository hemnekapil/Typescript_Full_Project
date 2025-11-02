//Async javascript
//Typing async operation
// function fetchUser(id:number):Promise<User>{
//     return fetch(`/api/users/${id}`).then(response=>response.json())
// }

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const user: User = await response.json();
  return user;
}
async function main() {
  const user = await getUser(1);
  console.log(user.name);
}

//Async Error handling with Types
interface Apiresponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

async function fetchData<T>(url: string): Promise<Apiresponse<T>> {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

//Usage
// interface User{
//     id:number;
//     name:string;
// }
async function getData() {
  const result = await fetchData<User>("/api/user");
  if (result.success && result.data) {
    console.log(result.data.name);
  }
}
getData();

export {};
interface BaseUser {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}
interface AdminUser extends BaseUser {
  permissions: string[];
  role: "admin";
}
interface RegularUser extends BaseUser {
  role: "user";
  lastLogin?: Date;
}
type AnyUser = AdminUser | RegularUser;

interface DataStore<T> {
  items: T;
  readonly count: number;
}

type Partialuser = Partial<BaseUser>;

type UserCredentials = Pick<BaseUser, "username" | "email">;

type PublicUser = Omit<BaseUser, "createdAt">;

type UserRoleMap = Record<number, string>;

function isAdminUser(user: AnyUser): user is AdminUser {
  return user.role === "admin";
}

function createUser<T extends BaseUser>(
  userData: Omit<T, "id" | "createdAt">
): T {
  return {
    ...userData,
    id: Math.floor(Math.random() * 1000),
    createdAt: new Date(),
  } as T;
}
function updateUser<T extends BaseUser>(user: T, updates: Partial<T>): T {
  return {
    ...user,
    ...updates,
  };
}
function getUserRole(user: AnyUser): string {
  if (isAdminUser(user)) {
    return "Administrator";
  }
  return "Regular User";
}
const adminUser = createUser<AdminUser>({
  username: "admin",
  email: "admin@test.com",
  permissions: ["read", "write", "delete"],
  role: "admin",
});
const regularUser = createUser<RegularUser>({
  username: "John",
  email: "john@test.com",
  role: "user",
});

const roleMap: UserRoleMap = {
  [adminUser.id]: "admin",
  [regularUser.id]: "user",
};

const updatedRegularUser = updateUser(regularUser, { lastLogin: new Date() });
console.log(getUserRole(adminUser));
console.log(getUserRole(updatedRegularUser));
const allUsers: AnyUser[] = [adminUser, updatedRegularUser];
for (const user of allUsers) {
  if (isAdminUser(user)) {
    console.log(
      `Admin: ${user.username} has ${user.permissions.length} permissions`
    );
  } else {
    console.log(`User:${user.username}`);
  }
}
