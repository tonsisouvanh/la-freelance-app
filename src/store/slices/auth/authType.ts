import { UserType } from "../../../type";

export interface AuthState {
  user: UserType | null;
  token: string | null;
  isLoggedIn: boolean;
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
}

export interface SigninType {
  phone: string;
  password: string;
}

export interface SignupType {
  phone?: string;
  otp?: string;
  fname?: string;
  lname?: string;
  email?: string;
  dob?: Date | null;
  password?: string;
  confirmPassword?: string;
  profile?: File | null;
}
