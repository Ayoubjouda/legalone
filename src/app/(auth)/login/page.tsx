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
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/hooks/useLogin';
import { Spinner } from '@chakra-ui/react';
import {
  loginSchemaValidator,
  LoginSchemaType,
} from '@/lib/validators/formValidators';
import Link from 'next/link';
import useAppStore from '@/zustand/store';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const { isLoading, LoginMutation } = useLogin();
  const { accessToken } = useAppStore();
  const router = useRouter();

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
  if (accessToken) {
    const intendedDestination = localStorage.getItem('intendedDestination');
    if (intendedDestination) {
      localStorage.removeItem('intendedDestination');
      return router.push(intendedDestination);
    } else {
      return router.push('/');
    }
  }
  return (
    <main className="max-w-screen mx-4 sm:mx-8 flex h-full relative   md:justify-center   ">
      <div className="mt-4 flex-col justify-center  border px-4 sm:px-16 py-1 rounded-md   lg:mx-10   lg:items-center">
        <h1 className="mt-4">
          Legal<span className="font-bold">Center</span>
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="my-5 flex flex-col gap-4">
              <p className="text-sm font-normal leading-tight text-slate-500">
                Accédez à votre espace personnel en toute sécurité,
                Connectez-vous maintenant !
              </p>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
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
                        placeholder="shadcn"
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
      </div>
    </main>
  );
}
