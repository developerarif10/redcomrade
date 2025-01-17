import { AtSign, Facebook, MapPin, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="container mx-auto text-gray-600 body-font">
      <div className=" flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            আমাদের সাথে যোগাযোগ
          </h1>
          <p className="mb-8 leading-relaxed">
            আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের যেকোন মাধ্যম ব্যবহার করতে
            পারেন।
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4 ">
              <div className="flex items-center gap-2 mb-2">
                <Phone size={20} />
                <p className="text-red-500">+8801700000000</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <PhoneCall size={20} />
                <p className="text-red-500">+8801700000000</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <AtSign size={20} />
                <p className="text-red-500">support@redcomrade.com</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Facebook size={20} />
                <p className="text-red-500">fb.com/groups/redcomrade</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} />
                <p className="text-red-500">চট্টগ্রাম, বাংলাদেশ</p>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-col">
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              যোগাযোগের সময় - সকাল 10 টা থেকে রাত 10 টা.
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
