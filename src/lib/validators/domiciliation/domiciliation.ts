import { z } from 'zod';

export const DomiciliationFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  lastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  phone: z.string().min(2, { message: 'Doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Doit être une adresse e-mail valide' }),
  companyName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  companyType: z
    .number()
    .min(1, { message: 'Doit contenir au moins 2 caractères' }),
  subscription: z
    .string()
    .min(1, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
});
export type DomiciliationFormSchemaType = z.infer<
  typeof DomiciliationFormSchema
>;
