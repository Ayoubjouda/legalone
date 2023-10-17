import {
  EntrepriseSchemaType,
  AutoEntreSchemaType,
  SciSchemaType,
  AssociationSchemaType,
} from '@/lib/validators/formValidators';
export type ConditionalSchemaType<T extends CompanyEnum> = T extends 'SCI'
  ? SciSchemaType
  : T extends 'AUTOENTREPRENEUR'
  ? AutoEntreSchemaType
  : T extends 'ASSOCIATION'
  ? AssociationSchemaType
  : EntrepriseSchemaType;
