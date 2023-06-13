export type User =
  | {
      role?: string;
      id: number;
      name: string;
      firstname: string;
      email: string;
      password?: string;
      birthday: Date;
      phonenumber: number;
      location: userAdress;
    }
  | undefined;

export type userAdress = {
  zipCode: number;
  adress: string;
  city: string;
};

export type userParams = {
  userId: string;
  token: string;
};

export interface userState {
  value: User ;
}