export type User = {
  role?: string;
  id: number;
  name: string;
  firstname: string;
  email: string;
  password?: string;
  birthday: Date;
  phonenumber: number;
};

export type userParams = {
  userId: string;
  token: string;
};
