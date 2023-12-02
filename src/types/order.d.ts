import {
  EntrepriseSchemaType,
  AutoEntreSchemaType,
  MicroEntreSchemaType,
  SciSchemaType,
  AssociationSchemaType,
} from '@/lib/validators/formValidators';
import { DomiciliationFormSchemaType } from '@/lib/validators/domiciliation/domiciliation';
import { DissolutionFormSchemaType } from '@/lib/validators/fermeture/dissolution';
import { UpdateFormSchema } from '@/lib/validators/modification/modification';
type Order = {
  id: number;
  description: string;
  formality: OrderFormality;
  package: number;
  status: OrderStatus;
  user: User;
};

type OrderFormality = {
  formalityId: number;
  dossier: string;
  status: string;
  formalityType: string;
  createdAt: string;
};

type OrderType = EntrepriseSchemaType | AutoEntreSchemaType;

type Formality =
  | EntrepriseSchemaType
  | AutoEntreSchemaType
  | MicroEntreSchemaType
  | SciSchemaType
  | AssociationSchemaType;

type OrderByIdResponse = {
  id: number;
  description: string;
  createdAt: string;
  status: string;
  package: Package;
};

type FormalitiesResponse = {
  formalities: Dossier[];
  totalPages: number;
};
interface Dossier {
  formalityId: number;
  data: DataType;
  status: string;
  type: string;
  formalityType: string;
  createdAt: string;
  user: User;
  order: Order;
}

type DataType =
  | EntrepriseSchemaType
  | AutoEntreSchemaType
  | MicroEntreSchemaType
  | SciSchemaType
  | AssociationSchemaType
  | DomiciliationFormSchemaType
  | DissolutionFormSchemaType
  | UpdateFormSchema;
