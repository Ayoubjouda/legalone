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
import { CalendarIcon, ChevronLeft } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { fr } from 'date-fns/locale';
import {
  RegisterSchema,
  RegisterSchemaType,
} from '@/lib/validators/formValidators';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useSignUp } from '@/hooks/useSignUp';
export default function SignupPage() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });
  const { signUpMutation } = useSignUp();
  const onSubmit = (values: RegisterSchemaType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    signUpMutation({
      ...values,
      birthDate: format(values.birthDate, 'yyyy-dd-MM').toString(),
    });
  };
  return (
    <main className="max-w-screen mx-8 flex h-full    md:justify-center   ">
      <div className="hidden h-full w-1/2 items-center py-5  lg:flex">
        <Image
          className="my-2 h-full max-h-[750px] w-full max-w-[633px]  rounded-2xl "
          src="https://ik.imagekit.io/zb5z1u26qn/LegalOne/legaloneSigninPic.jpeg?updatedAt=1692030316256"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="https://ik.imagekit.io/zb5z1u26qn/LegalOne/legaloneSigninPic.jpeg?updatedAt=1692030316256"
        />
      </div>
      <div className="flex-col justify-center py-10  md:mx-10 lg:w-1/2 lg:items-center lg:py-10 ">
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
              <div className="flex w-full gap-2 ">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Nom</FormLabel>
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Prénom</FormLabel>
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
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date de Naissance</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP', { locale: fr })
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1900}
                          toYear={new Date().getFullYear()}
                          classNames={{
                            caption:
                              'flex justify-center pt-1 relative items-center',
                            caption_label: 'text-sm font-medium',
                            caption_dropdowns: 'flex justify-center gap-1',
                            nav: 'space-x-1 flex items-center',
                          }}
                          locale={fr}
                        />
                      </PopoverContent>
                    </Popover>

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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmer le Mot de passe</FormLabel>
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
                href="d"
              >
                Vous avez deja un compte ?{' '}
                <span className="underline">Se Connecter</span>
              </a>
              <Button type="submit">Se connecter</Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
