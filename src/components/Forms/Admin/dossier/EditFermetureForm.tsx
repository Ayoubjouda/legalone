import { TextField } from '@/components/Fields';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetCompanyType } from '@/hooks/useCompany';
import {
  DissolutionFormSchema,
  DissolutionFormSchemaType,
} from '@/lib/validators/fermeture/dissolution';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, X } from 'lucide-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface AssociateDto {
  associateFirstName: string;
  associateLastName: string;
  sex: string;
}

interface CompanyAssociateDto {
  companyNameAssociate: string;
  companyAssociateType: number;
}

interface MyInterface {
  type: number;
  dto: AssociateDto | CompanyAssociateDto;
}

interface DissolutionAdminFormProps {
  dossier: DissolutionFormSchemaType;
}

const EditFermetureForm: FC<DissolutionAdminFormProps> = ({ dossier }) => {
  const form = useForm<DissolutionFormSchemaType>({
    resolver: zodResolver(DissolutionFormSchema),
    defaultValues: {
      ...dossier,
    },
  });
  const { data: CompanyTypes, isLoading } = useGetCompanyType();

  if (!dossier || !CompanyTypes) return;
  const values = form.getValues();
  console.log(values.associate);
  const handleAddField = () => {
    form.setValue(
      'associate',
      [...values.associate, { type: 1, dto: {} } as MyInterface],
      { shouldValidate: true }
    );
  };
  if (!values.associate) {
    form.setValue('associate', [{ type: 1, dto: {} } as MyInterface]);
  }

  const handleDeleteItem = (index: number) => {
    const newCount = [...values.associate];
    newCount.splice(index, 1);
    form.setValue('associate', newCount, { shouldValidate: true });
  };

  if (isLoading)
    return (
      <div className='flex h-full min-h-[300px] w-full items-center justify-center'></div>
    );
  const onSubmit = (data: DissolutionFormSchemaType) => {};
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4 '
        >
          <TextField
            name='companyName'
            label='Company Name'
          />
          <TextField
            name='rcs'
            label='RCS'
          />
          <TextField
            name='firstName'
            label='prenom'
          />
          <TextField
            name='lastName'
            label='nom'
          />
          <TextField
            name='email'
            label='email'
          />
          {values.associate.map((item: MyInterface, index: number) => (
            <div
              key={item.type}
              className='col-span-2 gap-y-2'
            >
              <FormField
                name={`associate.${index}.type`}
                control={form.control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <FormItem className='flex flex-col gap-3 space-y-0 '>
                    <FormLabel className='relative leading-[20px]'>
                      Cet associé est :
                      {values.associate.length > 1 ? (
                        <div
                          className='absolute right-0 cursor-pointer'
                          onClick={() => handleDeleteItem(index)}
                        >
                          <X />
                        </div>
                      ) : null}
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          if (value === 'True') {
                            onChange(1);
                          } else {
                            onChange(2);
                          }
                        }}
                        defaultValue={item.type === 1 ? 'True' : 'False'}
                        className='flex'
                      >
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='True' />
                          </FormControl>
                          <FormLabel className='font-semibold'>
                            Un particulier
                          </FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='False' />
                          </FormControl>
                          <FormLabel className='font-semibold'>
                            Une société
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {values.associate[index].type === 1 ? (
                <>
                  <div className='col-span-2 flex w-full gap-2 '>
                    <FormField
                      name={`associate.${index}.dto.associateFirstName`}
                      control={form.control}
                      defaultValue={''}
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
                      name={`associate.${index}.dto.associateLastName`}
                      control={form.control}
                      defaultValue={''}
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
                    name={`associate.${index}.dto.sex`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Civilité</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='selectioner votre civilité' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='madame'>madame</SelectItem>
                            <SelectItem value='monsieur'>monsieur</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <div>
                  <FormField
                    name={`associate.${index}.dto.companyNameAssociate`}
                    control={form.control}
                    defaultValue={''}
                    render={({ field }) => (
                      <FormItem className='w-1/2'>
                        <FormLabel>Nom de la société</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`associate.${index}.dto.companyAssociateType`}
                    render={({ field: { onChange, value } }) => (
                      <FormItem>
                        <FormLabel>Forme Social</FormLabel>
                        <Select
                          onValueChange={(value) => onChange(Number(value))}
                          defaultValue={String(value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Forme Social' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {CompanyTypes?.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={String(item.id)}
                              >
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          ))}
          <Button
            className='gap-2  self-start font-semibold hover:bg-darkRedish'
            type='button'
            size={'sm'}
            onClick={handleAddField}
          >
            <Plus size={16} />
            Ajouter
          </Button>

          <Button
            className='grid-span-2'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditFermetureForm;
