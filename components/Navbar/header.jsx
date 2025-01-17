import { SessionProvider } from "next-auth/react";
import { MainNav } from "./main-nav";

const navLinks = [
  {
    title: "হোম",
    href: "/",
  },
  {
    title: "ডোনার",
    href: "/donor",
  },
  {
    title: "ব্লগস",
    href: "/blogs",
  },
  {
    title: "ডোনার যুক্ত করুন",
    href: "/register",
  },
];

export default function Header() {
  return (
    // <header className="z-40 backdrop-blur-md fixed top-0 left-0 right-0 border-b">
    //   <SessionProvider>
    //     <div className="container mx-auto px-4 lg:px-8">
    //       <div className="flex items-center justify-between py-4">
    //         <MainNav items={navLinks} />
    //       </div>
    //     </div>
    //   </SessionProvider>
    // </header>

    <header className="z-40 backdrop-blur-md fixed top-0 left-0 right-0 border-b">
      <SessionProvider>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <MainNav items={navLinks} />
          </div>
        </div>
      </SessionProvider>
    </header>
  );
}
