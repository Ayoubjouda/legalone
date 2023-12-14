import { Icons } from '@/components/Icons';
import { useSession } from 'next-auth/react';
type routes = {
  name: string;
  icon: keyof typeof Icons;
  route: string;
  routes: {
    name: string;
    route: string;
  }[];
};

export const DashboardRoutes: routes[] = [
  {
    name: 'Tableau de bord',
    icon: 'home',
    route: '/dashboard',
    routes: [],
  },
  {
    name: 'Utilisateurs',
    icon: 'userCog',
    route: '/dashboard/users',
    routes: [],
  },
  {
    name: 'Clients',
    icon: 'users',
    route: '/dashboard/clients',
    routes: [],
  },
  {
    name: 'Dossier',
    icon: 'folder',
    route: '/dashboard/dossier',
    routes: [],
  },
  {
    name: 'Commandes',
    icon: 'shoppingCart',
    route: '/dashboard/orders',
    routes: [],
  },
  {
    name: 'Paiements',
    icon: 'badgeDollarSign',
    route: '/dashboard/payments',
    routes: [],
  },
];

export const AccountDashboardRoutes: routes[] = [
  // {
  //   name: 'Accueil',
  //   icon: 'home',
  //   route: '/dashboard',
  //   routes: [],
  // },
  {
    name: 'Mes démarches',
    icon: 'users',
    route: '/account/demarches',
    routes: [],
  },
  {
    name: 'Mes Dossiers',
    icon: 'folder',
    route: '/account/dossier',
    routes: [],
  },
  {
    name: 'Mes Paiements',
    icon: 'billing',
    route: '/account/payments',
    routes: [],
  },
];
