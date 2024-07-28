const users = [
  {
    id: 1,
    name: "Dorian",
  },
  {
    id: 2,
    name: "Laura",
  },
  {
    id: 3,
    name: "Carlos",
  },
];

function getUserById(id, callbackFn) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callbackFn(`USUARIO no encontrado ${id}`);
  }

  return callbackFn(null, user);
}

module.exports = {
  getUserById,
}