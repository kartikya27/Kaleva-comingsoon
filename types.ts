
export interface Product {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
}

export interface WaitlistEntry {
  email: string;
  name?: string;
  spiceInterest?: string;
}
