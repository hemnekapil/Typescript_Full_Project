type User1 = { id: number; name: string; isActive: boolean };

const john: User1 = {
  id: 1,
  name: "John",
  isActive: true,
};

const bob: User1 = {
  id: 2,
  name: "Bob",
  isActive: false,
};

function createUser(user: User1): User1 {
  console.log(`Hello there ${user.name.toUpperCase()}!!!`);
  return user;
}
createUser(john);
