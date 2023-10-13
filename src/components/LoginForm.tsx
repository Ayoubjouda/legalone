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

import { useRouter } from 'next/navigation';
import {
  loginSchemaValidator,
  LoginSchemaType,
} from '@/lib/validators/formValidators';
import { signIn } from 'next-auth/react';
interface LoginFormProps {}
import { toast } from 'sonner';
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchemaValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const promise = async (values: LoginSchemaType) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `/`,
    });
    if (res?.ok) {
      return `Login successful`;
      // toast.success('login successful');
      // return router.push('/dashboard');
    } else {
      throw new Error('Login Faild');
      // return toast.error('login Failed');
    }
  };

  const onSubmit = async (values: LoginSchemaType) => {
    toast.promise(promise(values), {
      loading: 'Loading...',
      success: (data) => {
        router.push('/dashboard');

        return `Login successful`;
      },
      error: 'Login Faild',
    });

    // const res = await

    // if (res?.ok) {
    //   toast.success('login successful');
    //   return router.push('/dashboard');
    // } else {
    //   return toast.error('login Failed');
    // }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-5 flex flex-col gap-4">
          <p className="text-sm font-normal leading-tight text-slate-500">
            Accédez à votre espace personnel en toute sécurité, Connectez-vous
            maintenant !
          </p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <a
            className="text-sm font-semibold text-black text-opacity-70"
            href="f"
          >
            Mot de passe oublié ?
          </a>
          <a
            className="text-sm font-semibold text-black text-opacity-70"
            href="d"
          >
            Vous n'avez pas de compte ? S'inscrire
          </a>
          <Button
            type="submit"
            // disabled={isLoading}
            className="bg-black  text-white font-semibold font-inter hover:bg-opacity-80 hover:bg-black"
          >
            {/* {isLoading ? <Spinner /> : 'Se connecter'}
             */}
            se conecter
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
