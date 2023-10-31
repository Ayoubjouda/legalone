import { Icons } from '@/components/Icons';
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
    name: 'DashBoard',
    icon: 'home',
    route: '/dashboard',
    routes: [],
  },
  {
    name: 'Users',
    icon: 'users',
    route: '/dashboard/users',
    routes: [],
  },
  {
    name: 'Dossier',
    icon: 'folder',
    route: '/dashboard',
    routes: [
      { name: 'Creation', route: '/dashboard/services' },
      { name: 'Modification', route: '/dashboard/services' },
      { name: 'Fermeture', route: '/dashboard/services' },
    ],
  },
  {
    name: 'Orders',
    icon: 'shoppingCart',
    route: '/dashboard/orders',
    routes: [],
  },
  {
    name: 'Payments',
    icon: 'badgeDollarSign',
    route: '/dashboard/payments',
    routes: [],
  },
];
