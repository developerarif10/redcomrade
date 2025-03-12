import AccordionPage from "@/components/accordion-page";
import NumberCardItem from "@/components/number-count-item";
import SearchDonor from "@/components/Search/search-donor";
import { BlogsGrid } from "@/components/ui/card-grid";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="space-y-6 bg-cover bg-center bg-[url('/hero-main-bg.jpg')] relative h-screen">
        <div className="bg-[url('/noise-light.png')] bg-opacity-70 pb-20 md:pb-20 md:pt-10 h-full lg:py-30">
          <div className="container pt-24 flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>

            <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-800 to-violet-900 lg:text-5xl ">
              সমগ্র দেশজুড়ে রক্তদাতা সন্ধানের সবচেয়ে সহজ প্লাটফর্ম
            </h1>
            <p className="max-w-[42rem] text-slate-800 leading-normal text-muted-foreground sm:text-sm sm:leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              blanditiis voluptates.
            </p>
            {/* <Marquee velocity={25}>
             <div>Your content goes here</div>
            </Marquee> */}

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <SearchDonor />
            </div>
          </div>
        </div>
      </section>
      <Marquee>
        <div>
          Your content goes here. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Sapiente est voluptatem eius provident, sit quae
          iure quaerat unde autem aut pariatur. Laboriosam, commodi? Porro, quas
          quam consequuntur dolore a ut!
        </div>
      </Marquee>
      {/* Home page blogs section */}
      <BlogsGrid />
      {/* Card Section */}
      <NumberCardItem />
      {/* Infinity Slider section */}

      <InfiniteSlider gap={24} reverse>
        <Image
          width={100}
          height={60}
          src="/logo/apple_music_logo.svg"
          alt="Apple Music logo"
          className="h-[120px] w-auto"
        />
        <Image
          width={100}
          height={60}
          src="/logo/chrome_logo.svg"
          alt="Chrome logo"
          className="h-[120px] w-auto"
        />
        <Image
          width={100}
          height={60}
          src="/logo/strava_logo.svg"
          alt="Strava logo"
          className="h-[120px] w-auto"
        />
        <Image
          width={100}
          height={60}
          src="/logo/nintendo_logo.svg"
          alt="Nintendo logo"
          className="h-[120px] w-auto"
        />
        <Image
          width={100}
          height={60}
          src="/logo/jquery_logo.svg"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <Image
          width={100}
          height={60}
          src="/logo/prada_logo.svg"
          alt="Prada logo"
          className="h-[120px] w-auto"
        />
      </InfiniteSlider>

      {/* Accordion Section */}
      <AccordionPage />
    </>
  );
}
