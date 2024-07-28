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

const getUserById = (id, callbackFn) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  // Convertimos a ternario
  user
    ? callbackFn(null, user)
    : callbackFn(`User with id ${id} not found`);
}

module.exports = {
  getUserById,
}