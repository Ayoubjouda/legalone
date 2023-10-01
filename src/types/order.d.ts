import { SaasSchemaType } from '@/lib/validators/formValidators';
type Order = {
  orderId: number;
};

type OrderType =
  | ({
      orderId: number;
    } & SaasSchemaType)
  | ({
      orderId: number;
    } & SaasSchemaType);
