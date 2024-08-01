//console.log(process.env)

const { OS, windir, npm_lifecycle_script} = process.env

console.table({ OS, windir, npm_lifecycle_script})


const characters = ["Flash", "Superman", "Batman", "Wonder Woman"];

const [, , batman] = characters;

// console.log(batman);