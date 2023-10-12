import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="max-w-screen mx-4 sm:mx-8 flex h-full relative md:justify-center   ">
      <div className="mt-4 flex-col justify-center  border px-4 sm:px-16 py-1 rounded-md lg:mx-10  lg:items-center">
        <h1 className="mt-4">
          Legal<span className="font-bold">Center</span>
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
