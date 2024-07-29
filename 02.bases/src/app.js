// Sintaxis tradicional de importación de modulos en Node.js
// const { emailTemplate } = require('./js-foundation/01.template')
//console.log(emailTemplate);

//require('./js-foundation/02.destructuring')

// ! 03. Callback functions
// const { getUserById } = require('./js-foundation/03.callbacks')

// const userToFind = 4;

// getUserById(userToFind, function (error, user) {
//   if (error) {
//     throw new Error( error );
//   }

//   console.log(user);
// });

// ! 04. Arrow Functions
// const { getUserById } = require('./js-foundation/04.arrowCb')

// const userToFind = 2;

// getUserById(userToFind, (error, user) => {
//   if (error) {
//     throw new Error( error );
//   }

//   console.log(user);
// });

// ! 05. Factory Pattern
// const { getUUID, getAge } = require("./plugins");
// const { buildMakePerson } = require("./js-foundation/05.factory");

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: "Jhon", birthdate: "1990-01-01" };

// const john = makePerson(obj);

// console.table(john)

// ! 06. Promises
// const getPokemonById = require('./js-foundation/06.promises')

// getPokemonById(4)
//   .then((pokemon) => console.log(pokemon))
//   .catch((err) => console.log({err}))
//   .finally(() => console.log('Pokemon fetched!'));

// ! 07. Async/Await
// const getPokemonById = require('./js-foundation/07.asyncAwait')

// getPokemonById(4)
//   .then((pokemon) => console.log(pokemon))
//   .catch((err) => console.log({err}))
//   .finally(() => console.log('Pokemon fetched!'));

// ! 08. Patron adapter con axios
const getPokemonById = require('./js-foundation/08.adapterAxios')

getPokemonById(4)
  .then((pokemon) => console.log(pokemon))
  .catch((err) => console.log({err}))
  .finally(() => console.log('Pokemon fetched!'));