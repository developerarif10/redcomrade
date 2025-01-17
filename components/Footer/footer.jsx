import Logo from "@/public/red_comrade_transparent_white_crop.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="#"
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
              <Image src={Logo} alt="footer logo" width={100} height={100} />
              {/* <span className="ml-1 text-xl">Red Comrade</span> */}
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              incidunt deserunt perspiciatis asperiores similique necessitatibus
              ipsam a in eveniet tenetur.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-400 hover:text-white"
                  >
                    যোগাযোগ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              কপিরাইট ©2024 রেড কমরেড। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <p className="text-sm text-white">
                Made by{" "}
                <Link
                  href="#"
                  className="text-gray-500 ml-1 hover:text-blue-400"
                  target="_blank"
                >
                  @developerarif
                </Link>
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
