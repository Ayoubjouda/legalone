import { z } from 'zod';

export const EntrepriseFormSchema = z.object({
  companyType: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
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
  sex: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  companyName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  email: z.string().email({ message: 'Doit être une adresse e-mail valide' }),
  phone: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  raisonSocial: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  accountingExpert: z.boolean().transform((val) => Boolean(val)),
  managerType: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  associer: z
    .string()
    .min(1, { message: 'Doit contenir au moins 2 caractères' }),
  nonAssociateManager: z.boolean().transform((val) => Boolean(val)),
  legalState: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  shareCapital: z.coerce
    .number()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  headquarter: z.coerce
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  Rcs: z
    .string()
    .min(1, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
});
export type EntrepriseSchemaType = z.infer<typeof EntrepriseFormSchema>;
