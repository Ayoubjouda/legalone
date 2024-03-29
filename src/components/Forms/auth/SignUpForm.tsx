'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Calendar } from '../../ui/calendar';
import useAppStore from '@/zustand/store';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fr } from 'date-fns/locale';
import React, { FC } from 'react';
import { RegisterSchema, RegisterSchemaType } from '@/lib/validators/auth';
import { useSignUp } from '@/hooks/useSignUp';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

interface SignUpFormProps {}

const SignUpForm = () => {
  const { accessToken } = useAppStore();
  const router = useRouter();
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mx-2 my-5 flex flex-col gap-4'>
          <p className='text-sm font-normal leading-tight text-slate-500'>
            Accédez à votre espace personnel en toute sécurité, Connectez-vous
            maintenant !
          </p>
          <div className='flex w-full gap-2 '>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-1/2'>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-1/2'>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='birthDate'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
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
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto p-0'
                    align='start'
                  >
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                      captionLayout='dropdown-buttons'
                      fromYear={1901}
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
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='password'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='password'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <a
            className='text-sm font-semibold text-black text-opacity-70'
            href='d'
          >
            Vous avez deja un compte ?{' '}
            <span className='underline'>Se Connecter</span>
          </a>
          <Button
            className='bg-black  font-inter font-semibold text-white hover:bg-black hover:bg-opacity-80'
            type='submit'
          >
            Se connecter
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
