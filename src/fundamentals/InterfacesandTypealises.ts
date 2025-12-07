interface UserInterFace {
  id: number;
  name: string;
  email: string;
}

type UserTypes = {
  id: number;
  name: string;
  email?: string;
};

const user11: UserInterFace = {
  id: 101,
  name: "Kpie",
  email: "Kpie753@gmail.com",
};

const user12: UserTypes = {
  id: 102,
  name: "rancho",
};

interface AdminInterface extends UserInterFace {
  role: string;
}
const admin1: AdminInterface = {
  id: 103,
  name: "Kapil",
  role: "Admin",
  email: "Kapil753@gmail.com",
};

type AdminType = UserTypes & {
  role: string;
};

const admin2: AdminType = {
  id: 104,
  name: "Baba",
  role: "Moderator",
};
//inetrface support declartion mergining(Can redeclare and merge)
interface UserInterFace {
  phone?: string;
}

user11.phone = "123456879";

console.log(user11);
console.log(user12);
console.log(admin1);
console.log(admin2);
