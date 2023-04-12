function myScope() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const persons = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector(".name");
    const lastname = form.querySelector(".lastname");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    persons.push({
      name: name.value,
      lastname: lastname.value,
      peso: peso.value,
      altura: altura.value,
    });
  });
}

myScope();
