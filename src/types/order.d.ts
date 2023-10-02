import {
  SaasSchemaType,
  AutoEntreSchemaType,
} from '@/lib/validators/formValidators';
type Order = {
  orderId: number;
};

type OrderType =
  | ({
      orderId: number;
    } & SaasSchemaType)
  | ({
      orderId: number;
    } & AutoEntreSchemaType);
