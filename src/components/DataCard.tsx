import {
  ActivityField,
  EmailField,
  HeadQuarterField,
  NumberField,
  PhoneField,
  RadioField,
  SelectField,
} from '@/components/Fields';
import CompanyTypeField from '@/components/Fields/CompanyTypeField';
import TextField from '@/components/Fields/TextField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  EntrepriseFormSchema,
  EntrepriseSchemaType,
} from '@/lib/validators/creation/entreprise';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
interface EditEntrepriseFormProps {
  dossier: EntrepriseSchemaType;
}

const DataCard: FC<EditEntrepriseFormProps> = ({ dossier }) => {
  if (!dossier) return;
  const arrayOfInformations = Object.entries(dossier);
  return (
    <div className=' overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Dosssier informations
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Details and informations about Dossier {dossier.companyName}.
        </p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          {arrayOfInformations.map((value, key) => (
            <div
              key={key}
              className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
            >
              <dt className='text-sm font-medium text-gray-500'>{value[0]}</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                {value[1]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default DataCard;
