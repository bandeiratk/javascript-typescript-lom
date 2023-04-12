// const person01 = {
// Atributos do objeto
//   name: "Bandeira",
//   lastName: "Magalhães",
//   age: 21,
// };

// console.log(person01);

function createPerson(name, lastName, age) {
  return {
    name: name,
    lastName: lastName,
    age: age,
  };
}

const person01 = createPerson("Bandeira", "Magalhães", 21);
const person02 = createPerson("Maria", "Silva", 20);

const persons = [person01, person02]; // Passando elemento por cópia

persons.push(createPerson("João", "Oliveira", 30));

console.log(persons);

// persons[1] = createPerson("Jose", "Magalhães", 21);

person02.name = "Jose";

console.log(persons);
