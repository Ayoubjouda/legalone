import { useGetCompanyType, useGetManagerType } from '@/hooks/useCompany';
import { DissolutionFormSchemaType } from '@/lib/validators/fermeture/dissolution';
import { FC } from 'react';

interface DossierFermeture extends DissolutionFormSchemaType {
  companyId: number;
}
interface EditEntrepriseFormProps {
  dossier: DossierFermeture;
}

const FermetureDetail: FC<EditEntrepriseFormProps> = ({ dossier }) => {
  const { data } = useGetManagerType();
  const { data: companyTypes } = useGetCompanyType();
  if (!dossier && !data) return;

  const companyType = companyTypes?.find(
    (company) => company.id === +dossier?.companyType
  )?.name;
  const assosiates = dossier?.associate;
  const array0fAssociates = assosiates.flatMap((associate) =>
    Object.entries(associate).map(([key, value]) => [key, value])
  );

  const arrayOfInformations = Object.entries({
    ...dossier,
    ...(dossier.companyType ? { companyType: companyType } : {}),
  });
  const objectexample: { [key: string]: string | number } = {
    companyId: 34,
    delay: 'Délai de Creation de la  société',
    companyName: 'Le nom de la societe',
    dissolutionId: 'Dossier Numero',
    email: 'Email',
    phone: 'Numero de telephone',
    activity: 'Activité de la société',
    firstName: 'prenom',
    lastName: 'nom',
    sex: 'sex',
    associate: 'associés',
    rcs: 'RCS',
    LiquidatorfirstName: 'Prenom du liquidateur',
    LiquidatorlastName: 'Nom du liquidateur',
    Liquidatorsex: 'Sex du liquidateur',
    id: 'Associate Id',
    associateFirstName: 'Prenom de l associé',
    associateLastName: 'Nom de l associé',
    companyNameAssociate: 'Nom de la société de l associé',
  };
  return (
    <div className=' overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Dosssier informations
        </h3>
        <p className='mt-1  text-sm text-gray-500'>
          Details and informations about Dossier {dossier.companyName}.
        </p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          {arrayOfInformations.map((value, key) => (
            <div
              key={key}
              className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'
            >
              {value[0] !== 'associates' ? (
                <>
                  <dt className='col-span-2 text-sm font-medium text-gray-500'>
                    {objectexample[value[0]]}
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                    {Array.isArray(value[1])
                      ? value[1]
                          ?.toString()
                          .split(',')
                          .map((modif, key) => <p key={key}>{modif}rr</p>)
                      : value[1]?.toString()}
                  </dd>
                </>
              ) : null}
            </div>
          ))}
          {array0fAssociates.map((value, key) => {
            return (
              <div
                key={key}
                className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'
              >
                <dt className='col-span-2 text-sm font-medium text-gray-500'>
                  {objectexample[value[0].toString()]}
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {Array.isArray(value[1])
                    ? value[1]
                        ?.toString()
                        .split(',')
                        .map((modif, key) => <p key={key}>{modif}rr</p>)
                    : value[1]?.toString()}
                </dd>
              </div>
            );
          })}

          <div className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='col-span-2 text-sm font-medium text-gray-500'>
              Upload Document
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <form>
                <label className='block'>
                  <span className='sr-only'>Choose profile photo</span>
                  <input
                    type='file'
                    className='block w-full text-sm text-gray-500
        file:me-4 file:cursor-pointer file:rounded-lg
        file:border-0 file:bg-black
        file:px-4 file:py-2 file:text-sm
        file:font-semibold file:text-white
        hover:file:bg-black
        file:disabled:pointer-events-none file:disabled:opacity-50
        dark:file:bg-black
      '
                  />
                </label>
              </form>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default FermetureDetail;
