import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center bg-red-500">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}
