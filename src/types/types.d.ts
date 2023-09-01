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
}

interface Package {
  id: number;
  name: string;
  type: string;
  description: string;
  price: string;
  elements: packElement[];
  extras: packElement[] | null;
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
