import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import React from "react";

const Stories = () => {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center p-24">
      <h1 className="text-primary text-[12rem]">Stories ...</h1>
      {/* <p className="text-primary text-[2rem] w-[50rem] mt-[-2rem]">Meet and experience the happiest stories!</p> */}

      <div className="mt-8 flex w-full z-0">
        <div className="w-1/2 flex justify-end mr-5 ">
          <img src="/max.jpeg" height={500} alt="max" />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-7xl">Meet Max!</h1>
          <p className="text-sm mt-6 mb-8 font-100">
            "Max, the Street Dog" is a heartwarming tale of resilience,
            friendship, and hope. Max, a scrappy street dog, navigates the
            bustling city streets with courage and determination, despite
            facing numerous challenges and obstacles along the way. Abandoned
            and alone, Max finds solace and companionship in unexpected
            places, forging deep connections with fellow strays and
            compassionate humans who show him kindness. Through Max's journey,
            the story explores themes of survival, loyalty, and the power of
            love to transcend adversity. Despite his rough exterior, Max
            possesses a gentle soul and an unwavering spirit, inspiring those
            around him to see the beauty and resilience in all creatures,
            regardless of their circumstances.
          </p>
          <div className="flex gap-5">
            <ArrowCircleLeft className="cursor-pointer" size={50} color="#0b0b0b" />
            <ArrowCircleRight className="cursor-pointer" size={50} color="#0b0b0b" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
