import {
  EntrepriseSchemaType,
  AutoEntreSchemaType,
  MicroEntreSchemaType,
  SciSchemaType,
  AssociationSchemaType,
} from '@/lib/validators/formValidators';

type Order = {
  id: number;
  description: string;
  formality: number;
  package: number;
  status: OrderStatus;
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
