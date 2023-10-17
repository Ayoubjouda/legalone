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
  | 'AUTOENTREPRENEUR'
  | 'ASSOCIATION'
  | 'SASU'
  | 'DOMICILIATION';
