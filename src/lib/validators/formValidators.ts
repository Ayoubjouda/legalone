import { z } from 'zod';
import { isOlderThan18 } from '@/lib/utils';

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2).max(15),
    lastName: z.string().min(2).max(15),
    email: z.string().email(),
    birthDate: z
      .date({
        required_error: 'A date of birth is required.',
      })
      .refine((data) => isOlderThan18(data), {
        message: 'Age is below 18 years old',
      }),
    password: z
      .string()
      .regex(
        new RegExp('.*[A-Z].*'),
        'Must have at least one uppercase character'
      )
      .regex(
        new RegExp('.*[a-z].*'),
        'Must have at least one lowercase character'
      )
      .regex(new RegExp('.*\\d.*'), 'Must have at least one number')
      .regex(
        new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
        'Must have at least one special character'
      )
      .min(8, 'Must be at least 8 characters in length'),
    confirmPassword: z
      .string()
      .regex(
        new RegExp('.*[A-Z].*'),
        'Must have at least one uppercase character'
      )
      .regex(
        new RegExp('.*[a-z].*'),
        'Must have at least one lowercase character'
      )
      .regex(new RegExp('.*\\d.*'), 'Must have at least one number')
      .regex(
        new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
        'Must have at least one special character'
      )
      .min(8, 'Must be at least 8 characters in length'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
export const loginSchemaValidator = z.object({
  email: z.string().email({ message: 'Must have at Least 3 characters' }),
  password: z.string().min(3, 'Must be at least 3 characters in length'),
});

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
  sexManager: z
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
  SocialNumber: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  accountingExpert: z.coerce.boolean(),
  managerType: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  associer: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  nonAssociateManager: z.coerce.boolean(),
  legalState: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  shareCapital: z.coerce
    .number()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  headquarterId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  Rcs: z
    .string()
    .min(1, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
});

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
export const AssociationFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  headquarterId: z
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
  tresorierFirstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  tresorierLastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  tresorierSex: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  desktopComposition: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),

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

  pack: z.custom<Package>(),
});
export const SciFormSchema = z.object({
  delay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  artisan: z.boolean(),
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
  tresorierFirstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  tresorierLastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  tresorierSex: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' })
    .optional(),
  sciActivityField: z
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

export const UpdateFormSchema = z.object({
  modifications: z
    .array(z.string())
    .refine((value) => value?.some((item) => item), {
      message: 'You have to select at least one item.',
    }),

  creationDelay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  declaration: z.boolean(),

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

  companyType: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),

  pack: z.custom<Package>(),
});
const AssociateSchema = z.object({
  associateSex: z.string(),
  associateFirstName: z.string(),
  associateLastName: z.string(),
});
const CompanyAssociateSchema = z.object({
  companyNameAssociate: z.string(),
  companyAssociateType: z.string(),
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
  declaration: z.boolean(),
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
  civilite: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
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
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),
  LiquidatorfirstName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  LiquidatorlastName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  Liquidatorsex: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  associates: z.array(
    z.object({
      type: z.number(),
      dto: z.union([AssociateSchema, CompanyAssociateSchema]),
    })
  ),
});
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
  nomSociete: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),

  domiciliationAdress: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  subscription: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  expeditionFrequency: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
});

export type AutoEntreSchemaType = z.infer<typeof AutoEntreFormSchema>;
export type DomiciliationFormSchemaType = z.infer<
  typeof DomiciliationFormSchema
>;

export type DissolutionFormSchemaType = z.infer<typeof DissolutionFormSchema>;

export type UpdateFormSchemaType = z.infer<typeof UpdateFormSchema>;

export type SciSchemaType = z.infer<typeof SciFormSchema>;

export type AssociationSchemaType = z.infer<typeof AssociationFormSchema>;

export type EntrepriseSchemaType = z.infer<typeof EntrepriseFormSchema>;

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type LoginSchemaType = z.infer<typeof loginSchemaValidator>;
