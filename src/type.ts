export interface CategoryType {
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