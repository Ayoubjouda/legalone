import {
  EntrepriseSchemaType,
  AutoEntreSchemaType,
} from '@/lib/validators/formValidators';
export type ConditionalSchemaType<T extends CompanyEnum> = T extends 'SAS'
  ? EntrepriseSchemaType
  : T extends 'AUTOENTREPRENEUR'
  ? AutoEntreSchemaType
  : EntrepriseSchemaType;
