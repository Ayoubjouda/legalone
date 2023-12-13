import { Icons } from '@/components/Icons';

interface serviceBoxType {
  title: string;
  icon: keyof typeof Icons;
  link: string;
}
export const CREATE_COMPANY_DATA = [
  {
    id: 1,
    title: 'Créer ma SASU',
    url: '/services?type=SASU',
  },
  {
    id: 2,
    title: 'Créer ma SAS',
    url: '/services?type=SAS',
  },
  {
    id: 3,
    title: 'Créer ma SARL',
    url: '/services?type=SARL',
  },
  {
    id: 4,
    title: 'Créer ma EURL',
    url: '/services?type=EURL',
  },
  {
    id: 5,
    title: 'Créer ma SCI',
    url: '/services?type=SCI',
  },
  {
    id: 6,
    title: 'Créer mon auto-entreprise',
    url: '/services?type=AUTOENTREPRISE',
  },
  {
    id: 7,
    title: 'Créer mon association',
    url: '/services?type=ASSOCIATION',
  },
  {
    id: 8,
    title: 'Choisir mon statut',
    url: '/create?type=chose',
  },
  {
    id: 8,
    title: 'Domiciliation',
    url: '/services?type=DOMICILIATION',
  },
];
export const UPDATE_COMPANY_DATA = [
  {
    id: 1,
    title: 'Transfert de siège',
    url: '/update?type=relocation',
  },
  {
    id: 2,
    title: 'Changement de gérant',
    url: '/update?type=manager-modification',
  },
  {
    id: 2,
    title: 'Modification de statuts',
    url: '/update?type=status',
  },
];
export const DELETE_COMPANY_DATA = [
  {
    id: 1,
    title: 'Radiation de société',
    url: '/delete?type=radiation',
  },
  {
    id: 2,
    title: 'Dissolution de société',
    url: '/delete?type=dissolution',
  },
];

export const CREATE_SERVICE: serviceBoxType[] = [
  {
    title: 'Conseil / études / audit',
    icon: 'briefcase',
    link: '/create?type=SASU',
  },
  {
    title: 'Construction et travaux',
    icon: 'hardHat',
    link: '/create',
  },
  {
    title: 'Automobile et transport',
    icon: 'truck',
    link: '/create?type=SASU',
  },
  {
    title: 'Vente en ligne',
    icon: 'shoppingBag',
    link: '/create?type=SASU',
  },
  {
    title: 'Commerce',
    icon: 'store',
    link: '/create?type=SASU',
  },
  {
    title: 'Santé et beauté',
    icon: 'heartPulse',
    link: '/create?type=SASU',
  },
  {
    title: 'Achat et revente',
    icon: 'user',
    link: '/create?type=SASU',
  },
  {
    title: 'Informatique et web',
    icon: 'laptop',
    link: '/create?type=SASU',
  },
  {
    title: 'Services à la personne',
    icon: 'helpingHand',
    link: '/create?type=SASU',
  },
  {
    title: 'Restauration',
    icon: 'salad',
    link: '/create?type=SASU',
  },
  {
    title: 'Services aux entreprises',
    icon: 'building',
    link: '/create?type=SASU',
  },
  {
    title: 'Autres',
    icon: 'moreHorizontal',
    link: '/create?type=SASU',
  },
];
