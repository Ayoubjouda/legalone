import { z } from 'zod';

export const UpdateFormSchema = z.object({
  modification: z
    .array(z.string())
    .refine((value) => value?.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  otherModification: z.string().optional(),
  declaration: z.coerce.boolean(),

  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),

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

  email: z.string().email({ message: 'Doit être une adresse e-mail valide' }),
  phone: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
});
export type UpdateFormSchemaType = z.infer<typeof UpdateFormSchema>;
