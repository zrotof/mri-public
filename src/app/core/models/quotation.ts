export interface QuotationRequest {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  renovationType: string;
  propertyType?: string;
  surfaceArea?: number;
  postalCode?: string;
  timeframe?: string;
  message?: string;
  rgpdConsent: boolean;
}

export interface QuotationResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}
