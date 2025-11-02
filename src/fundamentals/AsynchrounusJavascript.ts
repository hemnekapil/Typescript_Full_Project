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
