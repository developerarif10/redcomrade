import BackButton from "@/components/BackButton";
import SignupForm from "./_components/signup-form";

export default function RegisterPage() {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center bg-red-500">
      <div className="container">
        <BackButton />
        <SignupForm />
      </div>
    </div>
  );
}
