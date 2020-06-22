const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
    setAge: (newAge) => (_age = newAge),
  };
};

const me = Person({ name: 'Navid', age: 25, job: 'developer' });
console.log(me.getJob());
me._job = 'my new job'; // me._job is undefined
me.setJob('senior developer'); // access through closure
console.log(me.getJob());
