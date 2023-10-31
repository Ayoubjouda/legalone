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

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export type LoginSchemaType = z.infer<typeof loginSchemaValidator>;
