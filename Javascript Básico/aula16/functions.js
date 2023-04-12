// {
//   // Criação d{e função
//   function sayMyName(name) {
//     // Entre os parênteses são chamados de parâmetros
//     return "Hello " + name + "!";
//     // Caso não tenha retorno dentro da função, o retorno será undefined
//   }

//   const greeting = sayMyName("Bandeira");

//   console.log(greeting);
// }

{
  function soma(a, b) {
    return a + b;
  }

  const resultado = soma();
  // console.log(resultado);
  // console.log(soma(2, 3));
  // console.log(soma(2, 45));

  // const raiz = function (number) {
  //   return number ** 0.5;
  // };

  const raiz = (number) => number ** 0.5;
  // const raiz = number => number ** 0.5;

  console.log(raiz(9));
}
