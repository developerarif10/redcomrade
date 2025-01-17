import { getTotalUserCount } from "@/queries/users";
import {
  Building2,
  HeartHandshake,
  SmilePlus,
  UserRoundPlus,
} from "lucide-react";

const CardItem = ({ item }) => (
  <>
    <div className="flex items-center justify-center gap-3">
      <div className="bg-[#fff0f3] p-5 rounded-xl">{item.icon}</div>
      <div className="m-0">
        <h3 className="text-start text-[35px] text-red-600 font-bold leading-none">
          {item.count}
        </h3>
        <h5 className=" text-[#666666] leading-none">{item.title}</h5>
      </div>
    </div>
  </>
);

const NumberCardItem = async () => {
  const totalUser = await getTotalUserCount();

  const cards = [
    {
      count: `${totalUser}+`,
      title: "নিবন্ধিত ইউজার",
      icon: <UserRoundPlus size={28} color="#f03a7a" />,
    },
    {
      count: "50+",
      title: "স্বেচ্ছাসেবক",
      icon: <HeartHandshake size={28} color="#f03a7a" />,
    },
    {
      count: "120+",
      title: "ফাউন্ডেশন জড়িত",
      icon: <Building2 size={28} color="#f03a7a" />,
    },
    {
      count: "500",
      title: "উপকৃত হয়েছেন",
      icon: <SmilePlus size={28} color="#f03a7a" />,
    },
  ];

  return (
    <section className="lg:container py-14 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">আমাদের সাথে জড়িত</h1>
        </div>
        <div className="container flex gap-4 mt-10 lg:justify-evenly items-center flex-wrap">
          {cards.map((item, i) => (
            <div
              className="flex flex-col items-center justify-center gap-3"
              key={i}
            >
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NumberCardItem;
