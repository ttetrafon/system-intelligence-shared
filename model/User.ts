export type User = {
  id: number;
  username: string;
  email: string;
};

export type DbUser = User & {
  password_hash: string;
}

export const visitor: User = {
  id: 99,
  username: 'Visitor',
  email: "",
};
