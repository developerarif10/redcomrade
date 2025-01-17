import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionPage() {
  return (
    <section className="container">
      <div className=" flex flex-wrap-reverse items-center justify-center lg:px-20 pb-20">
        <div className="flex w-full flex-col md:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>রক্তদান করার উপকারিতা কী?</AccordionTrigger>
              <AccordionContent>
                রক্তদান করার প্রধান উপকারিতা হল এটি জীবন রক্ষা করে। এছাড়াও, এটি
                স্বাস্থ্যের জন্যও উপকারী, কারণ রক্তদান করলে শরীর নতুন রক্ত তৈরি
                করে, যা রক্তচলাচল ভালো রাখে এবং হৃৎপিণ্ডের স্বাস্থ্য উন্নত করে।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                নিয়মিত রক্তদান করলে শরীরের কোনো ক্ষতি হয় কি?
              </AccordionTrigger>
              <AccordionContent>
                না, নিয়মিত রক্তদান করলে শরীরের কোনো ক্ষতি হয় না। বরং এটি
                শরীরের জন্য উপকারী। রক্তদান করলে শরীরের অতিরিক্ত লোহিত কণিকা
                কমে, যা হৃদরোগের ঝুঁকি কমায় এবং শরীরের রোগ প্রতিরোধ ক্ষমতা
                বাড়ায়।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                রক্তদান কি ওজন কমাতে সাহায্য করে?
              </AccordionTrigger>
              <AccordionContent>
                হ্যাঁ, রক্তদান করলে শরীরের অতিরিক্ত ক্যালোরি পোড়ে, যা ওজন
                নিয়ন্ত্রণে সাহায্য করতে পারে। তবে এটি ওজন কমানোর প্রধান উপায়
                নয়; নিয়মিত ব্যায়াম ও স্বাস্থ্যকর খাদ্যাভ্যাসের সঙ্গেই এটি
                প্রভাব ফেলে।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                রক্তদান করলে কী মানসিক শান্তি পাওয়া যায়?
              </AccordionTrigger>
              <AccordionContent>
                হ্যাঁ, রক্তদান করার পর মানসিক শান্তি এবং তৃপ্তি পাওয়া যায়,
                কারণ এটি একটি মহৎ কাজ যা অন্যের জীবন বাঁচাতে সাহায্য করে। এটি
                আপনার মধ্যে সামাজিক দায়িত্বশীলতার অনুভূতি বৃদ্ধি করে এবং মানসিক
                স্বাস্থ্যের উন্নতি ঘটায়।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                রক্তদান করলে শরীরে কোনো পরিবর্তন হয় কি?
              </AccordionTrigger>
              <AccordionContent>
                রক্তদান করার পর শরীর কিছুটা ক্লান্ত বা দুর্বল বোধ করতে পারে,
                কিন্তু এটি সাময়িক। কিছু সময়ের মধ্যেই শরীর নতুন রক্ত তৈরি করে
                এবং স্বাভাবিক অবস্থায় ফিরে আসে। সঠিক পরিমাণে পানি ও পুষ্টিকর
                খাবার গ্রহণ করলে দ্রুত পুনরুদ্ধার সম্ভব।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                কতোদিন পর পর রক্তদান করা উচিত?
              </AccordionTrigger>
              <AccordionContent>
                একজন সুস্থ ব্যক্তি প্রতি ৩ থেকে ৪ মাস পর রক্তদান করতে পারেন।
                পুরুষরা প্রতি ৩ মাস পর এবং মহিলারা প্রতি ৪ মাস পর রক্তদান করতে
                পারেন, কারণ মহিলাদের শরীরে আয়রনের প্রয়োজন বেশি হয়।
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:w-1/2 text-end md:pl-8 md:py-8 mb-10 md:mb-0 pb-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
            সচরাচর অনেক প্রশ্নের উত্তর
          </h1>
          <p className="leading-relaxed text-base">
            রক্তদান নিয়ে কমন কিছু প্রশ্নের উত্তরসহ এখানে লিস্ট করে দেওয়া আছে।
          </p>
        </div>
      </div>
    </section>
  );
}
