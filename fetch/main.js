const userArray = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

const eiscueArray = fetch('https://pokeapi.co/api/v2/pokemon/875')
  .then(response => response.json())
  .then(x => console.log(x));

console.log(userArray);
console.log(eiscueArray);
