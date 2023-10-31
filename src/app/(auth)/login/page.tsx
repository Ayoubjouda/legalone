import LoginForm from '@/components/Forms/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='max-w-screen  relative mx-4 flex min-h-screen  sm:mx-8 md:justify-center'>
      <Link
        href={'/'}
        className='absolute inset-0 h-fit'
      >
        <h1 className='mt-4'>
          Legal
          <span className='font-bold'>Center</span>
        </h1>
      </Link>

      <div className='mt-4 flex  flex-col justify-center   rounded-md  px-4 py-1 sm:px-16 lg:mx-10  lg:items-center'>
        <LoginForm />
      </div>
    </div>
  );
}
