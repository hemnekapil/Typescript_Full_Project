export interface User {
  id: number;
  name: string;
  email: string;
}

export function createUser(name: string, email: string): User {
  return {
    id: Math.random(),
    name,
    email,
  };
}
