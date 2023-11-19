import { redirect } from 'next/navigation';
import { FC } from 'react';

interface PageProps {}

const Page: FC<PageProps> = () => {
  redirect('account/demarches');
  return <div>Page</div>;
};

export default Page;
