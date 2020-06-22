const person = {
  name: 'Navid',
  age: 25,
};

const otherFields = {
  name: 'John', // this will override the person's name value
  tel: '00161300000',
};

const result = {
  ...person,
  ...otherFields,
};

console.log(result);
