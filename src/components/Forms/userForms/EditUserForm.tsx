import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUpdateUser } from '@/hooks/useUser';
import {
  EditUserSchema,
  EditUserSchemaType,
} from '@/lib/validators/admin/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

enum UserStatus {
  BANNED = 'BANNED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}
enum UserRole {
  USER = 'USER',
  STAFF = 'STAFF',
}

const EditUserForm = ({
  setOpen,
  user,
}: {
  user: User;
  setOpen: () => void;
}) => {
  const { mutateAsync: updateUser, isLoading } = useUpdateUser();

  const handleUpdateUser = (user: EditUserSchemaType, userId: string) => {
    updateUser({ user, userId }, { onSuccess: () => setOpen() });
  };
  const form = useForm<EditUserSchemaType>({
    resolver: zodResolver(EditUserSchema),
  });
  const onSubmit = (values: EditUserSchemaType) => {
    handleUpdateUser(values, user.id);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mx-2 my-5 flex flex-col gap-4'>
          <div className='flex w-full gap-2 '>
            <FormField
              control={form.control}
              name='firstName'
              defaultValue={user.firstName}
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
              defaultValue={user.lastName}
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
            defaultValue={user.email}
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
            name='status'
            defaultValue={user.status}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={UserStatus.ACTIVE}>
                      {UserStatus.ACTIVE.toLowerCase()}
                    </SelectItem>
                    <SelectItem value={UserStatus.SUSPENDED}>
                      {UserStatus.SUSPENDED.toLowerCase()}
                    </SelectItem>
                    <SelectItem value={UserStatus.BANNED}>
                      {UserStatus.BANNED.toLowerCase()}
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='role'
            defaultValue={user.role as UserRole}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={UserRole.USER}>
                      {UserRole.USER}
                    </SelectItem>
                    <SelectItem value={UserRole.STAFF}>
                      {UserRole.STAFF}
                    </SelectItem>
                  </SelectContent>
                </Select>

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
                    placeholder='********'
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
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className='animate-spin' /> : 'Modifier'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditUserForm;
