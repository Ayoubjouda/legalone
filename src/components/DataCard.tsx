import {
  useGetCompanyType,
  useGetHeadQuarter,
  useGetManagerType,
} from '@/hooks/useCompany';
import { EntrepriseSchemaType } from '@/lib/validators/creation/entreprise';
import { FC } from 'react';

interface DossierCreation extends EntrepriseSchemaType {
  companyId: number;
}
interface EditEntrepriseFormProps {
  dossier: DossierCreation;
}

const DataCard: FC<EditEntrepriseFormProps> = ({ dossier }) => {
  const { data } = useGetManagerType();
  const { data: HqData } = useGetHeadQuarter();
  const { data: companyTypes } = useGetCompanyType();
  if (!dossier && !data) return;
  const managerType = data?.find(
    (manager) => manager.id === dossier.managerType
  )?.type;
  const companyType = companyTypes?.find(
    (company) => company.id === +dossier?.companyType
  )?.name;
  const headquarter = HqData?.find((id) => id.id === dossier.headquarter)
    ?.headquarter;
  const arrayOfInformations = Object.entries({
    ...dossier,
    ...(dossier.managerType ? { managerType: managerType } : {}),
    ...(dossier.headquarter ? { headquarter: headquarter } : {}),
    ...(dossier.companyType ? { companyType: companyType } : {}),
  }).slice(1);
  const objectexample: { [key: string]: string | number } = {
    companyId: 34,
    delay: 'Délai de Creation de la  société',
    companyName: 'Le nom de la societe',
    associer: "Combien y a-t-il d'Associés fondateurs ?",
    nonAssociateManager:
      'Le Président est-il Associé fondateur de la Société ?',
    shareCapital: 'Capital social',
    companyType: 'Type de société',
    accountingExpert: 'Déjà mandaté un expert comptable',
    email: 'Email',
    phone: 'Numero de telephone',
    managerType: 'Président de la société',
    activity: 'Activité de la société',
    headquarter: 'Où sera fixé le siège social de la Société ?',
    id: 'Dossier Numero',
    firstName: 'prenom',
    lastName: 'nom',
    sex: 'sex',
    city: 'Ville',
    domicile: 'Adresse Du domicile',
    postalCode: 'Code postal',
    artisan: 'Est ce que votre activité est-elle artisanale ?',
    exAutoEntrepreneur: 'Est ce que vous etes ex auto entrepreneur ?',
    descriptionAssociation: "Quelle est l'activité de l'association ?",
    desktopComposition: 'De combien de membres sera composé le bureau ?',
    otherModification: 'Autre modification',
    declaration: 'Declaration',
    modification: 'Modification Demandé',
    domiciliationAdress: 'Adresse de domiciliation',
    expeditionFrequency: 'Fréquence d’expédition ',
    domiciliationId: 'dossier Numero',
    nom: 'Nom',
    prenom: 'Prenom',
    associate: 'associés',
    rcs: 'RCS',
    LiquidatorfirstName: 'Prenom du liquidateur',
    LiquidatorlastName: 'Nom du liquidateur',
    Liquidatorsex: 'Sex du liquidateur',
    associateFirstName: 'Prenom de l associé',
    associateLastName: 'Nom de l associé',
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
            </div>
          ))}

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

export default DataCard;
