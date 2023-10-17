import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className='max-w-screen  relative mx-4 flex min-h-screen  sm:mx-8 md:justify-center'>
      <div className='absolute inset-0 h-fit'>
        <h1 className='mt-4'>
          Legal
          <span className='font-bold'>Center</span>
        </h1>
      </div>

      <div className='mt-4 flex  flex-col justify-center   rounded-md  px-4 py-1 sm:px-16 lg:mx-10  lg:items-center'>
        <LoginForm />
      </div>
    </div>
  );
}
