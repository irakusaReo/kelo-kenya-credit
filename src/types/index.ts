
// Product interfaces
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  discountPercentage: number | null;
  image: string;
  partnerId: string;
  partnerName: string;
  verticalId: string;
  interestRate: number;
  specifications: string[];
  rating?: number;
  stock?: number;
}

// Vendor interfaces
export interface Vendor {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  productsCount: number;
  rating: number;
  joinedDate: string;
}

// Payment related interfaces
export interface PaymentTerm {
  frequency: 'weekly' | 'biweekly' | 'monthly';
  percentage: number;
  totalPayments: number;
  interestRate: number;
  totalAmount: number;
  installmentAmount: number;
}

export interface CreditDocument {
  id: string;
  type: 'bank_statement' | 'mpesa_statement' | 'payslip' | 'id_document';
  fileUrl: string;
  uploadDate: string;
  status: 'pending' | 'verified' | 'rejected';
  score?: number;
}

export interface InstallmentPlan {
  productId: string;
  initialPayment: number;
  installmentAmount: number;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  totalPayments: number;
  nextPaymentDate: string;
  remainingPayments: number;
  status: 'active' | 'completed' | 'overdue';
}
