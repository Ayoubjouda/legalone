import api from '@/lib/axiosConfig';
import { useQuery } from 'react-query';

const fetchActivity = async (): Promise<Activity[]> => {
  const { data } = await api.get(`activity`);
  return data;
};

const fetchCompanyType = async (): Promise<CompanyType[]> => {
  const { data } = await api.get(`company/companyType`);
  return data;
};

export const useGetActivity = () => {
  return useQuery<Activity[], Error>('Activity', () => fetchActivity());
};

export const useGetCompanyType = () => {
  return useQuery<CompanyType[], Error>('CompanyType', () =>
    fetchCompanyType()
  );
};

const fetchHeadQuarter = async (): Promise<HeadQuarter[]> => {
  const { data } = await api.get(`company/headquarter`);
  return data;
};

export const useGetHeadQuarter = () => {
  return useQuery<HeadQuarter[], Error>('headquarter', () =>
    fetchHeadQuarter()
  );
};

const fetchManagerType = async (): Promise<ManagerType[]> => {
  const { data } = await api.get(`manager/managerType`);
  return data;
};

export const useGetManagerType = () => {
  return useQuery<ManagerType[], Error>('managerType', () =>
    fetchManagerType()
  );
};

const fetchPackages = async (packageType: string): Promise<Package[]> => {
  const { data } = await api.get(`package/${packageType}`);
  return data;
};

export const useGetPackages = (packageType: string) => {
  return useQuery<Package[], Error>(['package', packageType], () =>
    fetchPackages(packageType)
  );
};
interface Subscription {
  id: number;
  stripeProductId: string;
  amount: number;
  icon: null | string;
  interval: string;
  title: string;
}
const getSubscriptionsPackages = async (): Promise<Subscription[]> => {
  const { data } = await api.get(`payment/subscription`);
  return data;
};

export const useGetSubscriptionsPackages = () => {
  return useQuery<Subscription[], Error>(['subscriptions'], () =>
    getSubscriptionsPackages()
  );
};
