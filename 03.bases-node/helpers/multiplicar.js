const fs = require('fs');

const crearArchivo = async ( base = 5, list = false ) => {

  try {

    let salida = '';

    for (let i = 1; i<=10; i++){
      salida += `${base} x ${i} = ${base * i}\n`
    }

    if (list) {
      console.log(`-----------------`)
      console.log(`tabla del ${base}`)
      console.log(`-----------------`)
      console.log(salida)
    }

    fs.writeFileSync(`tabla-del-${base}.txt`, salida)

    return `tabla-del-${base}.txt creada`
  } catch ( err ) {
    throw err;
  }
}

module.exports= {
  crearArchivo: crearArchivo
}