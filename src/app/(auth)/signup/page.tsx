'use client';
import SignUpForm from '@/components/Forms/auth/SignUpForm';
import Link from 'next/link';
export default function SignupPage() {
  return (
    <main className='max-w-screen relative mx-8 flex  min-h-screen  items-center md:justify-center   '>
      <Link
        href={'/'}
        className='absolute inset-0 h-fit'
      >
        <h1 className='mt-4'>
          Legal
          <span className='font-bold'>Center</span>
        </h1>
      </Link>
      <div className='mt-2 flex-col justify-center  overflow-y-auto rounded-md  px-4 py-8 sm:px-16   md:mx-10   lg:mx-10   lg:items-center lg:py-1 '>
        <SignUpForm />
      </div>
    </main>
  );
}
