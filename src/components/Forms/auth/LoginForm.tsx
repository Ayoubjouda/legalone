'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginSchemaValidator, LoginSchemaType } from '@/lib/validators/auth';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

interface LoginFormProps {}

const LoginForm = () => {
  const router = useRouter();
  const [isLoginLoading, setisLoginLoading] = useState<boolean>(false);
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchemaValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const Login = async (values: LoginSchemaType) => {
    setisLoginLoading(true);
    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `/`,
    });
    if (res?.ok) {
      setisLoginLoading(false);

      return `Login successful`;
    } else {
      setisLoginLoading(false);

      throw new Error('Login Failed');
    }
  };

  const onSubmit = async (values: LoginSchemaType) => {
    toast.promise(Login(values), {
      loading: 'Loading...',
      success: (data) => {
        const intendedDestination = localStorage.getItem('intendedDestination');
        console.log(intendedDestination);
        if (intendedDestination) {
          router.push(intendedDestination);
          localStorage.removeItem('intendedDestination');
        } else {
          router.push('/dashboard');
        }

        return `Login successful`;
      },
      error: 'Login Failed',
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='my-5 flex flex-col gap-4'>
          <p className='text-sm font-normal leading-tight text-slate-500'>
            Accédez à votre espace personnel en toute sécurité, Connectez-vous
            maintenant !
          </p>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    autoComplete='current-password'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <a
            className='text-sm font-semibold text-black text-opacity-70'
            href='f'
          >
            Mot de passe oublié ?
          </a>
          <Link
            className='text-sm font-semibold text-black text-opacity-70'
            href='signup'
          >
            Vous n'avez pas de compte ? S'inscrire
          </Link>
          <Button
            type='submit'
            className='bg-black  font-inter font-semibold text-white hover:bg-black hover:bg-opacity-80'
            disabled={isLoginLoading}
          >
            se connecter
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
