import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className='max-w-screen  relative mx-4 flex   h-full  sm:mx-8 md:justify-center'>
      <div className='mt-4 flex-col justify-center  rounded-md border px-4 py-1 sm:px-16 lg:mx-10  lg:items-center'>
        <h1 className='mt-4'>
          Legal
          <span className='font-bold'>Center</span>
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
