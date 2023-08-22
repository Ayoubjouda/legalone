import { z } from 'zod';

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2).max(15),
    lastName: z.string().min(2).max(15),
    email: z.string().email(),
    birthDate: z.date({
      required_error: 'A date of birth is required.',
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
  firstName: z.string().min(2).max(15),
  lastName: z.string().min(2).max(15),
  email: z.string().email(),
  phoneNumber: z.string(),
  companyName: z.string().min(2).max(15),
  creationDelay: z.string().min(2),
  domaine: z.string().min(2),
  president: z.string().min(2),
  associerNumber: z.number().min(2),
  fondateur: z.string().min(2),
  capital: z.number().min(2),
  siegeSocial: z.string().min(2),
});
export type SaasSchemaType = z.infer<typeof saasFormSchema>;

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type LoginSchemaType = z.infer<typeof loginSchemaValidator>;
