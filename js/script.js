const students = {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it',
};


// const mioname = students.name;
// const email = students.email;

const {name: mioname, email} = students;

console.log(mioname, email);
