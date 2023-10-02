import {
  SaasSchemaType,
  AutoEntreSchemaType,
} from '@/lib/validators/formValidators';
export type ConditionalSchemaType<T extends CompanyType> = T extends 'SAS'
  ? SaasSchemaType
  : T extends 'AUTOENTREPRENEUR'
  ? AutoEntreSchemaType
  : SaasSchemaType;
