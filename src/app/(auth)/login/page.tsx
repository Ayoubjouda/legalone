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
import {
  loginSchemaValidator,
  LoginSchemaType,
} from '@/lib/validators/formValidators';
export default function LoginPage() {
  const { LoginMutation } = useLogin();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchemaValidator),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = (values: LoginSchemaType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    LoginMutation(values);
  };
  return (
    <main className="max-w-screen mx-8 flex h-full    md:justify-center  lg:h-screen ">
      <div className="hidden h-full w-1/2 items-center py-5  lg:flex">
        <Image
          className="my-2 h-full max-h-[797px] w-full max-w-[633px]  rounded-2xl "
          src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/legaloneSigninPic.jpeg?updatedAt=1692030316256"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="mt-10 flex-col justify-center  md:mx-10 lg:mt-32 lg:w-1/2 lg:items-center">
        <Button
          className="px-0 text-black hover:no-underline"
          variant={'link'}
        >
          <ChevronLeft size={24} />
          Retour
        </Button>

        <Image
          className="my-2 h-36 w-full rounded-2xl md:hidden"
          src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/angela-bailey-GfUk_pFtjz0-unsplash%202.png?updatedAt=1692030421176"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
        <h1 className="mt-5">
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idantifiant</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
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
              <Button type="submit">Se connecter</Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
