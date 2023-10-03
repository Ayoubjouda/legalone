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

export const saasFormSchema = z.object({
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
  sexManager: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' })
    .optional(),
  companyName: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .max(15, { message: 'Doit contenir au maximum 15 caractères' }),
  companyType: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  SocialNumber: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' })
    .optional(),

  creationDelay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  activityId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  accountingExpert: z.boolean(),
  managerTypeId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  associer: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
  nonAssociateManager: z
    .string()
    .min(2, { message: 'Doit contenir au moins 2 caractères' }),
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

  pack: z.custom<Package>(),
});

export const AutoEntreFormSchema = z.object({
  creationDelay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  exAutoEntrepreneur: z.boolean(),
  artisan: z.boolean(),
  headquarterId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  activityId: z
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

  managerTypeId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),

  pack: z.custom<Package>(),
});
export const AssociationFormSchema = z.object({
  creationDelay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  artisan: z.boolean(),
  headquarterId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  activityId: z
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

  managerTypeId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),

  pack: z.custom<Package>(),
});
export const SciFormSchema = z.object({
  creationDelay: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  companyName: z
    .string()
    .min(2, { message: 'Vous devez sélectionner au moins une option' }),
  artisan: z.boolean(),
  headquarterId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),
  activityId: z
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

  managerTypeId: z
    .number()
    .min(1, { message: 'Vous devez sélectionner au moins une option' }),

  pack: z.custom<Package>(),
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

export type AutoEntreSchemaType = z.infer<typeof AutoEntreFormSchema>;

export type UpdateFormSchemaType = z.infer<typeof UpdateFormSchema>;

export type SciSchemaType = z.infer<typeof SciFormSchema>;

export type AssociationSchemaType = z.infer<typeof AssociationFormSchema>;

export type SaasSchemaType = z.infer<typeof saasFormSchema>;

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type LoginSchemaType = z.infer<typeof loginSchemaValidator>;
