export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  rgpdConsent: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
