import { z } from 'zod';

export const AutoEntreFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  exAutoEntrepreneur: z.coerce.boolean(),
  artisan: z.coerce.boolean(),
  headquarter: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  activity: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  firstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  lastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  sexManager: z
    .string()
    .min(1, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  adresse: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  codePostal: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  ville: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  email: z.string().email({ message: 'Doit être une adresse e-mail valide' }),
  phone: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  companyType: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),

  managerType: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
});
export type AutoEntreSchemaType = z.infer<typeof AutoEntreFormSchema>;
