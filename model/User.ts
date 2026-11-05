import { AccessToken } from "./Security";

export type User = {
  id: number;
  username: string;
  email: string;
}

export type LoginRequest = {
  username: string;
  password: string;
}

export type LoginResponse = {
  success: boolean;
  user: User;
  token: AccessToken
}

export type LogoutResponse = {
  success: boolean
}

export const visitor: User = {
  id: 99,
  username: 'Visitor',
  email: "",
}
