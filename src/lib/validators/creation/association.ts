import { z } from 'zod';

export const AssociationFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
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
  sex: z
    .string()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  tresorierFirstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  tresorierLastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  tresorierSex: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  desktopComposition: z
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
  descriptionAssociation: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),

  managerType: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
});
export type AssociationSchemaType = z.infer<typeof AssociationFormSchema>;
