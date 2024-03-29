import Error from '@/components/Error';
import { useGetHeadQuarter, useGetManagerType } from '@/hooks/useCompany';
import { useGetFormalityById } from '@/hooks/useDossier';
import { EntrepriseSchemaType } from '@/lib/validators/creation/entreprise';
import { FC } from 'react';
import FileUpload from './FileUpload';

interface EditEntrepriseFormProps {
  formalityId: number;
  files: Files;
}

const DataCard: FC<EditEntrepriseFormProps> = ({ formalityId }) => {
  const { data: FormalityData, isFetching } = useGetFormalityById({
    params: { title: 'formalityId', value: formalityId },
  });
  const selectedDossier = FormalityData?.formalities[0].data;
  const selectedFiles = FormalityData?.formalities[0].files;
  const { data } = useGetManagerType();
  const { data: HqData } = useGetHeadQuarter();

  if (!selectedDossier && !data) return;
  const managerType = data?.find(
    (manager) => manager.id === selectedDossier.managerType
  )?.type;
  const headquarter = HqData?.find(
    (id) => id.id === selectedDossier.headquarter
  )?.headquarter;
  const arrayOfInformations = Object.entries({
    ...selectedDossier,
    ...(selectedDossier.managerType ? { managerType: managerType } : {}),
    ...(selectedDossier.headquarter ? { headquarter: headquarter } : {}),
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

  if (!FormalityData?.formalities[0]) return <Error text='Dossier Not Found' />;
  return (
    <div className=' overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Dosssier informations
        </h3>
        <p className='mt-1  text-sm text-gray-500'>
          Details and informations about Dossier {selectedDossier.companyName}.
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
          {selectedFiles
            ? Object.keys(selectedFiles).map((key, index) => {
                const fileKey = key as keyof typeof selectedFiles;

                return (
                  <FileUpload
                    key={fileKey}
                    fileKey={fileKey}
                    formalityId={formalityId}
                    downloaded={selectedFiles[fileKey] !== null}
                  />
                );
              })
            : null}
        </dl>
      </div>
    </div>
  );
};

export default DataCard;
