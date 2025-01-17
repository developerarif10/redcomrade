import Footer from "@/components/Footer/footer";
import Header from "@/components/Navbar/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
