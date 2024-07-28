// const { getUUID } = require("../plugins/get-id.plugin");
// const { getAge } = require("../plugins/get-age.plugin");
// const { getUUID, getAge } = require("../plugins");

const buildMakePerson = ({ getUUID, getAge}) => {

  return  ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };

}


// const obj = {
//   name: "Jhon",
//   birthdate: "1990-01-01",
// };

// const jhon = buildPerson(obj);

// console.log(jhon);

module.exports = {
  buildMakePerson,
}
