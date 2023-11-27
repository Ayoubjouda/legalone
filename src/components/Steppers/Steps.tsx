import ActivityForm from '../Forms/services/common/ActivityForm';
import CompanyDataForm from '../Forms/services/common/CompanyDataForm';
import ContactForm from '../Forms/services/common/ContactForm';
import DurationForm from '../Forms/services/common/DurationForm';
import FinishFlow from '../Forms/services/common/FinishFlow';
import HeadquarterForm from '../Forms/services/common/HeadquarterForm';
import { ManagerForm } from '../Forms/services/common/ManagerForm';
import PersonalForm from '../Forms/services/common/PersonalForm';
import AssociationDataForm from '../Forms/services/creation/assosiation/AssociationDataForm';
import TresorierForm from '../Forms/services/creation/assosiation/TresorierForm';
import AutoEntreForm from '../Forms/services/creation/autoEntreprise/AutoEntreForm';
import SciDataForm from '../Forms/services/creation/sci/SciDataForm';
import CompanyTypeForm from '../Forms/services/dissolution/CompanyTypeForm';
import DissolutionAssocierForm from '../Forms/services/dissolution/DissolutionAssocierForm';
import DissolutionCompanyDataForm from '../Forms/services/dissolution/DissolutionCompanyDataForm';
import DissolutionLiquidateurForm from '../Forms/services/dissolution/DissolutionLiquidateurForm';
import Companyinfo from '../Forms/services/modification/Companyinfo';
import DeclarationForm from '../Forms/services/modification/DeclarationForm';
import FinishUpdateFlow from '../Forms/services/modification/FinishUpdateFlow';
import RequestedUpdates from '../Forms/services/modification/RequestedUpdates';

export const saasSteps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: "Quel est votre domaine d'activité ?",
    description: '',
    component: ActivityForm,
  },
  {
    title: 'Qui sera président de la société ?',
    description: '',
    component: ManagerForm,
  },
  {
    title: 'Informations sur votre société',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: PersonalForm,
  },
  {
    title: 'information complementaire sur votre société',
    description: '',
    component: CompanyDataForm,
  },
  {
    title: 'Où sera fixé le siège social de la Société ?',
    description: '',
    component: HeadquarterForm,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
export const sciSteps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: 'Qui sera président de la société ?',
    description: '',
    component: ManagerForm,
  },
  {
    title: 'Informations sur votre société',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: PersonalForm,
  },
  {
    title: 'information complementaire sur votre société',
    description: '',
    component: CompanyDataForm,
  },
  {
    title: 'information complementaire sur votre société',
    description: '',
    component: SciDataForm,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  {
    title: 'Où sera fixé le siège social de la Société ?',
    description: '',
    component: HeadquarterForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
export const associationSteps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: "Quel est votre domaine d'activité ?",
    description: '',
    component: ActivityForm,
  },
  {
    title: 'Informations sur votre Association',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: AssociationDataForm,
  },
  {
    title: 'information personnel',
    description: '',
    component: PersonalForm,
  },
  {
    title: "Quelle est l'identité du trésorier ?",
    description: '',
    component: TresorierForm,
  },
  {
    title: 'Où sera fixé le siège social de la Société ?',
    description: '',
    component: HeadquarterForm,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
export const autoEntreSteps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: 'Informations Personnelles',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: AutoEntreForm,
  },
  {
    title: 'Où sera fixé le siège social de la Société ?',
    description: '',
    component: HeadquarterForm,
  },
  {
    title: 'Informations sur votre société',
    description: '',
    component: CompanyDataForm,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  {
    title: 'Traitement Dossier ',
    description: '',
    component: FinishFlow,
  },
];
export const domiciliationSteps = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: "Quel est votre domaine d'activité ?",
    description: '',
    component: ActivityForm,
  },
  {
    title: 'Où sera fixé le siège social de la Société ?',
    description: '',
    component: HeadquarterForm,
  },
  {
    title: 'Information personnel',
    description: '',
    component: PersonalForm,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
export const updateStepper = [
  {
    title: 'Dans quel délai souhaitez-vous créer modifier votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: 'information complementaire',
    description: '',
    component: RequestedUpdates,
  },
  {
    title: 'Bénéficiaires Effectifs',
    description: '',
    component: DeclarationForm,
  },
  {
    title: ' La société',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: Companyinfo,
  },
  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishUpdateFlow },
];
export const deleteStepper = [
  {
    title: 'Dans quel délai souhaitez-vous créer votre société ?',
    description: '',
    component: DurationForm,
  },
  {
    title: 'Quel est le type de votre société ?',
    description: '',
    component: CompanyTypeForm,
  },
  {
    title: 'Informations sur votre société',
    description: '',
    component: DissolutionCompanyDataForm,
  },
  {
    title: 'Le liquidateur',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: DissolutionLiquidateurForm,
  },
  {
    title: 'Les associés',
    description:
      'Ces informations nous permettront de vous assister au cours de votre processus de création, et seront nécessaires pour constituer votre dossier.',
    component: DissolutionAssocierForm,
  },
  {
    title: 'Informations personnelles',
    description: '',
    component: PersonalForm,
  },

  {
    title: 'Email & numero de telephone',
    description: '',
    component: ContactForm,
  },
  { title: 'Traitement Dossier', description: '', component: FinishFlow },
];
