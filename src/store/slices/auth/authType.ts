import { UserType } from "../../../type";


export interface AuthState {
  user: UserType | null;
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface SigninType {
  phone: string;
  password: string;
}

export interface SignupType {
  username: string;
  email: string;
  password: string;
}