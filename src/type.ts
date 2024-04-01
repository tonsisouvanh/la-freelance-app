export interface CategoryType {
  id: number;
  name: string;
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