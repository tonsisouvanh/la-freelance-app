interface User {
  id:            number;
  firstname:     string;
  lastname:      string;
  phone:         string;
  role:          string;
  last_login:    Date;
  token:         string;
  access_token:  string;
  refresh_token: string;
}


export interface AuthState {
  user: User | null;
  token: string | null;
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
