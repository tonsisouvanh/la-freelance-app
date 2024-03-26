export interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: string | null;
  user: string | null;
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
