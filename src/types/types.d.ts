interface currentUser {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  role: string;
  email: string;
}
interface Activity {
  id: number;
  name: string;
  iconLink: string;
}

interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}
interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

interface Package {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  packageStripeId: string;
  elements: packElement[];
  extra: packElement[] | null;
  packageDetails: {
    text: string;
    detail: string;
  }[];
  administrativeFees: {
    perks: {
      text: string;
      detail: string;
    }[];
    price: number;
    description: string;
    isObligatory: boolean;
  };
}
interface packElement {
  text: string;
  isBold?: boolean;
}
interface HeadQuarter {
  id: number;
  headquarter: string;
  iconLink: string;
}
interface ManagerType {
  id: number;
  type: string;
  iconLink: string;
}
interface CompanyType {
  id: number;
  name: string;
  description: string;
  iconLink: string;
}
type CompanyEnum =
  | 'SAS'
  | 'SARL'
  | 'EURL'
  | 'SCI'
  | 'AUTOENTREPRISE'
  | 'ASSOCIATION'
  | 'SASU'
  | 'DOMICILIATION';

interface handlePaymentResponse {
  payment: {
    stripeIntent: {
      sessionUrl: string;
      sessionId: string;
    };
    savedPayment: {
      currency: string;
      description: string;
      order: number;
      packageStripeId: string;
      id: number;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  createdAt: string;
  status: UserStatus;
  role: string;
  email: string;
}

enum UserStatus {
  BANNED = 'BANNED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}

enum Status {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

type Payment = {
  id: number;
  currency: string;
  description: string;
  createdAt: string; // You might want to use a Date type here if you parse the string to a Date object
  updatedAt: string;
  amount: number; // You might want to use a Date type here if you parse the string to a Date object
  status: Status; // Status can be null or a string
  order: Order;
  user: User;
};
interface RecentSallesResponse {
  paymentId: number;
  paymentAmount: number | null;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
}

interface Files {
  identityDocument: string | null;
  nonConvictionDeclaration: string | null;
  filiationAttestation: string | null;
  managerAppointmentAct: string | null;
  commercialLease: string | null;
  proofOfAddress: string | null;
  companyDomiciliationContract: string | null;
  rentalManagementContract: string | null;
  kbis: string | null;
}
