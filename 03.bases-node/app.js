const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    desc: 'Crea un archivo con la tabla del numero solicitado'
  })
  .check( (argv, options) => {
    if ( isNaN(argv.b) ){
      throw 'La base tiene que ser un numero'
    }
    return true;
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: true,
    default: false,
    desc: 'Muestra por consola un log de la tabla'
  })
  .argv;

console.clear();

console.log( argv );

console.log('Base: yargs', argv.base);

//const base = 2;

crearArchivo( argv.b, argv.l )
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch( err => console.log(err) );