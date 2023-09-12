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
    <main className="max-w-screen mx-8 flex h-full relative   md:justify-center   ">
      <Image
        className="my-2 h-full hidden  inset-0  lg:fixed lg:block lg:w-1/2 "
        src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/legaloneSigninPic.jpeg?updatedAt=1692030316256"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="https://ik.imagekit.io/zb5z1u26qn/LegalOne/legaloneSigninPic.jpeg?updatedAt=1692030316256"
      />
      <div className="mt-10 flex-col justify-center lg:fixed lg:inset-x-2/4   lg:mx-10 lg:mt-32 lg:w-[calc(50%-100px)] lg:items-center">
        <Link href="/">
          <Button
            className="px-0 text-black hover:no-underline"
            variant={'link'}
          >
            <ChevronLeft size={24} />
            Retour
          </Button>
        </Link>
        <Image
          className="my-2 h-36 w-full rounded-2xl md:hidden"
          src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/angela-bailey-GfUk_pFtjz0-unsplash%202.png?updatedAt=1692030421176"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="https://ik.imagekit.io/zb5z1u26qn/LegalOne/angela-bailey-GfUk_pFtjz0-unsplash%202.png?updatedAt=1692030421176"
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
