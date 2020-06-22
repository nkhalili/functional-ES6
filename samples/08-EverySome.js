const employees = [
  {
    name: 'Jane Doe',
    salary: 90000,
  },
  {
    name: 'Donald Jones',
    salary: 65000,
  },
  {
    name: 'Donna Appleseed',
    salary: 1500000,
  },
  {
    name: 'John Smith',
    salary: 250000,
  },
];

const makesMoreThanOneMillion = (employee) => employee.salary > 1000000;

const result = employees.every(makesMoreThanOneMillion);
console.log(result); // true, one item's salary is more than a million

const formValues = ['Navid', 'Bill', 'John', ''];

const isNotEmpty = (string) => !!string; // to convert string into booleans, cause in javascript empty string is a false value

const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled); // false we have one empty value
