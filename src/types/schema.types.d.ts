import {
  SaasSchemaType,
  AutoEntreSchemaType,
} from '@/lib/validators/formValidators';
export type ConditionalSchemaType<T extends CompanyEnum> = T extends 'SAS'
  ? SaasSchemaType
  : T extends 'AUTOENTREPRENEUR'
  ? AutoEntreSchemaType
  : SaasSchemaType;
