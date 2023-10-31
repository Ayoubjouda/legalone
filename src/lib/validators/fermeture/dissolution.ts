import { z } from 'zod';

const AssociateSchema = z.object({
  associateSex: z.string(),
  associateFirstName: z.string(),
  associateLastName: z.string(),
});
const CompanyAssociateSchema = z.object({
  companyNameAssociate: z.string(),
  companyAssociateType: z.number(),
});
export const DissolutionFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyType: z
    .number()
    .min(1, { message: 'Doit contenir au moins 2 caractères' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  rcs: z.string().min(2, { message: 'Doit contenir au moins 2 caractères' }),
  lastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  firstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),

  phone: z.string().min(2, { message: 'Doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Doit être une adresse e-mail valide' }),
  liquidatorType: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),

  companyNameLiquidator: z
    .string()
    .min(1, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  companyLiquidatorType: z
    .number()
    .min(1, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  LiquidatorfirstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  LiquidatorlastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  Liquidatorsex: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  associates: z.array(
    z.object({
      type: z.number(),
      dto: z.union([AssociateSchema, CompanyAssociateSchema]),
    })
  ),
});

export type DissolutionFormSchemaType = z.infer<typeof DissolutionFormSchema>;
