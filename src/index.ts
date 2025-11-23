type Employee = { id: number; name: string; department: string };

type Manager = { id: number; name: string; employees: Employee[] };

const alice: Employee = {
  id: 1,
  name: "alice",
  department: "IT",
};
const kpie: Employee = {
  id: 2,
  name: "kpie",
  department: "Engineering",
};

const rancho: Manager = {
  id: 101,
  name: "rancho",
  employees: [alice, kpie],
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}
printStaffDetails(kpie);
