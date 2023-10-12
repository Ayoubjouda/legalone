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
import { useLogin } from '@/hooks/useLogin';
import { Spinner } from '@nextui-org/react';

import {
  loginSchemaValidator,
  LoginSchemaType,
} from '@/lib/validators/formValidators';

interface LoginFormProps {}

const LoginForm = () => {
  const { isLoading, LoginMutation } = useLogin();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchemaValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: LoginSchemaType) => {
    LoginMutation(values);
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
            disabled={isLoading}
            className="bg-black  text-white font-semibold font-inter hover:bg-opacity-80 hover:bg-black"
          >
            {isLoading ? <Spinner /> : 'Se connecter'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
