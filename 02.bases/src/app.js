// Sintaxis tradicional de importación de modulos en Node.js
// const { emailTemplate } = require('./js-foundation/01.template')
//console.log(emailTemplate);


//require('./js-foundation/02.destructuring')

// const { getUserById } = require('./js-foundation/03.callbacks')

// const userToFind = 4;

// getUserById(userToFind, function (error, user) {
//   if (error) {
//     throw new Error( error );
//   }

//   console.log(user);
// });

const { getUserById } = require('./js-foundation/04.arrowCb')

const userToFind = 2;

getUserById(userToFind, (error, user) => {
  if (error) {
    throw new Error( error );
  }

  console.log(user);
});