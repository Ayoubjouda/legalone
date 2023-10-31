import { z } from 'zod';

export const SciFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  nonAssociateManager: z.boolean(),
  accountingExpert: z.boolean(),

  shareCapital: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  associer: z
    .string()
    .min(1, { message: 'Doit contenir au moins 2 caractères' }),
  headquarter: z
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

  sciActivityField: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  taxRegime: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),

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
export type SciSchemaType = z.infer<typeof SciFormSchema>;
