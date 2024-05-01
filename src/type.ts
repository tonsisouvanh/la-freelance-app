export interface CategoryType {
  id: number;
  name: string;
  icon?: any;
}

// Freelacner signup field
export interface FreelanceSignupFieldType {
  documentType: string;
  documentNumber: string;
  documentExpired: Date;
  imageFrontSide: string;
  imageBackSide: string;
  imageProof: string;
  bank: string;
  accountName: string;
  accountNumber: string;
  acceptTerms: boolean;
}


export interface AuthType {
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



export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profile: any;
  image: any;
  password: string;
  dob_at: string;
  role: string;
  last_login: string;
  last_token: string;
  is_enable: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}


export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: CategoryType;
}