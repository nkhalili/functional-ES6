const employees = [
  {
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
  },
  {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
  },
  {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
  },
  {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
  },
  {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
  },
  {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
  },
  {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
  },
];

// developers
const developers = employees.filter(
  (employee) => employee.jobTitle === 'developer'
);
const developersSalaries = developers.map((developer) => developer.salary);
const sumOfDevelopersSalaries = developersSalaries.reduce(
  (acc, x) => acc + x,
  0
);
const averageDeveloperSalary =
  sumOfDevelopersSalaries / developersSalaries.length;

console.log(averageDeveloperSalary);

// non-developers
const nonDevelopers = employees.filter(
  (employee) => employee.jobTitle !== 'developer'
);
const nonDevelopersSalaries = nonDevelopers.map(
  (nonDeveloper) => nonDeveloper.salary
);
const sumOfNonDevelopersSalaries = nonDevelopersSalaries.reduce(
  (acc, x) => acc + x,
  0
);
const averageNonDeveloperSalary =
  sumOfNonDevelopersSalaries / nonDevelopersSalaries.length;

console.log(averageNonDeveloperSalary);
