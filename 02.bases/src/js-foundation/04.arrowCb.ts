interface IUsers {
  id: number;
  name: string;
}

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

interface getUserByIdProps {
  id: number;
  callbackFn: (err?: string, user?: IUsers) => void;
}

export const getUserById = ({ id, callbackFn }: getUserByIdProps) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  // Convertimos a ternario
  user ? callbackFn(undefined, user) : callbackFn(`User with id ${id} not found`);
};

module.exports = {
  getUserById,
};
