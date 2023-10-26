import { z } from 'zod';

export const EditUserSchema = z
  .object({
    firstName: z.string().min(2).max(15).optional(),
    lastName: z.string().min(2).max(15).optional(),
    email: z.string().email().optional(),
    status: z.enum(['ACTIVE', 'SUSPENDED', 'BANNED']).optional(),
    role: z.enum(['USER', 'STAFF']).optional(),
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
      .min(8, 'Must be at least 8 characters in length')
      .optional(),
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
      .min(8, 'Must be at least 8 characters in length')
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type EditUserSchemaType = z.infer<typeof EditUserSchema>;
