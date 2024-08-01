import { getUUID } from '../plugins/get-id.plugin';
interface BuildMakePersonProps {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonProps {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge}: BuildMakePersonProps) => {

  return  ({ name, birthdate }: PersonProps) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };

}
