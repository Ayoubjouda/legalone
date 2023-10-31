'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fr } from 'date-fns/locale';
import React from 'react';
import { RegisterSchema, RegisterSchemaType } from '@/lib/validators/auth';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { useAddUser } from '@/hooks/useUser';

const AddUserForm = ({ setOpen }: { setOpen: () => void }) => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });
  const { addUserMutation, isLoading } = useAddUser();
  const onSubmit = (values: RegisterSchemaType) => {
    addUserMutation(
      {
        ...values,
        birthDate: format(values.birthDate, 'yyyy-dd-MM').toString(),
      },
      { onSuccess: () => setOpen() }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mx-2 my-5 flex flex-col gap-4'>
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

          <Button
            className='bg-black  font-inter font-semibold text-white hover:bg-black hover:bg-opacity-80'
            type='submit'
          >
            {isLoading ? <Loader2 className='animate-spin' /> : 'Ajouter'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddUserForm;
