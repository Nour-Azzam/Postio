export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: Date;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: 'string' };
  address: {
    address: string;
    city: string;
    postalCode: number;
    state: string;
  };
}
