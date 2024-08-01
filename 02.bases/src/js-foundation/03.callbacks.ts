interface IUser {
  id: number;
  name: string;
}

const users: IUser[] = [
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
  callbackFn: (err?: string, user?: IUser) => void;
}

export const getUserById = ({ id, callbackFn }: getUserByIdProps) => {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callbackFn(`USUARIO no encontrado ${id}`);
  }

  return callbackFn(undefined, user);
};
